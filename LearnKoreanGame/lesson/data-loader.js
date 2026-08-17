(function initKiipLessonDataLoader(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPLessonDataLoader = api;
})(typeof window !== "undefined" ? window : globalThis, function createKiipLessonDataLoaderApi() {
    function create(options) {
        const {
            root,
            document,
            lessons,
            lessonChunksGlobal,
            translationChunkPaths,
            getTranslationLocale,
            getTranslationChunk,
            applyTranslations,
            normalizeLesson
        } = options;
        const lessonCache = new Map();
        const lessonLoadPromises = new Map();
        const translationLoadPromises = new Map();
        const loadedScripts = new Set();

        function resolveScriptSrc(src) {
            return new URL(src, root.location.href).href;
        }

        function loadScript(src) {
            const absoluteSrc = resolveScriptSrc(src);
            if (loadedScripts.has(absoluteSrc)) return Promise.resolve();

            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = absoluteSrc;
                script.async = true;
                script.onload = () => {
                    loadedScripts.add(absoluteSrc);
                    resolve();
                };
                script.onerror = () => reject(new Error(`课程数据加载失败：${absoluteSrc}`));
                document.head.appendChild(script);
            });
        }

        function getLessonMeta(lessonId) {
            return lessons.find(lesson => lesson.id === lessonId) || lessons[0];
        }

        async function loadTranslation(locale, lessonId) {
            if (locale === "zh-CN" || getTranslationChunk(locale, lessonId)) return;
            const src = translationChunkPaths[locale]?.[lessonId];
            if (!src) return;

            const key = `${locale}:${lessonId}`;
            if (!translationLoadPromises.has(key)) {
                translationLoadPromises.set(key, loadScript(src).catch(error => console.warn(error)));
            }
            await translationLoadPromises.get(key);
        }

        async function load(lessonId) {
            const meta = getLessonMeta(lessonId);
            if (!meta) throw new Error("没有可加载的课程数据");

            if (lessonCache.has(meta.id)) {
                await loadTranslation(getTranslationLocale(), meta.id);
                return applyTranslations(lessonCache.get(meta.id));
            }

            if (!meta.chunk) {
                await loadTranslation(getTranslationLocale(), meta.id);
                const lesson = applyTranslations(normalizeLesson(meta));
                lessonCache.set(meta.id, lesson);
                return lesson;
            }

            if (!lessonLoadPromises.has(meta.id)) {
                lessonLoadPromises.set(meta.id, (async () => {
                    let chunk = root[lessonChunksGlobal]?.[meta.id];
                    if (!chunk) await loadScript(meta.chunk);
                    await loadTranslation(getTranslationLocale(), meta.id);
                    chunk = root[lessonChunksGlobal]?.[meta.id];
                    if (!chunk) throw new Error(`没有找到课程分片：${meta.id}`);
                    const lesson = applyTranslations(normalizeLesson({ ...meta, ...chunk }));
                    lessonCache.set(meta.id, lesson);
                    return lesson;
                })());
            }
            return lessonLoadPromises.get(meta.id);
        }

        function preloadNext(lessonId) {
            const currentIndex = lessons.findIndex(lesson => lesson.id === lessonId);
            const next = lessons[currentIndex + 1];
            if (!next?.chunk || lessonCache.has(next.id) || lessonLoadPromises.has(next.id)) return;
            load(next.id).catch(() => {});
        }

        function getCached(lessonId) {
            return lessonCache.get(lessonId);
        }

        function hasCached(lessonId) {
            return lessonCache.has(lessonId);
        }

        return Object.freeze({
            getLessonMeta,
            getCached,
            hasCached,
            load,
            loadTranslation,
            preloadNext,
            resolveScriptSrc
        });
    }

    return Object.freeze({ create });
});

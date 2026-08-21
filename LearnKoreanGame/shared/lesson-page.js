(function initKiipLessonPage(root, factory) {
    const api = factory(root);
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPLessonPage = api;
})(typeof window !== "undefined" ? window : globalThis, function createKiipLessonPage(root) {
    const levelSettings = Object.freeze({
        L1: { translationChunkMode: "field" },
        L2: { translationChunkMode: "field" },
        L3: { translationChunkMode: "all" },
        L4: { translationChunkMode: "field" }
    });

    function normalizeLevel(level) {
        const selected = String(level || "").toUpperCase();
        if (!levelSettings[selected]) throw new Error(`Unsupported lesson level: ${level}`);
        return selected;
    }

    function loadStyle(document, href) {
        return new Promise((resolve, reject) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            link.addEventListener("load", resolve, { once: true });
            link.addEventListener("error", () => reject(new Error(`Unable to load ${href}`)), { once: true });
            document.head.appendChild(link);
        });
    }

    function loadScript(document, src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.addEventListener("load", resolve, { once: true });
            script.addEventListener("error", () => reject(new Error(`Unable to load ${src}`)), { once: true });
            document.body.appendChild(script);
        });
    }

    function createConfig(level) {
        const selected = normalizeLevel(level);
        const number = selected.slice(1);
        return {
            level: selected,
            title: `${selected} Lesson Guide`,
            dataGlobal: `lessonGuide${selected}`,
            translationsGlobal: `lessonGuide${selected}Translations`,
            lessonChunksGlobal: `lessonGuide${selected}LessonChunks`,
            translationChunksGlobal: `lessonGuide${selected}TranslationChunks`,
            translationChunkMode: levelSettings[selected].translationChunkMode,
            dataScript: `lesson_manifest_l${number}.js`,
            searchScript: `lesson_search_l${number}.js`,
            searchGlobal: `lessonGuide${selected}Search`,
            translationScript: `lesson_translations_l${number}_en.js`,
            pronunciationScript: `lesson_pronunciation_l${number}.js`
        };
    }

    function renderShell(document, config) {
        const icons = root.KIIPIcons;
        const homeIcon = icons.render("home");
        const menuIcon = icons.render("menu");
        const rootElement = document.getElementById("lesson-guide-root");
        if (!rootElement) throw new Error("Missing #lesson-guide-root");
        const locale = root.KIIPLocale?.read(root.localStorage) || "zh-CN";
        const loadingTitle = locale === "en" ? "Loading lesson" : "正在加载课程";

        rootElement.innerHTML = `
            <div class="sidebar-overlay" id="sidebar-overlay"></div>
            <div class="app-shell">
                <aside class="sidebar" id="sidebar">
                    <div class="sidebar-header">
                        <div class="sidebar-title-row">
                            <h1 class="sidebar-title">${config.title}</h1>
                            <div class="title-actions">
                                <a class="home-link kiip-icon-button" href="lesson_guide.html" title="返回首页" aria-label="返回首页">${homeIcon}</a>
                                <div class="language-switcher" data-language-switcher></div>
                            </div>
                        </div>
                        <p class="sidebar-subtitle">单词、对话、文化文章中文伴学</p>
                        <input class="search-box" id="lesson-search" type="search" placeholder="搜索课文、单词或中文...">
                    </div>
                    <div class="lesson-list" id="lesson-list"></div>
                </aside>

                <div class="content-shell">
                    <header class="mobile-header">
                        <button class="menu-toggle kiip-icon-button" id="menu-toggle" type="button"
                            aria-controls="sidebar" aria-expanded="false" aria-label="打开课程菜单">${menuIcon}</button>
                        <div class="mobile-title" id="mobile-title">${config.title}</div>
                        <a class="home-link kiip-icon-button" href="lesson_guide.html" title="返回首页" aria-label="返回首页">${homeIcon}</a>
                        <div class="language-switcher" data-language-switcher></div>
                    </header>
                    <main class="main-content" id="main-content"><div class="todo-panel" role="status"><div><h2>${loadingTitle}</h2></div></div></main>
                    <div class="floating-listening-controls" id="floating-listening-controls" hidden></div>
                </div>
            </div>
        `;
    }

    async function mount(options = {}) {
        const document = options.document || root.document;
        if (!document) return;
        const config = createConfig(options.level || document.body?.dataset.level);

        document.title = `KIIP ${config.title}`;
        root.lessonGuideConfig = {
            ...config,
            get pronunciationOverrides() {
                return root.lessonGuidePronunciationOverrides || {};
            }
        };

        const stylesReady = Promise.all([
            loadStyle(document, "shared/styles/tokens.css"),
            loadStyle(document, "shared/styles/components.css"),
            loadStyle(document, "lesson_guide.css")
        ]);
        const coreReady = Promise.all([
            loadScript(document, "shared/icons.js"),
            loadScript(document, "shared/locale.js")
        ]);
        const dataReady = loadScript(document, config.dataScript);
        const activeLessonReady = dataReady.then(() => {
            const lessonData = root[config.dataGlobal];
            const requestedLessonId = new URLSearchParams(root.location?.search || "").get("lesson");
            const activeLesson = lessonData?.lessons?.find(lesson => lesson.id === requestedLessonId)
                || lessonData?.lessons?.[0];
            return activeLesson?.chunk ? loadScript(document, activeLesson.chunk) : undefined;
        });
        const dependenciesReady = Promise.all([
            dataReady,
            activeLessonReady,
            "lesson_guide_shared_tabs.js",
            config.translationScript,
            config.pronunciationScript,
            "lesson_listening_native.js",
            "lesson_grammar_links.js",
            "lesson/listening/follow.js",
            "lesson/listening/floating.js",
            "lesson/listening/sleep-timer.js",
            "lesson/listening/content.js",
            "lesson/listening/queue.js",
            "lesson/data-loader.js",
            "lesson/labels.js",
            "lesson/renderers.js"
        ].map(task => typeof task === "string" ? loadScript(document, task) : task));

        await Promise.all([stylesReady, coreReady]);
        renderShell(document, config);
        await dependenciesReady;
        await loadScript(document, "lesson_guide_app.js");
    }

    return Object.freeze({ levelSettings, normalizeLevel, createConfig, renderShell, mount });
});

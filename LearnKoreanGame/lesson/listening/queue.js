(function initKiipListeningQueue(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPListeningQueue = api;
})(typeof window !== "undefined" ? window : globalThis, function createKiipListeningQueueApi() {
    function create(dependencies) {
        const {
            t,
            getTranslationLocale,
            normalizeKoreanSpeechText,
            hasHangul,
            lessonTitleTranslation,
            wordMeaning,
            wordExampleTranslation,
            lessonDialogues,
            lineTranslation,
            cultureTitleTranslation,
            cultureTranslation
        } = dependencies;

        function translationLanguage() {
            return getTranslationLocale() === "en" ? "en-US" : "zh-CN";
        }

        function normalizeText(text, lang) {
            if (lang === "ko-KR") return normalizeKoreanSpeechText(text);
            return String(text || "").replace(/\s+/g, " ").trim();
        }

        function item(id, ref, section, label, text, mode = "sentence", pauseAfterMs = 700, lang = "ko-KR") {
            const normalizedText = normalizeText(text, lang);
            if (lang === "ko-KR" ? !hasHangul(normalizedText) : !normalizedText) return null;

            return { id, ref, section, label, text: normalizedText, lang, mode, pauseAfterMs };
        }

        function translationItem(id, ref, section, label, text, pauseAfterMs = 760) {
            return item(id, ref, section, label, text, "translation", pauseAfterMs, translationLanguage());
        }

        function pushPair(queue, koreanItem, localizedItem) {
            if (koreanItem) queue.push(koreanItem);
            if (localizedItem) queue.push(localizedItem);
        }

        function build(lesson, mode = "lesson") {
            const queue = [];
            const include = section => mode === "lesson" || mode === section;

            if (mode === "lesson") {
                pushPair(
                    queue,
                    item("lesson-title", "lesson-title", "overview", t("listeningModeLesson"), lesson.titleKo, "sentence", 900),
                    translationItem("lesson-title-translation", "lesson-title", "overview", t("listeningModeLesson"), lessonTitleTranslation(lesson), 900)
                );
            }

            if (include("vocabulary")) {
                (lesson.vocabulary || []).forEach((entry, index) => {
                    const ref = `vocab-${index}`;
                    pushPair(
                        queue,
                        item(`vocab-${index}-word`, ref, "vocabulary", t("tabsVocabulary"), entry.ko, "word", 420),
                        translationItem(`vocab-${index}-word-translation`, ref, "vocabulary", t("tabsVocabulary"), wordMeaning(entry), 560)
                    );
                    pushPair(
                        queue,
                        item(`vocab-${index}-example`, ref, "vocabulary", t("tabsVocabulary"), entry.exampleKo, "sentence", 820),
                        translationItem(`vocab-${index}-example-translation`, ref, "vocabulary", t("tabsVocabulary"), wordExampleTranslation(entry), 820)
                    );
                });
            }

            if (include("dialogue")) {
                lessonDialogues(lesson).forEach((dialogue, dialogueIndex) => {
                    (dialogue.lines || []).forEach((line, lineIndex) => {
                        const ref = `dialogue-${dialogueIndex}-line-${lineIndex}`;
                        const label = dialogue.title || t("tabsDialogue");
                        pushPair(
                            queue,
                            item(`dialogue-${dialogueIndex}-line-${lineIndex}`, ref, "dialogue", label, line.ko, "sentence", 900),
                            translationItem(`dialogue-${dialogueIndex}-line-${lineIndex}-translation`, ref, "dialogue", label, lineTranslation(line), 900)
                        );
                    });
                });
            }

            if (include("culture") && lesson.culture) {
                (lesson.culture.paragraphs || []).forEach((paragraph, index) => {
                    const ref = `culture-paragraph-${index}`;
                    const label = cultureTitleTranslation(lesson.culture) || t("tabsCulture");
                    pushPair(
                        queue,
                        item(`culture-paragraph-${index}`, ref, "culture", label, paragraph.ko, "sentence", 1100),
                        translationItem(`culture-paragraph-${index}-translation`, ref, "culture", label, cultureTranslation(paragraph, "translation"), 1100)
                    );
                });
            }

            return queue;
        }

        return Object.freeze({ build });
    }

    return Object.freeze({ create });
});

(function initKiipListeningContent(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPListeningContent = api;
})(typeof window !== "undefined" ? window : globalThis, function createKiipListeningContentApi() {
    function normalizeKoreanSpeechText(value) {
        return String(value || "")
            .split(/\s+\/\s+/)[0]
            .replace(/\s+/g, " ")
            .trim();
    }

    function hasHangul(value) {
        return /[가-힣]/.test(String(value || ""));
    }

    function isLessonDialogue(dialogue) {
        const sourceText = [
            dialogue?.source,
            dialogue?.focus,
            dialogue?.title
        ].filter(Boolean).join(" ");

        return !/(읽기|쓰기|발음)/.test(sourceText);
    }

    function lessonDialogues(lesson) {
        return (lesson?.dialogues || []).filter(isLessonDialogue);
    }

    return Object.freeze({
        normalizeKoreanSpeechText,
        hasHangul,
        isLessonDialogue,
        lessonDialogues
    });
});

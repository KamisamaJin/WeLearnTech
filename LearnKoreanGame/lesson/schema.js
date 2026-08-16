(function initKiipLessonSchema(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPLessonSchema = api;
})(typeof window !== "undefined" ? window : globalThis, function createLessonSchema() {
    function isRecord(value) {
        return value !== null && typeof value === "object" && !Array.isArray(value);
    }

    function validateLessonMeta(lesson) {
        const issues = [];
        if (!isRecord(lesson)) return ["lesson must be an object"];
        if (!/^l[1-4]-\d{2}$/.test(lesson.id || "")) issues.push("id must match l1-01 through l4-99");
        if (!Number.isInteger(lesson.number) || lesson.number < 1) issues.push("number must be a positive integer");
        if (!String(lesson.titleKo || "").trim()) issues.push("titleKo is required");
        if (lesson.translations !== undefined && !isRecord(lesson.translations)) issues.push("translations must be an object");
        return issues;
    }

    function validateLessonContent(lesson) {
        const issues = validateLessonMeta(lesson);
        for (const key of ["goals", "grammar", "vocabulary", "dialogues", "practice"]) {
            if (lesson[key] !== undefined && !Array.isArray(lesson[key])) issues.push(`${key} must be an array`);
        }
        if (lesson.culture !== undefined && lesson.culture !== null && !isRecord(lesson.culture)) {
            issues.push("culture must be an object or null");
        }
        return issues;
    }

    function validateGuide(guide) {
        if (!isRecord(guide)) return ["guide must be an object"];
        if (!Array.isArray(guide.lessons)) return ["guide.lessons must be an array"];
        return guide.lessons.flatMap(lesson => validateLessonContent(lesson).map(issue => `${lesson?.id || "unknown"}: ${issue}`));
    }

    return Object.freeze({ isRecord, validateLessonMeta, validateLessonContent, validateGuide });
});

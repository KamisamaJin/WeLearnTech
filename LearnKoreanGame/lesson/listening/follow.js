(function initKiipListeningFollow(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPListeningFollow = api;
})(typeof window !== "undefined" ? window : globalThis, function createListeningFollowApi() {
    const sectionTabs = Object.freeze({
        overview: "overview",
        vocabulary: "vocabulary",
        dialogue: "dialogue",
        culture: "culture"
    });

    function tabForItem(item) {
        return sectionTabs[item?.section] || null;
    }

    function shouldFollow({ status, currentRef, lastFollowedRef }) {
        return Boolean(
            currentRef
            && currentRef !== lastFollowedRef
            && ["preparing", "playing", "paused"].includes(status)
        );
    }

    function continuedRef({ nextRef, currentRef, lastFollowedRef }) {
        if (!nextRef) return "";
        return nextRef === currentRef || nextRef === lastFollowedRef ? nextRef : "";
    }

    function scrollPlan(targetRect, rootRect, options = {}) {
        if (!targetRect || !rootRect || rootRect.height <= 0) {
            return { shouldScroll: false, behavior: "auto" };
        }

        const comfortInset = Number.isFinite(options.comfortInset)
            ? options.comfortInset
            : Math.min(96, rootRect.height * 0.12);
        const comfortablyVisible = targetRect.top >= rootRect.top + comfortInset
            && targetRect.bottom <= rootRect.bottom - comfortInset;
        if (comfortablyVisible) return { shouldScroll: false, behavior: "auto" };

        const targetCenter = (targetRect.top + targetRect.bottom) / 2;
        const rootCenter = (rootRect.top + rootRect.bottom) / 2;
        const distance = Math.abs(targetCenter - rootCenter);
        const maxSmoothDistance = Number.isFinite(options.maxSmoothDistance)
            ? options.maxSmoothDistance
            : rootRect.height * 0.85;
        return {
            shouldScroll: true,
            behavior: distance <= maxSmoothDistance ? "smooth" : "auto"
        };
    }

    return Object.freeze({ sectionTabs, tabForItem, shouldFollow, continuedRef, scrollPlan });
});

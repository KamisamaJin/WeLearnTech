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

    return Object.freeze({ sectionTabs, tabForItem, shouldFollow });
});

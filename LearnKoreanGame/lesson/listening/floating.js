(function initKiipListeningFloating(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPListeningFloating = api;
})(typeof window !== "undefined" ? window : globalThis, function createListeningFloatingApi() {
    const activeStatuses = new Set(["playing", "paused"]);
    const minimumVisibleMs = 3000;
    const playerEnterRatio = 0.05;
    const playerExitRatio = 0.01;

    function visibleRatio(rect, rootRect) {
        if (!rect || !rootRect || rect.width <= 0 || rect.height <= 0) return 0;
        const visibleWidth = Math.max(0, Math.min(rect.right, rootRect.right) - Math.max(rect.left, rootRect.left));
        const visibleHeight = Math.max(0, Math.min(rect.bottom, rootRect.bottom) - Math.max(rect.top, rootRect.top));
        return Math.min(1, (visibleWidth * visibleHeight) / (rect.width * rect.height));
    }

    function isVisible(rect, rootRect, threshold = 0.2) {
        return visibleRatio(rect, rootRect) >= threshold;
    }

    function isIntersecting(rect, rootRect) {
        return visibleRatio(rect, rootRect) > 0;
    }

    function resolvePlayerVisible(ratio, wasVisible) {
        const normalizedRatio = Math.max(0, Math.min(1, Number(ratio) || 0));
        return wasVisible
            ? normalizedRatio > playerExitRatio
            : normalizedRatio >= playerEnterRatio;
    }

    function shouldShow({ status, playerVisible, lessonMatches }) {
        return activeStatuses.has(status) && !playerVisible && Boolean(lessonMatches);
    }

    function createDisplayLatch(options = {}) {
        const schedule = options.setTimeout || setTimeout;
        const cancel = options.clearTimeout || clearTimeout;
        const now = options.now || Date.now;
        const duration = Number.isFinite(options.minimumVisibleMs) ? options.minimumVisibleMs : minimumVisibleMs;
        const onChange = typeof options.onChange === "function" ? options.onChange : () => {};
        let visible = Boolean(options.initialVisible);
        let shownAt = visible ? now() : 0;
        let pendingHide = null;
        let hideGeneration = 0;

        function clearPendingHide() {
            if (pendingHide === null) return;
            cancel(pendingHide);
            pendingHide = null;
            hideGeneration += 1;
        }

        function commit(nextVisible) {
            if (visible === nextVisible) return;
            visible = nextVisible;
            if (visible) shownAt = now();
            onChange(visible);
        }

        function update(nextVisible, updateOptions = {}) {
            if (nextVisible) {
                clearPendingHide();
                commit(true);
                return;
            }

            if (!visible) {
                clearPendingHide();
                return;
            }

            if (updateOptions.immediate) {
                clearPendingHide();
                commit(false);
                return;
            }

            if (pendingHide !== null) return;
            const remaining = Math.max(0, shownAt + duration - now());
            if (remaining === 0) {
                commit(false);
                return;
            }

            const generation = ++hideGeneration;
            pendingHide = schedule(() => {
                if (generation !== hideGeneration) return;
                pendingHide = null;
                commit(false);
            }, remaining);
        }

        function dispose() {
            clearPendingHide();
        }

        return Object.freeze({ update, dispose, getVisible: () => visible });
    }

    return Object.freeze({
        activeStatuses,
        minimumVisibleMs,
        playerEnterRatio,
        playerExitRatio,
        visibleRatio,
        isVisible,
        isIntersecting,
        resolvePlayerVisible,
        shouldShow,
        createDisplayLatch
    });
});

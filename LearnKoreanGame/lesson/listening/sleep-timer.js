(function initKiipSleepTimer(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPSleepTimer = api;
})(typeof window !== "undefined" ? window : globalThis, function createSleepTimerApi() {
    const durationMinutes = Object.freeze([0, 10, 20, 30, 45, 60]);

    function normalizeDuration(value) {
        const duration = Number(value) || 0;
        return durationMinutes.includes(duration) ? duration : 0;
    }

    function normalizeEndsAt(value) {
        const endsAt = Number(value) || 0;
        return endsAt > 0 ? Math.floor(endsAt) : 0;
    }

    function remainingMilliseconds(endsAt, now = Date.now()) {
        return Math.max(0, normalizeEndsAt(endsAt) - now);
    }

    function formatRemaining(endsAt, now = Date.now()) {
        const totalSeconds = Math.ceil(remainingMilliseconds(endsAt, now) / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${String(seconds).padStart(2, "0")}`;
    }

    function createScheduler(options = {}) {
        const now = options.now || Date.now;
        const schedule = options.setTimeout || setTimeout;
        const unschedule = options.clearTimeout || clearTimeout;
        let endsAt = 0;
        let timer = null;

        function clearScheduledTick() {
            if (timer != null) unschedule(timer);
            timer = null;
        }

        function tick() {
            clearScheduledTick();
            if (!endsAt) return;
            const remaining = remainingMilliseconds(endsAt, now());
            options.onTick?.(endsAt, remaining);
            if (remaining <= 0) {
                const expiredEndsAt = endsAt;
                endsAt = 0;
                options.onExpire?.(expiredEndsAt);
                return;
            }
            timer = schedule(tick, Math.min(1000, remaining));
        }

        function setEndsAt(value) {
            endsAt = normalizeEndsAt(value);
            tick();
            return endsAt;
        }

        function cancel() {
            endsAt = 0;
            clearScheduledTick();
            options.onTick?.(0, 0);
        }

        return Object.freeze({ setEndsAt, cancel, getEndsAt: () => endsAt, tick });
    }

    return Object.freeze({
        durationMinutes,
        normalizeDuration,
        normalizeEndsAt,
        remainingMilliseconds,
        formatRemaining,
        createScheduler
    });
});

(function initLessonListeningNative(root, factory) {
    const api = factory(root);
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.lessonGuideNativeListening = api;
})(typeof window !== "undefined" ? window : globalThis, function createLessonListeningNative(root) {
    const protocolVersion = 1;
    const allowedStatuses = new Set(["idle", "preparing", "playing", "paused", "ended", "error"]);

    function nativePlugin() {
        return root?.Capacitor?.Plugins?.Listening || null;
    }

    function serializableItem(item) {
        return {
            id: String(item.id || ""),
            ref: String(item.ref || ""),
            section: String(item.section || ""),
            label: String(item.label || ""),
            text: String(item.text || ""),
            lang: String(item.lang || ""),
            mode: String(item.mode || "sentence"),
            pauseAfterMs: Math.max(0, Number(item.pauseAfterMs) || 0)
        };
    }

    function buildSessionId(lesson, settings) {
        return [
            lesson.id,
            settings.translationLocale,
            settings.mode,
            Date.now().toString(36)
        ].join(":");
    }

    function buildQueuePayload(options) {
        const lesson = options.lesson || {};
        const settings = options.settings || {};
        const queue = Array.isArray(options.queue) ? options.queue : [];

        return {
            protocolVersion,
            sessionId: options.sessionId || buildSessionId(lesson, settings),
            lesson: {
                id: String(lesson.id || ""),
                level: String(options.level || ""),
                title: String(lesson.titleKo || ""),
                translation: String(options.lessonTranslation || "")
            },
            settings: {
                mode: String(settings.mode || "lesson"),
                speed: String(settings.speed || "normal"),
                repeat: Math.min(3, Math.max(1, Number(settings.repeat) || 1)),
                translationLocale: String(settings.translationLocale || "zh-CN")
            },
            startIndex: Math.min(
                Math.max(0, Number(options.startIndex) || 0),
                Math.max(queue.length - 1, 0)
            ),
            items: queue.map(serializableItem)
        };
    }

    function normalizeState(value = {}) {
        const status = allowedStatuses.has(value.status) ? value.status : "idle";
        return {
            sessionId: String(value.sessionId || ""),
            status,
            lessonId: value.lessonId == null ? null : String(value.lessonId),
            index: Math.max(0, Number(value.index) || 0),
            itemId: String(value.itemId || ""),
            ref: String(value.ref || ""),
            positionMs: Math.max(0, Number(value.positionMs) || 0),
            durationMs: Math.max(0, Number(value.durationMs) || 0),
            speed: String(value.speed || "normal"),
            repeat: Math.min(3, Math.max(1, Number(value.repeat) || 1)),
            sleepTimerEndsAt: Math.max(0, Number(value.sleepTimerEndsAt) || 0),
            endReason: String(value.endReason || ""),
            error: value.error ? String(value.error) : ""
        };
    }

    function createDriver(options = {}) {
        let available = false;
        let listenerHandle = null;

        async function connect() {
            const plugin = nativePlugin();
            if (!plugin) return false;

            const result = await plugin.isAvailable();
            available = Boolean(result?.available);
            if (!available || listenerHandle) return available;

            listenerHandle = await plugin.addListener("listeningStateChanged", state => {
                options.onStateChanged?.(normalizeState(state));
            });
            return available;
        }

        async function invoke(method, payload) {
            const plugin = nativePlugin();
            if (!available) await connect();
            if (!available || typeof plugin?.[method] !== "function") {
                throw new Error("Native listening is unavailable");
            }
            return plugin[method](payload);
        }

        return {
            connect,
            isAvailable: () => available,
            loadQueue: payload => invoke("loadQueue", payload),
            play: startIndex => invoke("play", startIndex == null ? {} : { startIndex }),
            pause: () => invoke("pause", {}),
            resume: () => invoke("resume", {}),
            stop: endReason => invoke("stop", endReason ? { endReason } : {}),
            skipTo: index => invoke("skipTo", { index }),
            skipNext: () => invoke("skipNext", {}),
            skipPrevious: () => invoke("skipPrevious", {}),
            updateSettings: settings => invoke("updateSettings", settings),
            setSleepTimer: endsAt => invoke("setSleepTimer", { endsAt }),
            cancelSleepTimer: () => invoke("cancelSleepTimer", {}),
            getState: async () => normalizeState(await invoke("getState", {})),
            disconnect: async () => {
                await listenerHandle?.remove?.();
                listenerHandle = null;
                available = false;
            }
        };
    }

    return {
        protocolVersion,
        buildQueuePayload,
        normalizeState,
        createDriver
    };
});

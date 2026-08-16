(function initKiipLocale(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPLocale = api;
})(typeof window !== "undefined" ? window : globalThis, function createKiipLocale() {
    const supportedLocales = Object.freeze(["zh-CN", "en"]);
    const storageKeys = Object.freeze({
        language: "lessonGuideLocale",
        legacyUi: "lessonGuideUiLocale",
        legacyTranslation: "lessonGuideTranslationLocale"
    });
    const shortLabels = Object.freeze({ "zh-CN": "中", en: "EN" });

    function normalize(locale) {
        return supportedLocales.includes(locale) ? locale : "zh-CN";
    }

    function next(locale) {
        return normalize(locale) === "zh-CN" ? "en" : "zh-CN";
    }

    function read(storage) {
        if (!storage) return "zh-CN";
        const preferred = storage.getItem(storageKeys.language);
        if (supportedLocales.includes(preferred)) return preferred;
        const legacyTranslation = storage.getItem(storageKeys.legacyTranslation);
        if (supportedLocales.includes(legacyTranslation)) return legacyTranslation;
        return normalize(storage.getItem(storageKeys.legacyUi));
    }

    function write(storage, locale) {
        const selected = normalize(locale);
        if (!storage) return selected;
        storage.setItem(storageKeys.language, selected);
        storage.setItem(storageKeys.legacyUi, selected);
        storage.setItem(storageKeys.legacyTranslation, selected);
        return selected;
    }

    function createStore(options = {}) {
        const host = options.host || (typeof window !== "undefined" ? window : null);
        const storage = options.storage || host?.localStorage || null;
        const subscribers = new Set();
        let current = read(storage);

        function notify() {
            subscribers.forEach(listener => listener(current));
        }

        function set(locale) {
            const selected = write(storage, locale);
            if (selected === current) return current;
            current = selected;
            notify();
            return current;
        }

        function handleStorage(event) {
            if (event.key !== storageKeys.language) return;
            const selected = read(storage);
            if (selected === current) return;
            current = selected;
            notify();
        }

        host?.addEventListener?.("storage", handleStorage);

        return Object.freeze({
            get: () => current,
            set,
            toggle: () => set(next(current)),
            subscribe(listener) {
                subscribers.add(listener);
                return () => subscribers.delete(listener);
            },
            destroy() {
                subscribers.clear();
                host?.removeEventListener?.("storage", handleStorage);
            }
        });
    }

    return Object.freeze({
        supportedLocales,
        storageKeys,
        shortLabels,
        normalize,
        next,
        read,
        write,
        createStore
    });
});

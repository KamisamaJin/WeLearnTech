(function initKiipIcons(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPIcons = api;
})(typeof window !== "undefined" ? window : globalThis, function createKiipIcons() {
    const paths = Object.freeze({
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path>',
        chevronLeft: '<path d="m15 18-6-6 6-6"></path>',
        chevronRight: '<path d="m9 18 6-6-6-6"></path>',
        clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
        globe: '<circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 0 20"></path><path d="M12 2a15.3 15.3 0 0 0 0 20"></path>',
        home: '<path d="m3 10.5 9-7 9 7"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path>',
        menu: '<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>',
        next: '<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>',
        previous: '<path d="M19 12H5"></path><path d="m11 18-6-6 6-6"></path>',
        stop: '<rect x="7" y="7" width="10" height="10" rx="1"></rect>'
    });

    function render(name, options = {}) {
        if (!paths[name]) throw new Error(`Unknown KIIP icon: ${name}`);
        const className = String(options.className || "").replace(/[^a-zA-Z0-9_\- ]/g, "").trim();
        const classAttribute = className ? ` class="${className}"` : "";
        return `<svg${classAttribute} viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
    }

    return Object.freeze({ paths, render });
});

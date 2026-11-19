// Desktop navigation stays available; the same panel becomes a disclosure on phones.
window.KIIPDrawer = function createDrawer({ panel, overlay, trigger, media, background, label }) {
    const header = trigger.parentElement;
    const behind = [...background, ...Array.from(header.children).filter(el => el !== trigger)];
    const focusPanel = () => (panel.querySelector('[aria-current="page"]') || panel).focus({ preventScroll: true });
    panel.tabIndex = -1;
    function set(force) {
        const wasOpen = panel.classList.contains("open");
        const open = media.matches && (force ?? !wasOpen);
        if (!open && media.matches && (wasOpen || panel.contains(document.activeElement))) {
            trigger.focus({ preventScroll: true });
        }
        panel.inert = media.matches && !open;
        behind.forEach(el => { el.inert = open; });
        panel.classList.toggle("open", open);
        overlay.classList.toggle("open", open);
        trigger.setAttribute("aria-expanded", String(open));
        trigger.setAttribute("aria-label", label(open));
        if (open && !wasOpen) focusPanel();
    }
    const position = () => {
        if (media.matches) panel.style.setProperty("--drawer-top", header.getBoundingClientRect().bottom + "px");
    };
    new ResizeObserver(position).observe(header);
    media.addEventListener("change", () => { set(false); position(); });
    trigger.addEventListener("click", () => set());
    overlay.addEventListener("click", () => set(false));
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && panel.classList.contains("open")) {
            event.preventDefault();
            set(false);
        }
    });
    position();
    set(false);
    return set;
};

(function initGrammarWiki(root, factory) {
    const api = factory(root);
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root?.document) {
        root.grammarWikiApp = api;
        api.mount();
    }
})(typeof window !== "undefined" ? window : globalThis, function createGrammarWiki(root) {
    const appLocales = ["zh-CN", "en"];
    const localeStorageKey = "lessonGuideLocale";
    const localeNames = { "zh-CN": "中文", en: "English" };
    const localeShortNames = { "zh-CN": "中", en: "EN" };
    const messages = {
        "zh-CN": {
            pageTitle: "K-Lingo 韩语语法百科",
            sidebarTitle: "语法百科",
            guideTitle: "课程导学首页",
            guideSubtitle: "Level 1-4 · 单词 · 对话 · 文化",
            guideAria: "打开课程导学首页",
            searchPlaceholder: "搜索韩语语法或中文解释...",
            allLevels: "全部",
            levelL1: "L1 初级1",
            levelL2: "L2 初级2",
            levelL3: "L3 中级1",
            levelL4: "L4 中级2",
            emptyTitle: "K-Lingo 韩语语法百科",
            emptyBody: "从菜单选择一个语法点开始学习。",
            noResults: "没有匹配的语法点",
            meaningRules: "含义与结合规则",
            examples: "例句",
            deepDive: "深入解析",
            previous: "上一条",
            next: "下一条",
            languageSettings: "语言设置",
            languageLabel: "显示语言",
            openMenu: "打开语法菜单",
            closeMenu: "关闭语法菜单",
            contentPending: "中文内容待补",
            extraGrammar: "补充语法",
        },
        en: {
            pageTitle: "K-Lingo Korean Grammar Wiki",
            sidebarTitle: "Grammar Wiki",
            guideTitle: "Lesson Guide Home",
            guideSubtitle: "Level 1-4 · Vocabulary · Dialogue · Culture",
            guideAria: "Open Lesson Guide home",
            searchPlaceholder: "Search Korean grammar or English notes...",
            allLevels: "All",
            levelL1: "L1 Beginner 1",
            levelL2: "L2 Beginner 2",
            levelL3: "L3 Intermediate 1",
            levelL4: "L4 Intermediate 2",
            emptyTitle: "K-Lingo Korean Grammar Wiki",
            emptyBody: "Choose a grammar point from the menu to start learning.",
            noResults: "No matching grammar points",
            meaningRules: "Meaning & Rules",
            examples: "Examples",
            deepDive: "Deep Dive Notes",
            previous: "Previous",
            next: "Next",
            languageSettings: "Language settings",
            languageLabel: "Display language",
            openMenu: "Open grammar menu",
            closeMenu: "Close grammar menu",
            contentPending: "English content pending",
            extraGrammar: "Extra Grammar",
        },
    };

    function normalizeLocale(locale) {
        return appLocales.includes(locale) ? locale : "zh-CN";
    }

    function translationFor(item, locale) {
        return item?.translations?.[normalizeLocale(locale)] || null;
    }

    function localizedCategory(category, locale) {
        const selectedLocale = normalizeLocale(locale);
        return String(category || "").replace(
            /추가 문법\s*\(Extra Grammar\)/gi,
            messages[selectedLocale].extraGrammar,
        );
    }

    function searchTextFor(item, locale) {
        const translation = translationFor(item, locale) || {};
        return [
            item?.title,
            localizedCategory(item?.category, locale),
            translation.description,
            translation.meaning,
            ...(translation.rules || []),
            ...(translation.notes || []),
            ...(item?.examples || []).flatMap(example => [example.ko, example.translations?.[normalizeLocale(locale)]]),
        ].filter(Boolean).join(" ").toLocaleLowerCase();
    }

    function itemMatches(item, locale, query) {
        const normalizedQuery = String(query || "").trim().toLocaleLowerCase();
        return !normalizedQuery || searchTextFor(item, locale).includes(normalizedQuery);
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function languageIcon() {
        return `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18"></path>
                <path d="M12 3a14 14 0 0 1 0 18"></path>
                <path d="M12 3a14 14 0 0 0 0 18"></path>
            </svg>
        `;
    }

    function mount(items = typeof grammarDB !== "undefined" ? grammarDB : []) {
        const document = root.document;
        if (!document || !Array.isArray(items)) return;

        const navList = document.getElementById("nav-list");
        const mainContent = document.getElementById("main-content");
        const searchInput = document.getElementById("search");
        const sidebar = document.getElementById("sidebar");
        const sidebarOverlay = document.getElementById("sidebar-overlay");
        const mobileHeader = document.getElementById("mobile-header");
        const mobileDetailLevel = document.getElementById("mobile-detail-level");
        const mobileDetailText = document.getElementById("mobile-detail-text");
        const menuToggle = document.getElementById("menu-toggle");
        const btnPrev = document.getElementById("btn-prev");
        const btnNext = document.getElementById("btn-next");
        let currentLevel = "all";
        let currentItemId = null;
        let detailTitleObserver = null;
        let currentLocale = normalizeLocale(root.localStorage?.getItem(localeStorageKey));

        function t(key) {
            return messages[currentLocale]?.[key] || messages["zh-CN"][key] || key;
        }

        function currentTranslation(item) {
            return translationFor(item, currentLocale) || {
                description: t("contentPending"),
                meaning: t("contentPending"),
                rules: [t("contentPending")],
                notes: [t("contentPending")],
            };
        }

        function currentItem() {
            return items.find(item => item.id === currentItemId) || null;
        }

        function closeLanguageMenus(except = null) {
            document.querySelectorAll("[data-language-menu]").forEach(menu => {
                if (menu === except) return;
                menu.hidden = true;
                menu.previousElementSibling?.setAttribute("aria-expanded", "false");
            });
        }

        function renderLanguageSwitchers() {
            document.querySelectorAll("[data-language-switcher]").forEach(switcher => {
                const expanded = switcher.querySelector("[data-language-menu]:not([hidden])") !== null;
                const desktop = switcher.dataset.languageVariant === "desktop";
                const label = desktop ? localeNames[currentLocale] : localeShortNames[currentLocale];
                switcher.innerHTML = `
                    <button class="language-toggle" type="button" data-language-toggle
                        aria-label="${escapeHtml(t("languageSettings"))}"
                        title="${escapeHtml(t("languageSettings"))}"
                        aria-expanded="${expanded ? "true" : "false"}">
                        ${languageIcon()}
                        <span>${escapeHtml(label)}</span>
                    </button>
                    <div class="language-menu" data-language-menu ${expanded ? "" : "hidden"}>
                        <p>${escapeHtml(t("languageLabel"))}</p>
                        ${appLocales.map(locale => `
                            <button class="language-option ${locale === currentLocale ? "active" : ""}"
                                type="button" data-locale-value="${locale}">
                                ${escapeHtml(localeNames[locale])}
                            </button>
                        `).join("")}
                    </div>
                `;
            });
        }

        function applyStaticLocale() {
            document.documentElement.lang = currentLocale;
            document.title = t("pageTitle");
            document.querySelector(".sidebar-title").textContent = t("sidebarTitle");
            document.querySelector("[data-guide-title]").textContent = t("guideTitle");
            document.querySelector("[data-guide-subtitle]").textContent = t("guideSubtitle");
            document.querySelectorAll("[data-guide-link]").forEach(link => {
                link.setAttribute("aria-label", t("guideAria"));
                link.title = t("guideAria");
            });
            searchInput.placeholder = t("searchPlaceholder");
            document.querySelector('[data-level="all"]').textContent = t("allLevels");
            ["L1", "L2", "L3", "L4"].forEach(level => {
                document.querySelector(`[data-level="${level}"]`).textContent = t(`level${level}`);
            });
            const emptyTitle = document.querySelector("[data-empty-title]");
            const emptyBody = document.querySelector("[data-empty-body]");
            if (emptyTitle) emptyTitle.textContent = t("emptyTitle");
            if (emptyBody) emptyBody.textContent = t("emptyBody");
            menuToggle.setAttribute("aria-label", sidebar.classList.contains("open") ? t("closeMenu") : t("openMenu"));
            renderLanguageSwitchers();
        }

        function getFilteredItems(query = searchInput.value) {
            return items.filter(item => {
                if (currentLevel !== "all" && item.level !== currentLevel) return false;
                return itemMatches(item, currentLocale, query);
            });
        }

        function renderNav(query = searchInput.value) {
            navList.innerHTML = "";
            const categories = new Map();
            getFilteredItems(query).forEach(item => {
                if (!categories.has(item.category)) categories.set(item.category, []);
                categories.get(item.category).push(item);
            });

            if (!categories.size) {
                const empty = document.createElement("li");
                empty.className = "nav-empty";
                empty.textContent = t("noResults");
                navList.appendChild(empty);
                return;
            }

            categories.forEach(categoryItems => {
                const category = document.createElement("li");
                category.className = "nav-category";
                category.textContent = localizedCategory(categoryItems[0].category, currentLocale);
                navList.appendChild(category);

                categoryItems.forEach(item => {
                    const entry = document.createElement("li");
                    entry.className = `nav-item${item.id === currentItemId ? " active" : ""}`;
                    entry.dataset.grammarId = item.id;
                    entry.innerHTML = `
                        <span class="nav-level ${item.level.toLowerCase()}">${escapeHtml(item.level)}</span>
                        <span class="nav-title" lang="ko">${escapeHtml(item.title)}</span>
                    `;
                    entry.addEventListener("click", () => {
                        currentItemId = item.id;
                        renderNav();
                        renderContent(item);
                        if (root.innerWidth <= 768) toggleMenu(false);
                    });
                    navList.appendChild(entry);
                });
            });
        }

        function updateNavButtons() {
            const filteredItems = getFilteredItems();
            const index = filteredItems.findIndex(item => item.id === currentItemId);
            const controls = document.getElementById("nav-float-btns");
            controls.classList.toggle("visible", index >= 0 && filteredItems.length > 1);

            const previous = filteredItems[index - 1];
            const next = filteredItems[index + 1];
            btnPrev.classList.toggle("disabled", !previous);
            btnPrev.disabled = !previous;
            document.getElementById("prev-label").textContent = previous?.title || t("previous");
            btnNext.classList.toggle("disabled", !next);
            btnNext.disabled = !next;
            document.getElementById("next-label").textContent = next?.title || t("next");
        }

        function renderContent(item, options = {}) {
            currentItemId = item.id;
            const previousScrollTop = mainContent.scrollTop;
            const translation = currentTranslation(item);
            const rules = (translation.rules || []).map(rule => `
                <div class="rule-card"><span class="localized-rule">${escapeHtml(rule)}</span></div>
            `).join("");
            const examples = item.examples.map(example => `
                <div class="example-box">
                    <p class="ex-ko" lang="ko">${escapeHtml(example.ko)}</p>
                    <p class="ex-translation">${escapeHtml(example.translations?.[currentLocale] || t("contentPending"))}</p>
                </div>
            `).join("");
            const notes = (translation.notes || []).map(note => `<li>${escapeHtml(note)}</li>`).join("");

            mainContent.innerHTML = `
                <div class="grammar-header">
                    <div class="title-row">
                        <span class="badge-level ${item.level.toLowerCase()}">${escapeHtml(item.level)}</span>
                        <h2 class="grammar-title" lang="ko">${escapeHtml(item.title)}</h2>
                    </div>
                    <p class="grammar-description">${escapeHtml(translation.description || t("contentPending"))}</p>
                </div>
                <section class="grammar-section">
                    <h3>${escapeHtml(t("meaningRules"))}</h3>
                    <p class="localized-meaning">${escapeHtml(translation.meaning || t("contentPending"))}</p>
                    <div class="rules-container">${rules}</div>
                </section>
                <section class="grammar-section">
                    <h3>${escapeHtml(t("examples"))}</h3>
                    <div class="examples-container">${examples}</div>
                </section>
                <section class="grammar-section deep-dive-section">
                    <h3>${escapeHtml(t("deepDive"))}</h3>
                    <ul class="notes-list">${notes}</ul>
                </section>
            `;

            if (options.preserveScroll) mainContent.scrollTop = previousScrollTop;
            else mainContent.scrollTo({ top: 0, behavior: "smooth" });
            updateNavButtons();
            watchDetailTitle(item);
        }

        function navigateDelta(delta) {
            const filteredItems = getFilteredItems();
            const index = filteredItems.findIndex(item => item.id === currentItemId);
            const nextItem = filteredItems[index + delta];
            if (!nextItem) return;
            currentItemId = nextItem.id;
            renderNav();
            renderContent(nextItem);
            navList.querySelector(`[data-grammar-id="${nextItem.id}"]`)?.scrollIntoView({ block: "nearest" });
        }

        function setLevelFilter(level) {
            currentLevel = level;
            document.querySelectorAll(".level-filter-btn").forEach(button => {
                button.classList.toggle("active", button.dataset.level === level);
            });
            renderNav();
            updateNavButtons();
        }

        function setMobileHeaderDetail(item, showDetail) {
            mobileDetailLevel.className = `badge-level ${item.level.toLowerCase()}`;
            mobileDetailLevel.textContent = item.level;
            mobileDetailText.textContent = item.title;
            mobileHeader.classList.toggle("show-detail-title", showDetail && root.innerWidth <= 768);
        }

        function watchDetailTitle(item) {
            detailTitleObserver?.disconnect();
            const detailHeader = mainContent.querySelector(".grammar-header");
            if (!detailHeader || !("IntersectionObserver" in root)) {
                setMobileHeaderDetail(item, false);
                return;
            }
            setMobileHeaderDetail(item, false);
            detailTitleObserver = new root.IntersectionObserver(entries => {
                setMobileHeaderDetail(item, !entries[0].isIntersecting && mainContent.scrollTop > detailHeader.offsetTop);
            }, { root: mainContent, threshold: 0 });
            detailTitleObserver.observe(detailHeader);
        }

        function toggleMenu(force) {
            const open = typeof force === "boolean" ? force : !sidebar.classList.contains("open");
            sidebar.classList.toggle("open", open);
            sidebarOverlay.classList.toggle("open", open);
            menuToggle.setAttribute("aria-expanded", String(open));
            menuToggle.setAttribute("aria-label", open ? t("closeMenu") : t("openMenu"));
        }

        function setLocale(locale) {
            const nextLocale = normalizeLocale(locale);
            if (nextLocale === currentLocale) {
                closeLanguageMenus();
                return;
            }
            currentLocale = nextLocale;
            root.localStorage?.setItem(localeStorageKey, currentLocale);
            root.localStorage?.setItem("lessonGuideUiLocale", currentLocale);
            root.localStorage?.setItem("lessonGuideTranslationLocale", currentLocale);
            const selectedItem = currentItem();
            applyStaticLocale();
            renderNav();
            if (selectedItem) renderContent(selectedItem, { preserveScroll: true });
            else updateNavButtons();
            closeLanguageMenus();
        }

        searchInput.addEventListener("input", () => {
            renderNav();
            updateNavButtons();
        });
        document.querySelectorAll(".level-filter-btn").forEach(button => {
            button.addEventListener("click", () => setLevelFilter(button.dataset.level));
        });
        menuToggle.addEventListener("click", () => toggleMenu());
        sidebarOverlay.addEventListener("click", () => toggleMenu(false));
        btnPrev.addEventListener("click", () => navigateDelta(-1));
        btnNext.addEventListener("click", () => navigateDelta(1));
        document.addEventListener("click", event => {
            const toggle = event.target.closest("[data-language-toggle]");
            if (toggle) {
                const menu = toggle.nextElementSibling;
                const willOpen = menu.hidden;
                closeLanguageMenus(menu);
                menu.hidden = !willOpen;
                toggle.setAttribute("aria-expanded", String(willOpen));
                return;
            }
            const option = event.target.closest("[data-locale-value]");
            if (option) {
                setLocale(option.dataset.localeValue);
                return;
            }
            if (!event.target.closest("[data-language-switcher]")) closeLanguageMenus();
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeLanguageMenus();
                if (sidebar.classList.contains("open") && root.innerWidth <= 768) toggleMenu(false);
            }
        });
        root.addEventListener("resize", () => {
            if (root.innerWidth > 768) mobileHeader.classList.remove("show-detail-title");
        });

        let touchStart = null;
        document.addEventListener("touchstart", event => {
            const touch = event.changedTouches[0];
            touchStart = { x: touch.screenX, y: touch.screenY, target: event.target };
        }, { passive: true });
        document.addEventListener("touchend", event => {
            if (!touchStart || root.innerWidth > 768) return;
            const touch = event.changedTouches[0];
            const deltaX = touch.screenX - touchStart.x;
            const deltaY = touch.screenY - touchStart.y;
            if (Math.abs(deltaX) <= 50 || Math.abs(deltaX) <= Math.abs(deltaY) * 1.5) return;

            if (sidebar.contains(touchStart.target) && sidebar.classList.contains("open")) {
                const levels = ["all", "L1", "L2", "L3", "L4"];
                const index = levels.indexOf(currentLevel);
                const direction = deltaX < 0 ? 1 : -1;
                setLevelFilter(levels[(index + direction + levels.length) % levels.length]);
            } else if (deltaX > 0) toggleMenu(true);
            else toggleMenu(false);
            touchStart = null;
        }, { passive: true });

        applyStaticLocale();
        renderNav();
        updateNavButtons();
    }

    return {
        appLocales,
        messages,
        normalizeLocale,
        translationFor,
        localizedCategory,
        searchTextFor,
        itemMatches,
        mount,
    };
});

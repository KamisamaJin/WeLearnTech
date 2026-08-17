(function initGrammarWiki(root, factory) {
    const api = factory(root);
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root?.document) {
        root.grammarWikiApp = api;
        api.mount();
    }
})(typeof window !== "undefined" ? window : globalThis, function createGrammarWiki(root) {
    const localeApi = root.KIIPLocale || {
        supportedLocales: ["zh-CN", "en"],
        storageKeys: { language: "lessonGuideLocale" },
        shortLabels: { "zh-CN": "中", en: "EN" },
        normalize: locale => ["zh-CN", "en"].includes(locale) ? locale : "zh-CN",
        read: storage => ["zh-CN", "en"].includes(storage?.getItem("lessonGuideLocale")) ? storage.getItem("lessonGuideLocale") : "zh-CN",
        write: (storage, locale) => {
            storage?.setItem("lessonGuideLocale", locale);
            storage?.setItem("lessonGuideUiLocale", locale);
            storage?.setItem("lessonGuideTranslationLocale", locale);
            return locale;
        }
    };
    const iconApi = root.KIIPIcons;
    const appLocales = localeApi.supportedLocales;
    const localeStorageKey = localeApi.storageKeys.language;
    const localeShortNames = localeApi.shortLabels;
    const messages = {
        "zh-CN": {
            pageTitle: "KIIP Gramma Wiki",
            sidebarTitle: "KIIP Gramma Wiki",
            guideTitle: "课程导学首页",
            guideSubtitle: "Level 1-4 · 单词 · 对话 · 文化",
            guideAria: "打开课程导学首页",
            searchPlaceholder: "搜索韩语语法或中文解释...",
            allLevels: "全部",
            levelL1: "L1 初级1",
            levelL2: "L2 初级2",
            levelL3: "L3 中级1",
            levelL4: "L4 中级2",
            emptyTitle: "KIIP Gramma Wiki",
            emptyBody: "从菜单选择一个语法点开始学习。",
            noResults: "没有匹配的语法点",
            meaningRules: "含义与结合规则",
            examples: "例句",
            deepDive: "深入解析",
            relatedKnowledge: "相关知识点",
            openRelated: "打开相关语法",
            previous: "上一条",
            next: "下一条",
            switchToEnglish: "切换为英文",
            switchToChinese: "切换为中文",
            returnToLesson: "返回本课课程导学",
            openMenu: "打开语法菜单",
            closeMenu: "关闭语法菜单",
            contentPending: "中文内容待补",
            extraGrammar: "补充语法",
        },
        en: {
            pageTitle: "KIIP Gramma Wiki",
            sidebarTitle: "KIIP Gramma Wiki",
            guideTitle: "Lesson Guide Home",
            guideSubtitle: "Level 1-4 · Vocabulary · Dialogue · Culture",
            guideAria: "Open Lesson Guide home",
            searchPlaceholder: "Search Korean grammar or English notes...",
            allLevels: "All",
            levelL1: "L1 Beginner 1",
            levelL2: "L2 Beginner 2",
            levelL3: "L3 Intermediate 1",
            levelL4: "L4 Intermediate 2",
            emptyTitle: "KIIP Gramma Wiki",
            emptyBody: "Choose a grammar point from the menu to start learning.",
            noResults: "No matching grammar points",
            meaningRules: "Meaning & Rules",
            examples: "Examples",
            deepDive: "Deep Dive Notes",
            relatedKnowledge: "Related Knowledge",
            openRelated: "Open related grammar",
            previous: "Previous",
            next: "Next",
            switchToEnglish: "Switch to English",
            switchToChinese: "Switch to Chinese",
            returnToLesson: "Return to this lesson",
            openMenu: "Open grammar menu",
            closeMenu: "Close grammar menu",
            contentPending: "English content pending",
            extraGrammar: "Extra Grammar",
        },
    };

    function normalizeLocale(locale) {
        return localeApi.normalize(locale);
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

    function extraExamplesFor(item, enrichment = {}) {
        return (enrichment.extraExamples?.[item?.id] || []).map(example => ({
            ko: example[0],
            translations: { "zh-CN": example[1], en: example[2] },
        }));
    }

    function allExamplesFor(item, enrichment = {}) {
        return [...(item?.examples || []), ...extraExamplesFor(item, enrichment)];
    }

    function knowledgeGroupsFor(item, locale, enrichment = {}, items = []) {
        const selectedLocale = normalizeLocale(locale);
        const itemIndexes = new Map(items.map((entry, index) => [entry.id, index]));
        const currentIndex = itemIndexes.get(item?.id) ?? 0;

        return (enrichment.knowledgeGroups || [])
            .filter(group => group.members?.includes(item?.id))
            .map(group => ({
                id: group.id,
                translation: group.translations?.[selectedLocale],
                relatedItems: (group.members || [])
                    .filter(id => id !== item.id && itemIndexes.has(id))
                    .sort((left, right) => Math.abs(itemIndexes.get(left) - currentIndex) - Math.abs(itemIndexes.get(right) - currentIndex))
                    .slice(0, 4)
                    .map(id => items[itemIndexes.get(id)]),
            }))
            .filter(group => group.translation?.title && group.translation?.explanation);
    }

    function searchTextFor(item, locale, enrichment = {}) {
        const translation = translationFor(item, locale) || {};
        const knowledgeText = (enrichment.knowledgeGroups || [])
            .filter(group => group.members?.includes(item?.id))
            .flatMap(group => {
                const localized = group.translations?.[normalizeLocale(locale)] || {};
                return [localized.title, localized.explanation];
            });
        return [
            item?.title,
            localizedCategory(item?.category, locale),
            translation.description,
            translation.meaning,
            ...(translation.rules || []),
            ...(translation.notes || []),
            ...allExamplesFor(item, enrichment).flatMap(example => [example.ko, example.translations?.[normalizeLocale(locale)]]),
            ...knowledgeText,
        ].filter(Boolean).join(" ").toLocaleLowerCase();
    }

    function itemMatches(item, locale, query, enrichment = {}) {
        const normalizedQuery = String(query || "").trim().toLocaleLowerCase();
        return !normalizedQuery || searchTextFor(item, locale, enrichment).includes(normalizedQuery);
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
        if (iconApi) return iconApi.render("globe");
        return `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18"></path>
                <path d="M12 3a14 14 0 0 1 0 18"></path>
                <path d="M12 3a14 14 0 0 0 0 18"></path>
            </svg>
        `;
    }

    function mount(
        items = typeof grammarDB !== "undefined" ? grammarDB : [],
        enrichment = root.grammarEnrichment || {},
    ) {
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
        if (iconApi && menuToggle) menuToggle.innerHTML = iconApi.render("menu");
        const btnPrev = document.getElementById("btn-prev");
        const btnNext = document.getElementById("btn-next");
        let currentLevel = "all";
        let currentItemId = null;
        let detailTitleObserver = null;
        let currentLocale = localeApi.read(root.localStorage);
        const pageParams = new URLSearchParams(root.location?.search || "");
        const requestedGrammarId = pageParams.get("grammar");
        const sourceLessonId = pageParams.get("lesson") || "";
        const openedFromLessonGuide = pageParams.get("source") === "lesson-guide"
            && /^l[1-4]-\d{2}$/.test(sourceLessonId);
        const lessonReturnButtons = [...document.querySelectorAll("[data-lesson-return]")];
        if (iconApi) {
            lessonReturnButtons.forEach(button => { button.innerHTML = iconApi.render("chevronLeft"); });
            const guideLink = document.querySelector(".mobile-guide-link");
            if (guideLink) guideLink.innerHTML = iconApi.render("book");
        }

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

        function renderLanguageSwitchers() {
            document.querySelectorAll("[data-language-switcher]").forEach(switcher => {
                const nextLocale = currentLocale === "zh-CN" ? "en" : "zh-CN";
                const switchLabel = nextLocale === "en" ? t("switchToEnglish") : t("switchToChinese");
                switcher.innerHTML = `
                    <button class="language-toggle kiip-language-toggle" type="button" data-language-toggle
                        data-next-locale="${nextLocale}"
                        aria-label="${escapeHtml(switchLabel)}"
                        title="${escapeHtml(switchLabel)}">
                        ${languageIcon()}
                        <span class="kiip-language-toggle__label">${escapeHtml(localeShortNames[currentLocale])}</span>
                    </button>
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
            lessonReturnButtons.forEach(button => {
                button.setAttribute("aria-label", t("returnToLesson"));
                button.title = t("returnToLesson");
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

        function lessonGuideReturnHref() {
            const levelMatch = sourceLessonId.match(/^l([1-4])-/);
            if (!levelMatch) return "lesson_guide.html";
            const params = new URLSearchParams({ lesson: sourceLessonId });
            return `lesson_guide_l${levelMatch[1]}.html?${params.toString()}`;
        }

        function hasLessonGuideReferrer() {
            if (!document.referrer || !root.location?.origin) return false;
            try {
                const referrer = new URL(document.referrer);
                return referrer.origin === root.location.origin
                    && /\/lesson_guide_l[1-4]\.html$/.test(referrer.pathname);
            } catch (_error) {
                return false;
            }
        }

        function returnToLessonGuide() {
            if (hasLessonGuideReferrer() && root.history?.length > 1) {
                root.history.back();
                return;
            }
            root.location.assign(lessonGuideReturnHref());
        }

        function getFilteredItems(query = searchInput.value) {
            return items.filter(item => {
                if (currentLevel !== "all" && item.level !== currentLevel) return false;
                return itemMatches(item, currentLocale, query, enrichment);
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
                    if (item.id === currentItemId) entry.setAttribute("aria-current", "page");
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

        function syncGrammarUrl(item) {
            if (!root.history?.replaceState || !root.location?.href) return;
            const url = new URL(root.location.href);
            url.searchParams.set("grammar", item.id);
            root.history.replaceState(root.history.state, "", `${url.pathname}${url.search}${url.hash}`);
        }

        function renderContent(item, options = {}) {
            currentItemId = item.id;
            syncGrammarUrl(item);
            const previousScrollTop = mainContent.scrollTop;
            const translation = currentTranslation(item);
            const rules = (translation.rules || []).map(rule => `
                <div class="rule-card"><span class="localized-rule">${escapeHtml(rule)}</span></div>
            `).join("");
            const examples = allExamplesFor(item, enrichment).map(example => `
                <div class="example-box">
                    <p class="ex-ko" lang="ko">${escapeHtml(example.ko)}</p>
                    <p class="ex-translation">${escapeHtml(example.translations?.[currentLocale] || t("contentPending"))}</p>
                </div>
            `).join("");
            const notes = (translation.notes || []).map(note => `<li>${escapeHtml(note)}</li>`).join("");
            const knowledge = knowledgeGroupsFor(item, currentLocale, enrichment, items).map(group => `
                <article class="knowledge-topic">
                    <h4>${escapeHtml(group.translation.title)}</h4>
                    <p>${escapeHtml(group.translation.explanation)}</p>
                    <div class="related-links">
                        ${group.relatedItems.map(relatedItem => `
                            <button class="related-link" type="button" data-related-id="${escapeHtml(relatedItem.id)}"
                                aria-label="${escapeHtml(`${t("openRelated")}: ${relatedItem.title}`)}">
                                <span class="nav-level ${relatedItem.level.toLowerCase()}">${escapeHtml(relatedItem.level)}</span>
                                <span lang="ko">${escapeHtml(relatedItem.title)}</span>
                            </button>
                        `).join("")}
                    </div>
                </article>
            `).join("");

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
                <section class="grammar-section knowledge-section">
                    <h3>${escapeHtml(t("relatedKnowledge"))}</h3>
                    <div class="knowledge-list">${knowledge}</div>
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
            if (nextLocale === currentLocale) return;
            currentLocale = nextLocale;
            localeApi.write(root.localStorage, currentLocale);
            const selectedItem = currentItem();
            applyStaticLocale();
            renderNav();
            if (selectedItem) renderContent(selectedItem, { preserveScroll: true });
            else updateNavButtons();
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
        lessonReturnButtons.forEach(button => {
            button.hidden = !openedFromLessonGuide;
            button.addEventListener("click", returnToLessonGuide);
        });
        mainContent.addEventListener("click", event => {
            const relatedLink = event.target.closest("[data-related-id]");
            if (!relatedLink) return;
            const relatedItem = items.find(item => item.id === relatedLink.dataset.relatedId);
            if (!relatedItem) return;
            searchInput.value = "";
            currentLevel = relatedItem.level;
            document.querySelectorAll(".level-filter-btn").forEach(button => {
                button.classList.toggle("active", button.dataset.level === currentLevel);
            });
            currentItemId = relatedItem.id;
            renderNav();
            renderContent(relatedItem);
            navList.querySelector(`[data-grammar-id="${relatedItem.id}"]`)?.scrollIntoView({ block: "nearest" });
        });
        document.addEventListener("click", event => {
            const toggle = event.target.closest("[data-language-toggle]");
            if (toggle) {
                setLocale(toggle.dataset.nextLocale);
                return;
            }
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
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
        const requestedItem = items.find(item => item.id === requestedGrammarId);
        if (requestedItem) {
            currentLevel = requestedItem.level;
            currentItemId = requestedItem.id;
            document.querySelectorAll(".level-filter-btn").forEach(button => {
                button.classList.toggle("active", button.dataset.level === currentLevel);
            });
            renderNav();
            renderContent(requestedItem);
            root.requestAnimationFrame?.(() => {
                navList.querySelector(`[data-grammar-id="${requestedItem.id}"]`)?.scrollIntoView({ block: "nearest" });
            });
        } else {
            renderNav();
            updateNavButtons();
        }
    }

    return {
        appLocales,
        messages,
        normalizeLocale,
        translationFor,
        extraExamplesFor,
        allExamplesFor,
        knowledgeGroupsFor,
        localizedCategory,
        searchTextFor,
        itemMatches,
        mount,
    };
});

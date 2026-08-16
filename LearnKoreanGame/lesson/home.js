(function initLessonHome() {
    const localeApi = window.KIIPLocale;
    const iconApi = window.KIIPIcons;
    const localeStorageKey = localeApi.storageKeys.language;
    document.getElementById("locale-toggle")?.insertAdjacentHTML("afterbegin", iconApi.render("globe"));
    const grammarLink = document.querySelector(".icon-link");
    if (grammarLink) grammarLink.innerHTML = iconApi.render("book");
    const translations = {
        "zh-CN": {
            pageTitle: "KIIP Lesson Guide",
            brandAria: "KIIP Lesson Guide 首页",
            brandSubtitle: "Level 1-4 单词、对话、文化和练习入口",
            grammarWiki: "KIIP Gramma Wiki",
            languageToggle: "切换到英文",
            languageToggleText: "中",
            summaryCopy: "按 Level 进入课程导学，查看每课的单词、对话、文化文章、练习和发音。",
            levelGridAria: "Level 入口",
            preparing: "准备接入",
            comingSoon: "即将开放",
            level1Subtitle: "초급 1 · 基础入门",
            level1Note: "18 课已接入",
            level2Subtitle: "초급 2 · 生活表达扩展",
            level3Subtitle: "중급 1 · 中级表达和文化",
            level4Subtitle: "중급 2 · 高阶主题表达",
            level2Note: "18 课已接入",
            level3Note: "16 课已接入",
            level4Note: "16 课目录已接入",
            enterLevel1: "进入 Level 1",
            enterLevel2: "进入 Level 2",
            enterLevel3: "进入 Level 3",
            enterLevel4: "进入 Level 4"
        },
        en: {
            pageTitle: "KIIP Lesson Guide",
            brandAria: "KIIP Lesson Guide home",
            brandSubtitle: "Level 1-4 vocabulary, dialogues, culture, and practice",
            grammarWiki: "KIIP Gramma Wiki",
            languageToggle: "Switch to Chinese",
            languageToggleText: "EN",
            summaryCopy: "Open a level to study each lesson's vocabulary, dialogues, culture texts, practice, and pronunciation.",
            levelGridAria: "Level entries",
            preparing: "Preparing",
            comingSoon: "Coming soon",
            level1Subtitle: "Beginner 1 · First steps",
            level1Note: "18 lessons available",
            level2Subtitle: "Beginner 2 · Everyday expressions",
            level3Subtitle: "Intermediate 1 · Expressions and culture",
            level4Subtitle: "Intermediate 2 · Advanced topics",
            level2Note: "18 lessons available",
            level3Note: "16 lessons available",
            level4Note: "16 lesson outlines available",
            enterLevel1: "Open Level 1",
            enterLevel2: "Open Level 2",
            enterLevel3: "Open Level 3",
            enterLevel4: "Open Level 4"
        }
    };

    function activeLocale() {
        return localeApi.read(localStorage);
    }

    function applyLocale(locale) {
        const dictionary = translations[locale] || translations["zh-CN"];
        document.documentElement.lang = locale;
        document.title = dictionary.pageTitle;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            element.textContent = dictionary[element.dataset.i18n] || "";
        });

        document.querySelectorAll("[data-i18n-aria]").forEach(element => {
            element.setAttribute("aria-label", dictionary[element.dataset.i18nAria] || "");
        });

        document.querySelectorAll("[data-i18n-title]").forEach(element => {
            element.setAttribute("title", dictionary[element.dataset.i18nTitle] || "");
        });

        const toggle = document.getElementById("locale-toggle");
        const toggleText = document.getElementById("locale-toggle-text");
        if (toggle) {
            if (toggleText) toggleText.textContent = dictionary.languageToggleText;
            toggle.setAttribute("aria-label", dictionary.languageToggle);
            toggle.setAttribute("title", dictionary.languageToggle);
        }
    }

    document.getElementById("locale-toggle")?.addEventListener("click", () => {
        const nextLocale = localeApi.next(activeLocale());
        localeApi.write(localStorage, nextLocale);
        applyLocale(nextLocale);
    });

    window.addEventListener("storage", event => {
        if (event.key === localeStorageKey) applyLocale(activeLocale());
    });

    applyLocale(activeLocale());
})();

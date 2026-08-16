const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const locale = require(path.join(root, "shared/locale.js"));
const icons = require(path.join(root, "shared/icons.js"));
const lessonPage = require(path.join(root, "shared/lesson-page.js"));
const schema = require(path.join(root, "lesson/schema.js"));
const listeningQueue = require(path.join(root, "lesson/listening/queue.js"));
const lessonDataLoader = require(path.join(root, "lesson/data-loader.js"));
const listeningFollow = require(path.join(root, "lesson/listening/follow.js"));
const listeningFloating = require(path.join(root, "lesson/listening/floating.js"));
const sleepTimer = require(path.join(root, "lesson/listening/sleep-timer.js"));

function memoryStorage(initial = {}) {
    const values = new Map(Object.entries(initial));
    return {
        getItem: key => values.has(key) ? values.get(key) : null,
        setItem: (key, value) => values.set(key, String(value))
    };
}

function readGlobal(file, expression) {
    const context = {};
    context.window = context;
    vm.createContext(context);
    vm.runInContext(`${fs.readFileSync(path.join(root, file), "utf8")}\nglobalThis.result = ${expression};`, context);
    return context.result;
}

test("shared locale preserves legacy settings and writes compatible keys", () => {
    const storage = memoryStorage({ lessonGuideTranslationLocale: "en" });
    assert.equal(locale.read(storage), "en");
    assert.equal(locale.shortLabels["zh-CN"], "中");
    assert.equal(locale.next("zh-CN"), "en");
    locale.write(storage, "zh-CN");
    assert.equal(storage.getItem("lessonGuideLocale"), "zh-CN");
    assert.equal(storage.getItem("lessonGuideUiLocale"), "zh-CN");
    assert.equal(storage.getItem("lessonGuideTranslationLocale"), "zh-CN");
});

test("shared icons expose a fixed, escaped icon API", () => {
    assert.match(icons.render("globe", { className: "language-icon" }), /class="language-icon"/);
    assert.match(icons.render("chevronRight"), /m9 18 6-6-6-6/);
    assert.throws(() => icons.render("unknown"), /Unknown KIIP icon/);
});

test("level pages are thin configuration entries backed by one shell", () => {
    for (let number = 1; number <= 4; number += 1) {
        const level = `L${number}`;
        const html = fs.readFileSync(path.join(root, `lesson_guide_l${number}.html`), "utf8");
        const config = lessonPage.createConfig(level);
        assert.match(html, new RegExp(`data-level="${level}"`));
        assert.match(html, /shared\/lesson-page\.js/);
        assert.doesNotMatch(html, /document\.write|class="app-shell"/);
        assert.equal(config.dataScript, `lesson_data_l${number}.js`);
        assert.equal(config.translationChunkMode, level === "L3" ? "all" : "field");
    }
});

test("lesson and grammar mobile menus expose toggle state", () => {
    const lessonShell = fs.readFileSync(path.join(root, "shared/lesson-page.js"), "utf8");
    const lessonApp = fs.readFileSync(path.join(root, "lesson_guide_app.js"), "utf8");
    const grammarHtml = fs.readFileSync(path.join(root, "grammar_wiki.html"), "utf8");
    const grammarApp = fs.readFileSync(path.join(root, "grammar_wiki_app.js"), "utf8");

    assert.match(lessonShell, /id="menu-toggle"[^>]*aria-controls="sidebar"[^>]*aria-expanded="false"/s);
    assert.match(lessonApp, /function toggleSidebar\(force\)/);
    assert.match(lessonApp, /menuToggle\.addEventListener\("click", \(\) => \{\s*toggleSidebar\(\);/s);
    assert.match(grammarHtml, /id="menu-toggle"[^>]*aria-expanded="false"/s);
    assert.match(grammarApp, /menuToggle\.addEventListener\("click", \(\) => toggleMenu\(\)\)/);
});

test("lesson and grammar pages keep styles and behavior outside HTML", () => {
    const home = fs.readFileSync(path.join(root, "lesson_guide.html"), "utf8");
    const grammar = fs.readFileSync(path.join(root, "grammar_wiki.html"), "utf8");
    assert.doesNotMatch(home, /<style>/);
    assert.doesNotMatch(grammar, /<style>/);
    assert.match(home, /lesson\/home\.css/);
    assert.match(home, /lesson\/home\.js/);
    assert.match(grammar, /grammar\/wiki\.css/);
    assert.match(grammar, /grammar\/bootstrap\.js/);
});

test("lesson shell keeps the generated root constrained to the viewport", () => {
    const css = fs.readFileSync(path.join(root, "lesson_guide.css"), "utf8");
    assert.match(css, /#lesson-guide-root\s*\{[^}]*height:\s*100%/s);
    assert.match(css, /\.content-shell\s*\{[^}]*min-height:\s*0/s);
    assert.match(css, /\.main-content\s*\{[^}]*min-height:\s*0[^}]*overflow-y:\s*auto/s);
});

test("mobile lesson layout balances the drawer search and clears the bottom edge", () => {
    const css = fs.readFileSync(path.join(root, "lesson_guide.css"), "utf8");
    assert.match(css, /@media \(max-width: 920px\)[\s\S]*?\.sidebar-header\s*\{\s*padding:\s*12px 20px;/);
    assert.match(css, /@media \(max-width: 920px\)[\s\S]*?\.sidebar-subtitle\s*\{\s*display:\s*none;/);
    assert.match(css, /@media \(max-width: 920px\)[\s\S]*?\.search-box\s*\{\s*margin-top:\s*0;/);
    assert.match(css, /@media \(max-width: 920px\)[\s\S]*?\.main-content\s*\{\s*padding:\s*0 18px 48px;/);
});

test("grammar sidebar language toggle is desktop-only", () => {
    const html = fs.readFileSync(path.join(root, "grammar_wiki.html"), "utf8");
    const css = fs.readFileSync(path.join(root, "grammar/wiki.css"), "utf8");
    assert.match(html, /class="language-switcher desktop-language-switcher"/);
    assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.desktop-language-switcher\s*\{\s*display:\s*none;\s*\}/);
});

test("shared styles consume Capacitor system bar safe-area variables", () => {
    const css = fs.readFileSync(path.join(root, "shared/styles/tokens.css"), "utf8");
    for (const side of ["top", "right", "bottom", "left"]) {
        assert.match(css, new RegExp(`--kiip-safe-area-${side}:\\s*var\\(--safe-area-inset-${side},\\s*env\\(safe-area-inset-${side},\\s*0px\\)\\)`));
        assert.match(css, new RegExp(`padding-${side}:\\s*var\\(--kiip-safe-area-${side}\\)`));
    }
});

test("the lesson home uses a dedicated scroll container with a sticky header", () => {
    const css = fs.readFileSync(path.join(root, "lesson/home.css"), "utf8");
    assert.match(css, /body\s*\{[^}]*overflow:\s*hidden;/s);
    assert.match(css, /\.page\s*\{[^}]*height:\s*100%;[^}]*overflow-y:\s*auto;/s);
    assert.match(css, /\.topbar\s*\{[^}]*position:\s*sticky;[^}]*top:\s*0;[^}]*z-index:\s*100;/s);
});

test("all lesson guides satisfy the shared lesson schema", () => {
    for (let number = 1; number <= 4; number += 1) {
        const guide = readGlobal(`lesson_data_l${number}.js`, `lessonGuideL${number}`);
        assert.equal(schema.validateGuide(guide).length, 0);
    }
});

test("listening queue pairs Korean with the active display language", () => {
    let activeLocale = "zh-CN";
    const builder = listeningQueue.create({
        t: key => key,
        getTranslationLocale: () => activeLocale,
        normalizeKoreanSpeechText: value => String(value || "").trim(),
        hasHangul: value => /[\uac00-\ud7a3]/.test(value),
        lessonTitleTranslation: lesson => activeLocale === "en" ? lesson.titleEn : lesson.titleZh,
        wordMeaning: word => activeLocale === "en" ? word.en : word.zh,
        wordExampleTranslation: word => activeLocale === "en" ? word.exampleEn : word.exampleZh,
        lessonDialogues: lesson => lesson.dialogues || [],
        lineTranslation: line => activeLocale === "en" ? line.en : line.zh,
        cultureTitleTranslation: culture => activeLocale === "en" ? culture.titleEn : culture.titleZh,
        cultureTranslation: (entry, field) => activeLocale === "en" ? entry[`${field}En`] : entry[`${field}Zh`]
    });
    const lesson = {
        titleKo: "고향",
        titleZh: "故乡",
        titleEn: "Hometown",
        vocabulary: [{ ko: "산", zh: "山", en: "mountain", exampleKo: "산이 높아요.", exampleZh: "山很高。", exampleEn: "The mountain is high." }],
        dialogues: [],
        culture: null
    };

    const chinese = builder.build(lesson, "lesson");
    assert.equal(chinese[1].text, "故乡");
    assert.equal(chinese[1].lang, "zh-CN");
    activeLocale = "en";
    const english = builder.build(lesson, "vocabulary");
    assert.equal(english[1].text, "mountain");
    assert.equal(english[1].lang, "en-US");
    assert.equal(english[3].text, "The mountain is high.");
});

test("lesson data loader caches normalized lessons without a chunk", async () => {
    const loader = lessonDataLoader.create({
        root: { location: { href: "https://example.test/lesson.html?v=test", search: "?v=test" } },
        document: {},
        lessons: [{ id: "l1-01", titleKo: "안녕하세요" }],
        lessonChunksGlobal: "lessonChunks",
        translationChunkPaths: {},
        getTranslationLocale: () => "zh-CN",
        getTranslationChunk: () => undefined,
        applyTranslations: lesson => ({ ...lesson, translated: true }),
        normalizeLesson: lesson => ({ goals: [], ...lesson })
    });

    const lesson = await loader.load("l1-01");
    assert.equal(lesson.translated, true);
    assert.equal(loader.hasCached("l1-01"), true);
    assert.equal(loader.getCached("l1-01").goals.length, 0);
    assert.match(loader.versionedScriptSrc("chunks/l1.js"), /chunks\/l1\.js\?v=test$/);
});

test("listening follow changes tabs only when the playback reference changes", () => {
    assert.equal(listeningFollow.tabForItem({ section: "vocabulary" }), "vocabulary");
    assert.equal(listeningFollow.tabForItem({ section: "practice" }), null);
    assert.equal(listeningFollow.shouldFollow({ status: "playing", currentRef: "vocab-2", lastFollowedRef: "" }), true);
    assert.equal(listeningFollow.shouldFollow({ status: "playing", currentRef: "vocab-2", lastFollowedRef: "vocab-2" }), false);
    assert.equal(listeningFollow.shouldFollow({ status: "ended", currentRef: "vocab-2", lastFollowedRef: "" }), false);
    assert.equal(listeningFollow.continuedRef({ nextRef: "vocab-2", currentRef: "vocab-2", lastFollowedRef: "vocab-2" }), "vocab-2");
    assert.equal(listeningFollow.continuedRef({ nextRef: "vocab-3", currentRef: "vocab-2", lastFollowedRef: "vocab-2" }), "");
});

test("listening follow avoids long smooth scrolling when restoring a distant item", () => {
    const rootRect = { top: 100, bottom: 700, height: 600 };
    assert.deepEqual(
        listeningFollow.scrollPlan({ top: 260, bottom: 420 }, rootRect),
        { shouldScroll: false, behavior: "auto" }
    );
    assert.deepEqual(
        listeningFollow.scrollPlan({ top: 650, bottom: 790 }, rootRect),
        { shouldScroll: true, behavior: "smooth" }
    );
    assert.deepEqual(
        listeningFollow.scrollPlan({ top: 1800, bottom: 1940 }, rootRect),
        { shouldScroll: true, behavior: "auto" }
    );
});

test("listening updates preserve player controls instead of replacing them each sentence", () => {
    const app = fs.readFileSync(path.join(root, "lesson_guide_app.js"), "utf8");
    const css = fs.readFileSync(path.join(root, "lesson_guide.css"), "utf8");
    const refreshBlock = app.match(/function refreshListeningPlayer\(\)[\s\S]*?function updateSleepTimerDisplay/)?.[0] || "";
    const floatingPaintBlock = app.match(/function paintFloatingListeningControls\(\)[\s\S]*?function renderFloatingListeningControls/)?.[0] || "";

    assert.doesNotMatch(refreshBlock, /outerHTML\s*=/);
    assert.match(refreshBlock, /player\.innerHTML = nextPlayer\.innerHTML/);
    assert.match(floatingPaintBlock, /if \(!floatingListeningControls\.querySelector/);
    assert.match(css, /\.listening-now\s*\{[^}]*min-height:\s*1\.35em/s);
    assert.match(css, /\.listening-now:empty\s*\{[^}]*visibility:\s*hidden/s);
});

test("floating listening controls appear only for an offscreen active player", () => {
    const rootRect = { top: 0, right: 300, bottom: 600, left: 0, width: 300, height: 600 };
    const mostlyVisible = { top: -20, right: 300, bottom: 80, left: 0, width: 300, height: 120 };
    const offscreen = { top: -140, right: 300, bottom: -20, left: 0, width: 300, height: 120 };

    assert.ok(listeningFloating.visibleRatio(mostlyVisible, rootRect) > 0.2);
    assert.equal(listeningFloating.isVisible(offscreen, rootRect), false);
    assert.equal(listeningFloating.shouldShow({ status: "playing", playerVisible: false, lessonMatches: true }), true);
    assert.equal(listeningFloating.shouldShow({ status: "paused", playerVisible: false, lessonMatches: true }), true);
    assert.equal(listeningFloating.shouldShow({ status: "idle", playerVisible: false, lessonMatches: true }), false);
    assert.equal(listeningFloating.shouldShow({ status: "playing", playerVisible: true, lessonMatches: true }), false);
    assert.equal(listeningFloating.shouldShow({ status: "playing", playerVisible: false, lessonMatches: false }), false);
});

test("floating player visibility ignores one-pixel layout jitter", () => {
    assert.equal(listeningFloating.resolvePlayerVisible(0.004, false), false);
    assert.equal(listeningFloating.resolvePlayerVisible(0.05, false), true);
    assert.equal(listeningFloating.resolvePlayerVisible(0.02, true), true);
    assert.equal(listeningFloating.resolvePlayerVisible(0.01, true), false);
});

test("floating listening controls stay for three seconds unless the main player is visible", () => {
    let now = 1_000;
    let scheduled;
    let scheduledDelay;
    let cancelled = 0;
    const changes = [];
    const latch = listeningFloating.createDisplayLatch({
        now: () => now,
        setTimeout: (callback, delay) => {
            scheduled = callback;
            scheduledDelay = delay;
            return 7;
        },
        clearTimeout: () => { cancelled += 1; },
        onChange: visible => changes.push(visible)
    });

    latch.update(true);
    assert.deepEqual(changes, [true]);
    now = 1_500;
    latch.update(false);
    assert.equal(scheduledDelay, 2_500);
    latch.update(true);
    assert.equal(cancelled, 1);
    scheduled();
    assert.deepEqual(changes, [true]);

    latch.update(false, { immediate: true });
    assert.deepEqual(changes, [true, false]);
    assert.equal(listeningFloating.minimumVisibleMs, 3000);
});

test("sleep timer uses an absolute deadline and expires once", () => {
    let now = 1_000;
    let scheduled;
    let expired = 0;
    const scheduler = sleepTimer.createScheduler({
        now: () => now,
        setTimeout: callback => {
            scheduled = callback;
            return 1;
        },
        clearTimeout: () => {},
        onExpire: () => { expired += 1; }
    });

    scheduler.setEndsAt(61_000);
    assert.equal(sleepTimer.formatRemaining(scheduler.getEndsAt(), now), "1:00");
    now = 61_000;
    scheduled();
    assert.equal(expired, 1);
    assert.equal(scheduler.getEndsAt(), 0);
    assert.equal(sleepTimer.normalizeDuration(30), 30);
    assert.equal(sleepTimer.normalizeDuration(25), 0);
});

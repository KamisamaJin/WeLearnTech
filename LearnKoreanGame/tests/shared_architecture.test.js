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

test("grammar sidebar language toggle is desktop-only", () => {
    const html = fs.readFileSync(path.join(root, "grammar_wiki.html"), "utf8");
    const css = fs.readFileSync(path.join(root, "grammar/wiki.css"), "utf8");
    assert.match(html, /class="language-switcher desktop-language-switcher"/);
    assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.desktop-language-switcher\s*\{\s*display:\s*none;\s*\}/);
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

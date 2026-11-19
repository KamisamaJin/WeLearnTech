const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const renderers = require("../lesson/renderers.js");
const content = require("../lesson/listening/content.js");
const follow = require("../lesson/listening/follow.js");
const highlight = require("../lesson/grammar-highlight.js");

const context = { window: {} };
const chunks = path.join(__dirname, "../lesson_chunks");
for (const file of fs.readdirSync(chunks)) vm.runInNewContext(fs.readFileSync(path.join(chunks, file), "utf8"), context);
const lessons = [1, 2, 3, 4].flatMap(level => Object.values(context.window[`lessonGuideL${level}LessonChunks`]));
const escapeHtml = value => String(value || "").replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
const dependencies = {
    t: key => key, tf: key => key, escapeHtml, getShowTranslation: () => true,
    lessonDialogues: content.lessonDialogues,
    grammarWikiHref: (lesson, index) => `grammar_wiki.html?lesson=${lesson.id}&grammar=${index}`,
    grammarMeaning: grammar => grammar.zh || grammar.meaning,
    grammarGuide: grammar => grammar.guide,
    grammarExampleTranslation: example => example.zh,
    highlightGrammar: highlight.render,
    hasHangul: content.hasHangul, koreanSpeechLabel: text => text,
    dialogueScene: () => "", dialogueLearningPoints: () => [], dialogueRolePlays: () => [],
    dialogueSideDrills: () => [], lineTranslation: line => line.zh, lineGuide: () => ""
};
const renderer = renderers.create(dependencies);

test("hiding word translations never hides grammar usage or prevents per-sentence recall", () => {
    const lesson = lessons.find(lesson => lesson.id === "l4-01");
    for (const mode of ["read", "recall"]) {
        const html = renderers.create({ ...dependencies, getShowTranslation: () => false,
            getGrammarStudyMode: () => mode }).renderGrammar(lesson);
        assert.ok(html.includes(lesson.grammar[0].guide));
        assert.ok(html.includes(lesson.grammar[0].examples[0].zh));
        assert.doesNotMatch(html, /data-toggle-zh/);
        assert.equal(html.includes('<details class="grammar-recall-answer">'), mode === "recall");
    }
});

test("legacy example translations match exact Korean text and respect downloaded corrections", () => {
    const { translate } = require("../lesson/grammar-example-translations.js");
    const example = { ko: "한국 문화는 알수록 매력적인 것 같아요.", zh: "韩国文化越了解越有魅力。" };
    assert.match(translate(example, "en"), /more.*Korean culture.*more fascinating/);
    assert.equal(translate(example, "zh-CN"), example.zh);
    assert.equal(translate({ ...example, translations: { en: { translation: "Updated." } } }, "en"), "Updated.");
    assert.equal(translate({ ...example, ko: "다른 문장이에요." }, "en"), "");
});

test("all lesson dialogues render exactly once under grammar while preserving playback references", () => {
    assert.equal(lessons.length, 68);
    for (const lesson of lessons) {
        const dialogues = content.lessonDialogues(lesson);
        const grouped = renderers.groupGrammarDialogues(lesson, dialogues);
        const entries = [...grouped.groups.flatMap(group => group.dialogues), ...grouped.integrated];
        assert.equal(entries.length, dialogues.length, lesson.id);
        assert.equal(new Set(entries.map(entry => entry.dialogueIndex)).size, dialogues.length, lesson.id);
        const html = renderer.renderGrammar(lesson);
        for (let index = 0; index < (lesson.grammar || []).length; index++) {
            assert.ok(html.includes(`id="grammar-${index}"`), lesson.id);
            assert.ok(html.includes(`grammar_wiki.html?lesson=${lesson.id}&amp;grammar=${index}`), lesson.id);
            const start = html.indexOf(`id="grammar-${index}"`);
            const end = html.indexOf('class="grammar-pagination"', start);
            const unit = html.slice(start, end);
            assert.ok(unit.includes('class="grammar-unit-header"'), lesson.id);
            for (const entry of grouped.groups[index].dialogues) {
                assert.ok(unit.includes(`data-listening-ref="dialogue-${entry.dialogueIndex}-line-0"`), lesson.id);
            }
        }
        dialogues.forEach((dialogue, dialogueIndex) => (dialogue.lines || []).forEach((line, lineIndex) => {
            const ref = `data-listening-ref="dialogue-${dialogueIndex}-line-${lineIndex}"`;
            assert.equal(html.split(ref).length - 1, 1, `${lesson.id}/${ref}`);
            assert.ok(html.includes(escapeHtml(line.ko)), lesson.id);
            assert.ok(html.includes(`data-speak-ko="${escapeHtml(line.ko)}"`), lesson.id);
        }));
    }
});

test("grammar examples and integrated dialogue highlight targets without changing speech payloads", () => {
    const html = renderer.renderGrammar(lessons.find(lesson => lesson.id === "l4-01"));
    assert.match(html, /<mark class="grammar-highlight grammar-highlight-0"[^>]*>느라고<\/mark>/);
    assert.match(html, /<mark class="grammar-highlight grammar-highlight-1"/);
    assert.doesNotMatch(html, /data-speak-ko="[^"]*<mark/);
});

test("one grammar point is visible at a time and recall mode hides individual translations", () => {
    const lesson = lessons.find(lesson => lesson.id === "l4-01");
    const read = renderer.renderGrammar(lesson);
    assert.doesNotMatch(read, /class="grammar-recall-answer"/);
    assert.equal((read.match(/role="tabpanel"[^>]* hidden/g) || []).length, 2);
    assert.match(read, /id="grammar-choice-0"[^>]*aria-selected="true"/);
    const recall = renderers.create({
        ...dependencies,
        getGrammarStudyMode: () => "recall",
        getSelectedGrammar: () => "1"
    }).renderGrammar(lesson);
    assert.match(recall, /<details class="grammar-recall-answer"><summary>/);
    assert.doesNotMatch(recall, /<details class="grammar-recall-answer" open/);
    assert.match(recall, /id="grammar-choice-1"[^>]*aria-selected="true"/);
    assert.match(recall, /data-grammar-panel="0"[^>]* hidden/);
    assert.doesNotMatch(recall, /data-grammar-panel="1"[^>]* hidden/);
    assert.match(recall, /data-grammar-study-mode="recall" aria-pressed="true"/);
});

test("each learning unit keeps usage, examples and matching dialogue in reading order", () => {
    const html = renderer.renderGrammar(lessons.find(lesson => lesson.id === "l4-01"));
    const first = html.slice(html.indexOf('id="grammar-0"'), html.indexOf('id="grammar-1"'));
    assert.ok(first.indexOf("grammarUsage") < first.indexOf("grammarExamples"));
    assert.ok(first.indexOf("grammarExamples") < first.indexOf("grammarApplication"));
    assert.ok(first.indexOf("grammarApplication") < first.indexOf('data-listening-ref="dialogue-0-line-0"'));
    const integrated = renderers.create({ ...dependencies, getSelectedGrammar: () => "integrated" }).renderGrammar(lessons.find(lesson => lesson.id === "l4-01"));
    assert.doesNotMatch(integrated, /data-grammar-panel="integrated"[^>]* hidden/);
    const invalid = renderers.create({ ...dependencies, getSelectedGrammar: () => "missing" }).renderGrammar(lessons[0]);
    assert.match(invalid, /id="grammar-choice-0"[^>]*aria-selected="true"/);
});

test("lessons without standalone examples reuse matching dialogue sentences without duplicating playback refs", () => {
    const lesson = lessons.find(lesson => lesson.id === "l1-01");
    const html = renderer.renderGrammar(lesson);
    const firstUnit = html.slice(html.indexOf('id="grammar-0"'), html.indexOf('id="grammar-1"'));
    assert.match(firstUnit, /class="grammar-examples"/);
    assert.match(firstUnit, /class="grammar-highlight grammar-highlight-0"/);
    assert.ok(firstUnit.indexOf("grammarExamples") < firstUnit.indexOf("grammarApplication"));
});

test("playback reveals only the containing collapsed conversation", () => {
    const other = { tagName: "DETAILS", open: false };
    const group = { tagName: "DETAILS", open: false, parentElement: { tagName: "SECTION" } };
    const target = { tagName: "DIV", parentElement: group };
    follow.revealTarget(target);
    assert.equal(group.open, true);
    assert.equal(other.open, false);
    follow.revealTarget(null);
});

test("grammar grouping uses explicit numbering or unique patterns and keeps mixed dialogue separate", () => {
    const lesson = { grammar: [{ pattern: "V-느라고" }, { pattern: "V/A-(으)ㄹ수록" }] };
    const specific = { focus: "-느라고", source: "문법 2" };
    const numbered = { source: "문법 2 대화" };
    const mixed = { focus: "V-느라고 / V/A-(으)ㄹ수록" };
    const unknown = { focus: "생활 이야기" };
    const result = renderers.groupGrammarDialogues(lesson, [specific, numbered, mixed, unknown]);
    assert.deepEqual(result.groups.map(group => group.dialogues.map(entry => entry.dialogueIndex)), [[0], [1]]);
    assert.deepEqual(result.integrated.map(entry => entry.dialogueIndex), [2, 3]);
    assert.equal(follow.tabForItem({ section: "dialogue" }), "grammar");
});

test("grammar-only and dialogue-only lessons remain usable", () => {
    assert.match(renderer.renderGrammar({ grammar: [{ pattern: "N은/는", guide: "Topic" }] }), /id="grammar-0"/);
    assert.match(renderer.renderGrammar({ dialogues: [{ title: "대화", lines: [{ ko: "안녕하세요?" }] }] }), /id="grammar-integrated"/);
    assert.match(renderer.renderGrammar({}), /grammarPending/);
});

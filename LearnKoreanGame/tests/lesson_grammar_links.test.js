const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const links = require(path.join(root, "lesson_grammar_links.js"));

function readGlobal(file, expression) {
    const context = {};
    context.window = context;
    vm.createContext(context);
    vm.runInContext(`${fs.readFileSync(path.join(root, file), "utf8")}\nglobalThis.result = ${expression};`, context);
    return context.result;
}

test("every lesson grammar card has a valid wiki destination", () => {
    const grammarIds = new Set(readGlobal("grammar_data.js", "grammarDB").map(item => item.id));
    let grammarCount = 0;

    for (let level = 1; level <= 4; level += 1) {
        const guide = readGlobal(`lesson_data_l${level}.js`, `lessonGuideL${level}`);
        for (const lesson of guide.lessons) {
            const mappedIds = links.idsByLesson[lesson.id];
            assert.ok(mappedIds, `Missing grammar link map for ${lesson.id}`);
            assert.equal(mappedIds.length, (lesson.grammar || []).length, `Grammar count changed for ${lesson.id}`);
            mappedIds.forEach((id, index) => {
                assert.ok(grammarIds.has(id), `Unknown grammar id ${id} for ${lesson.id} grammar ${index}`);
                const href = new URL(links.hrefFor(lesson.id, index), "https://example.test");
                assert.equal(href.searchParams.get("grammar"), id);
                assert.equal(href.searchParams.get("source"), "lesson-guide");
                assert.equal(href.searchParams.get("lesson"), lesson.id);
                grammarCount += 1;
            });
        }
    }

    assert.equal(grammarCount, 145);
});

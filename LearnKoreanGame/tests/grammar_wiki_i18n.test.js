const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const projectRoot = path.resolve(__dirname, "..");
const dataSource = fs.readFileSync(path.join(projectRoot, "grammar_data.js"), "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${dataSource}\n;globalThis.__grammarDB = grammarDB;`, context);

const grammarDB = context.__grammarDB;
const app = require(path.join(projectRoot, "grammar_wiki_app.js"));

test("all grammar entries have complete Chinese and English content", () => {
    assert.equal(grammarDB.length, 181);
    assert.equal(new Set(grammarDB.map(item => item.id)).size, grammarDB.length);

    grammarDB.forEach(item => {
        assert.ok(item.id && item.category && item.level && item.title, item.id);
        assert.equal("desc" in item, false, `${item.id} still has desc`);
        assert.equal("desc_zh" in item, false, `${item.id} still has desc_zh`);
        assert.equal("meaning_en" in item, false, `${item.id} still has meaning_en`);
        assert.equal("meaning_zh" in item, false, `${item.id} still has meaning_zh`);

        ["zh-CN", "en"].forEach(locale => {
            const translation = item.translations?.[locale];
            assert.ok(translation?.description, `${item.id} missing ${locale} description`);
            assert.ok(translation?.meaning, `${item.id} missing ${locale} meaning`);
            assert.ok(translation.rules?.length, `${item.id} missing ${locale} rules`);
            assert.ok(translation.notes?.length, `${item.id} missing ${locale} notes`);
        });

        assert.ok(item.examples.length, `${item.id} missing examples`);
        item.examples.forEach((example, index) => {
            assert.ok(example.ko, `${item.id} example ${index} missing Korean`);
            assert.ok(example.translations?.["zh-CN"], `${item.id} example ${index} missing Chinese`);
            assert.ok(example.translations?.en, `${item.id} example ${index} missing English`);
        });
    });
});

test("translation helpers expose only the selected display language", () => {
    const first = grammarDB[0];
    assert.equal(app.translationFor(first, "zh-CN").description, "主题助词，标记话题或对比");
    assert.equal(app.translationFor(first, "en").description, "Topic particle");
    assert.equal(app.normalizeLocale("ko"), "zh-CN");
});

test("search indexes Korean plus the active translation only", () => {
    const first = grammarDB[0];
    assert.equal(app.itemMatches(first, "zh-CN", "主题助词"), true);
    assert.equal(app.itemMatches(first, "zh-CN", "Topic particle"), false);
    assert.equal(app.itemMatches(first, "en", "Topic particle"), true);
    assert.equal(app.itemMatches(first, "en", "主题助词"), false);
    assert.equal(app.itemMatches(first, "zh-CN", "저는 학생입니다"), true);
    assert.equal(app.itemMatches(first, "en", "저는 학생입니다"), true);
});

test("extra grammar category follows the active display language", () => {
    const category = "L3 - 추가 문법 (Extra Grammar)";
    assert.equal(app.localizedCategory(category, "zh-CN"), "L3 - 补充语法");
    assert.equal(app.localizedCategory(category, "en"), "L3 - Extra Grammar");
});

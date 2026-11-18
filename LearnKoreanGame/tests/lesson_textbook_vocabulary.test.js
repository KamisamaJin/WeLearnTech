const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const labels = require("../lesson/labels.js");
const fixtures = [
    { level: 1, lessons: 18, notebooks: 20, words: 497 },
    { level: 2, lessons: 18, notebooks: 16, words: 411 },
    { level: 3, lessons: 16, notebooks: 54, words: 601 },
    { level: 4, lessons: 16, notebooks: 76, words: 730 }
].map(item => ({ ...item, audit: require(`./fixtures/level${item.level}-textbook-vocabulary.json`) }));

function loadScript(file, key) {
    const context = { window: {} };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(__dirname, "..", file), "utf8"), context);
    return context.window[key] || vm.runInContext(key, context);
}

const normalize = word => word.normalize("NFKC").replace(/[?!.。？！]+$/, "").replace(/\s+/g, "");

function missingHeadwords(vocabulary, words, audit = fixtures[3].audit) {
    const headwords = new Set(vocabulary.map(word => normalize(word.ko)));
    return [...new Set(words)].filter(word => {
        if (headwords.has(normalize(word))) return false;
        const candidates = (audit.equivalents[word] || [word]).map(normalize);
        return audit.requireAll.includes(word)
            ? candidates.some(candidate => !headwords.has(candidate))
            : candidates.every(candidate => !headwords.has(candidate));
    });
}

for (const fixture of fixtures) {
    const audit = fixture.audit;
    test(`L${fixture.level}: textbook source lists cover every lesson`, () => {
        assert.equal(audit.lessons.length, fixture.lessons);
        assert.equal(audit.lessons.reduce((sum, lesson) => sum + lesson.notebooks.length, 0), fixture.notebooks);
        assert.equal(audit.lessons.reduce((sum, lesson) => sum + lesson.review.words.length, 0), fixture.words);
        for (const lesson of audit.lessons) {
            for (const source of [...lesson.notebooks, lesson.review]) {
                assert.ok(source.words.length > 0);
                assert.ok(source.words.every(word => !/단어장|배운 어휘 확인|^\d+과 /.test(word)));
            }
        }
    });
}

test("coverage uses standalone entries, not example text or longer collocations", () => {
    assert.deepEqual(missingHeadwords([
        { ko: "밀접한 관련", exampleKo: "충분한 수면이 필요해요." }
    ], ["밀접하다", "수면"]), ["밀접하다", "수면"]);
    assert.deepEqual(missingHeadwords([{ ko: "수업에 빠지다" }], ["(수업에) 빠지다"]), []);
    assert.deepEqual(missingHeadwords([{ ko: "서툴다" }], ["서투르다"]), []);
    assert.deepEqual(missingHeadwords([{ ko: "국립" }], ["국립/공립"]), ["국립/공립"]);
    assert.deepEqual(missingHeadwords([{ ko: "국립" }, { ko: "공립" }], ["국립/공립"]), []);
    assert.deepEqual(missingHeadwords([{ ko: "여보세요" }], ["여보세요?"]), []);
    assert.deepEqual(missingHeadwords([{ ko: "어머니" }], ["어머니(엄마)"], fixtures[0].audit), ["어머니(엄마)"]);
});

const lessons = new Map();
for (const { level, audit } of fixtures) {
    const data = loadScript(`lesson_data_l${level}.js`, `lessonGuideL${level}`);
    const manifest = loadScript(`lesson_manifest_l${level}.js`, `lessonGuideL${level}`);
    const search = loadScript(`lesson_search_l${level}.js`, `lessonGuideL${level}Search`);
    const baseTranslations = loadScript(`lesson_translations_l${level}_en.js`, `lessonGuideL${level}Translations`).en;
    for (const expected of audit.lessons) {
        const lesson = loadScript(`lesson_chunks/${expected.id}.js`, `lessonGuideL${level}LessonChunks`)[expected.id];
        const translationFile = `lesson_translations/en/${expected.id}.js`;
        const chunkTranslations = fs.existsSync(path.join(__dirname, "..", translationFile))
            ? loadScript(translationFile, `lessonGuideL${level}TranslationChunks`).en[expected.id] : {};
        for (const patch of [baseTranslations.lessons?.[expected.id], chunkTranslations]) {
            (patch?.vocabulary || []).forEach((fields, index) => {
                const word = lesson.vocabulary[index];
                word.translations ||= {};
                word.translations.en = { ...word.translations.en, ...fields };
            });
        }
        lessons.set(expected.id, lesson);

        for (const [kind, sources] of [["notebook", expected.notebooks], ["review", [expected.review]]]) {
            test(`${expected.id}: every ${kind} headword is present`, () => {
                for (const source of sources) {
                    assert.deepEqual(missingHeadwords(lesson.vocabulary, source.words, audit), [], `page ${source.page}`);
                    assert.ok(lesson.vocabularySources.some(item => item.page === source.page &&
                        item.label === (kind === "notebook" ? "단어장" : "배운 어휘 확인")));
                }
            });
        }

        test(`${expected.id}: bilingual entries, page references, counts and search stay consistent`, () => {
            const [firstPage, lastPage] = lesson.pages.split("-").map(Number);
            const metadata = data.lessons.find(item => item.id === expected.id);
            const lightMetadata = manifest.lessons.find(item => item.id === expected.id);
            assert.equal(metadata.stats.vocabulary, lesson.vocabulary.length);
            assert.equal(lightMetadata.stats.vocabulary, lesson.vocabulary.length);
            if (lesson.stats) assert.equal(lesson.stats.vocabulary, lesson.vocabulary.length);
            assert.equal(search[expected.id], metadata.searchText);
            for (const word of lesson.vocabulary) {
                for (const value of [word.ko, word.zh, word.exampleKo, word.exampleZh,
                    word.translations?.en?.meaning, word.translations?.en?.example]) {
                    assert.ok(typeof value === "string" && value.trim(), `${word.ko}: incomplete bilingual entry`);
                }
                assert.ok(labels.hasPos(word.pos), `${word.ko}: unrecognized POS ${word.pos}`);
                assert.ok(Number(word.page) >= firstPage && Number(word.page) <= lastPage,
                    `${word.ko}: page ${word.page} outside ${lesson.pages}`);
            }
            for (const source of [...expected.notebooks, expected.review]) {
                for (const word of source.words) {
                    const alternatives = [word, ...(audit.equivalents[word] || [])];
                    assert.ok(alternatives.some(candidate => normalize(metadata.searchText).includes(normalize(candidate))),
                        `${word}: absent from search index`);
                }
            }
        });
    }
}

test("homonyms keep the meaning required by the lesson context", () => {
    const mayor = lessons.get("l4-12").vocabulary.find(word => word.ko === "시장");
    assert.equal(mayor.zh, "市长");
    assert.equal(mayor.translations.en.meaning, "mayor");
    const seed = lessons.get("l4-13").vocabulary.find(word => word.ko === "씨");
    assert.equal(seed.zh, "种子；籽");
    assert.equal(seed.translations.en.meaning, "seed");
    const meaning = (id, ko) => lessons.get(id).vocabulary.find(word => word.ko === ko).translations.en.meaning;
    assert.equal(meaning("l1-05", "이"), "two (Sino-Korean)");
    assert.equal(meaning("l1-05", "팔"), "eight (Sino-Korean)");
    assert.equal(meaning("l1-08", "장"), "counter for sheets and photographs");
    assert.equal(meaning("l1-09", "다리"), "bridge");
    assert.equal(meaning("l1-14", "새"), "new");
    assert.equal(meaning("l2-03", "하다"), "to wear (accessories)");
    assert.equal(meaning("l2-15", "내리다"), "to unload; to lower");
    assert.equal(meaning("l2-16", "뽑다"), "to select; to recruit");
    assert.equal(meaning("l3-10", "지원"), "application; applying");
});

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const highlight = require("../lesson/grammar-highlight.js");

function marked(text, pattern) {
    return highlight.rangesFor(text, [{ pattern }]).map(range => text.slice(range.start, range.end));
}

test("recognizes inflected endings, attached consonants and repeated constructions", () => {
    assert.deepEqual(marked("적응하느라고 공부를 못 했어요.", "V-느라고"), ["느라고"]);
    assert.deepEqual(marked("알수록 재미있고 시간이 지날수록 편해져요.", "V/A-(으)ㄹ수록"), ["알수록", "날수록"]);
    assert.deepEqual(marked("운동도 할 겸 친구도 만날 겸 나왔어요.", "V-(으)ㄹ 겸 V-(으)ㄹ 겸"), ["할 겸", "날 겸"]);
    assert.deepEqual(marked("밥을 먹은 다음에 제가 할게요.", "V-(으)ㄴ 다음에"), ["은 다음에"]);
    assert.deepEqual(marked("제가 할게요. 먼저 먹을게요.", "V-(으)ㄹ게요"), ["할게요", "을게요"]);
    assert.deepEqual(marked("친구가 만나자고 했어요.", "동-자고 하다"), ["자고 했어요"]);
    assert.deepEqual(marked("서울로 이사했다면서요?", "V/A-는다면서요?"), ["다면서요"]);
});

test("avoids unrelated words, wrong final consonants and verb modifiers mistaken for noun particles", () => {
    assert.deepEqual(marked("가족수록 목록을 읽어요.", "V/A-(으)ㄹ수록"), []);
    assert.deepEqual(marked("친구가 먹는 음식을 봐요.", "N은/는"), []);
    assert.deepEqual(marked("저는 학생이에요.", "N은/는"), ["는"]);
    assert.deepEqual(marked("저는 먹는 음식을 골라요.", "V-는 N"), ["는"]);
    assert.deepEqual(marked("바로 학교로 가요.", "N(으)로"), ["로"]);
    assert.deepEqual(marked("가게에서 빠르게 걸어요.", "A-게"), ["게"]);
    assert.deepEqual(marked("그리고 사고 소식을 들었어요.", "V/A-고"), []);
    assert.deepEqual(marked("바다!", "동/형-는다/다"), []);
    assert.deepEqual(marked("느라고민이라는 이름이에요.", "V-느라고"), []);
    assert.deepEqual(marked("맑아요.", "날씨가 어때요?"), []);
    assert.deepEqual(marked("아무 문장입니다.", "unknown pattern"), []);
    assert.deepEqual(marked("좋은지 아침에 물어보세요.", "~는지/~은지/~ㄴ지 알다/모르다"), []);
    assert.deepEqual(marked("오라고 한복 사진을 보냈어요.", "동-으라고 하다"), []);
    assert.deepEqual(marked("이렇게 해 보건소에 가요.", "V-아/어 보다"), []);
});

test("highlights multiple lesson points with stable colors and non-overlapping escaped spans", () => {
    const grammar = [{ pattern: "V-느라고" }, { pattern: "V/A-(으)ㄹ수록" }];
    const lesson = { grammar };
    const text = '<img src=x onerror="bad()"> 공부하느라고 시간이 지날수록 바빠요. &';
    const html = highlight.render(text, grammar, lesson);
    assert.match(html, /grammar-highlight-0/);
    assert.match(html, /grammar-highlight-1/);
    assert.doesNotMatch(html, /<img/);
    assert.match(html, /&lt;img src=x onerror=&quot;bad\(\)&quot;&gt;/);
    const ranges = highlight.rangesFor(text, grammar, lesson);
    assert.equal(ranges.length, 2);
    assert.ok(ranges[0].end <= ranges[1].start);
    assert.equal(highlight.render("Hello <world> & 안녕", []), "Hello &lt;world&gt; &amp; 안녕");
    const overlap = highlight.rangesFor("공부하고 있어요.", [{pattern:"V/A-고"}, {pattern:"V-고 있다"}]);
    assert.equal(overlap.length, 1);
    assert.equal("공부하고 있어요.".slice(overlap[0].start, overlap[0].end), "고 있어요");
});

test("all 145 course grammar points have rules and all rendered sentences preserve the source text", () => {
    const context = { window: {} };
    const directory = path.join(__dirname, "../lesson_chunks");
    for (const file of fs.readdirSync(directory)) vm.runInNewContext(fs.readFileSync(path.join(directory, file), "utf8"), context);
    const lessons = [1,2,3,4].flatMap(level => Object.values(context.window[`lessonGuideL${level}LessonChunks`]));
    let count = 0;
    for (const lesson of lessons) {
        for (const grammar of lesson.grammar) {
            assert.ok(highlight.hasRule(grammar.pattern), `${lesson.id}: ${grammar.pattern}`);
            count++;
        }
        const sentences = [
            ...lesson.grammar.flatMap(grammar => [...(grammar.examples || []).map(example => example.ko), grammar.exampleKo].filter(Boolean)),
            ...lesson.dialogues.flatMap(dialogue => (dialogue.lines || []).map(line => line.ko))
        ];
        for (const sentence of sentences) {
            const html = highlight.render(sentence, lesson.grammar, lesson);
            const plain = html.replace(/<mark\b[^>]*>|<\/mark>/g, "");
            const escaped = highlight.render(sentence, []);
            assert.equal(plain, escaped, `${lesson.id}: ${sentence}`);
        }
    }
    assert.equal(count, 145);
});

const assert = require("assert");
const cloze = require("../cloze_game.js");

function fakeRandom() {
    let seed = 17;
    return () => {
        seed = (seed * 1103515245 + 12345) % 2147483648;
        return seed / 2147483648;
    };
}

{
    const card = cloze.createClozeCard({
        ko: "한국어",
        zh: "韩语",
        en: "Korean language",
        exampleKo: "저는 한국어를 공부해요.",
        exampleZh: "我学习韩语。",
        exampleEn: "I study Korean."
    });

    assert.equal(card.answer, "한국어");
    assert.equal(card.blankedKo, "저는 ___를 공부해요.");
    assert.equal(card.translation.zh, "我学习韩语。");
    assert.equal(card.translation.en, "I study Korean.");
}

{
    const card = cloze.createClozeCard({
        ko: "앞에 나서다",
        zh: "站出来、出头",
        en: "to step forward",
        exampleKo: "사람들 앞에 나서는 것을 어려워해요.",
        exampleZh: "觉得在人前站出来很难。",
        exampleEn: "The child finds it hard to stand in front of people."
    });

    assert.equal(card.answer, "앞에 나서는");
    assert.equal(card.blankedKo, "사람들 ___ 것을 어려워해요.");
}

{
    const pool = [
        { ko: "앞에 나서다", zh: "站出来", en: "step forward", exampleKo: "사람들 앞에 나서는 것을 어려워해요.", exampleZh: "觉得在人前站出来很难。", exampleEn: "It is hard to step forward." },
        { ko: "참여하다", zh: "参与", en: "to participate", exampleKo: "수업에 참여해요.", exampleZh: "参加课堂。", exampleEn: "I participate in class." },
        { ko: "부러워하다", zh: "羡慕", en: "to envy", exampleKo: "친구를 부러워해요.", exampleZh: "羡慕朋友。", exampleEn: "I envy my friend." },
        { ko: "낯설다", zh: "陌生", en: "unfamiliar", exampleKo: "처음에는 모든 것이 낯설었어요.", exampleZh: "一开始一切都很陌生。", exampleEn: "At first, everything was unfamiliar." },
        { ko: "장기 자랑", zh: "才艺展示", en: "talent show", exampleKo: "장기 자랑에서 노래를 불렀어요.", exampleZh: "在才艺展示中唱了歌。", exampleEn: "I sang at the talent show." }
    ];

    const target = cloze.createClozeCard(pool[0]);
    const question = cloze.createClozeQuestion(target, pool, { lang: "ZH", random: fakeRandom() });

    assert.equal(question.promptKo, "사람들 ___ 것을 어려워해요.");
    assert.equal(question.correctAnswer, "앞에 나서는");
    assert.equal(question.translation, "觉得在人前站出来很难。");
    assert.equal(question.options.length, 4);
    assert.equal(new Set(question.options.map(option => option.text)).size, 4);
    assert(question.options.some(option => option.correct && option.text === "앞에 나서는"));
}

{
    const round = cloze.createClozeRound([
        { ko: "한국어", zh: "韩语", en: "Korean", exampleKo: "저는 한국어를 공부해요.", exampleZh: "我学习韩语。", exampleEn: "I study Korean." },
        { ko: "학교", zh: "学校", en: "school" },
        { ko: "친구", zh: "朋友", en: "friend", exampleKo: "친구를 만나요.", exampleZh: "见朋友。", exampleEn: "I meet a friend." },
        { ko: "선생님", zh: "老师", en: "teacher", exampleKo: "선생님을 만나요.", exampleZh: "见老师。", exampleEn: "I meet the teacher." },
        { ko: "집", zh: "家", en: "home", exampleKo: "집에 가요.", exampleZh: "回家。", exampleEn: "I go home." }
    ], { count: 3, lang: "EN", random: fakeRandom() });

    assert.equal(round.length, 3);
    assert(round.every(question => question.options.length >= 3));
    assert(!round.some(question => question.term === "학교"));
}

{
    const staleReview = cloze.createClozeCard({
        ko: "앞에 나서다",
        zh: "站出来、出头",
        en: "to step forward",
        exampleKo: "사람들 앞에 나서는 것을 어려워해요.",
        exampleZh: "觉得在人前站出来很难。",
        exampleEn: "The child finds it hard to stand in front of people."
    });
    const round = cloze.createClozeRound([
        { ko: "한국어", zh: "韩语", en: "Korean", exampleKo: "저는 한국어를 공부해요.", exampleZh: "我学习韩语。", exampleEn: "I study Korean." },
        { ko: "친구", zh: "朋友", en: "friend", exampleKo: "친구를 만나요.", exampleZh: "见朋友。", exampleEn: "I meet a friend." },
        { ko: "선생님", zh: "老师", en: "teacher", exampleKo: "선생님을 만나요.", exampleZh: "见老师。", exampleEn: "I meet the teacher." },
        { ko: "집", zh: "家", en: "home", exampleKo: "집에 가요.", exampleZh: "回家。", exampleEn: "I go home." }
    ], { count: 2, lang: "ZH", reviewItems: [staleReview], random: fakeRandom() });

    assert(!round.some(question => question.term === "앞에 나서다"));
}

{
    const target = cloze.createClozeCard({
        ko: "청소기",
        zh: "吸尘器",
        en: "vacuum cleaner",
        pos: "명사",
        source: "어휘와 문법",
        exampleKo: "이 청소기는 이십일만 원입니다.",
        exampleZh: "这个吸尘器是二十一万韩元。",
        exampleEn: "This vacuum cleaner is 210,000 won."
    });
    const pool = [
        { ko: "청소기", zh: "吸尘器", en: "vacuum cleaner", pos: "명사", source: "어휘와 문법", exampleKo: "이 청소기는 이십일만 원입니다.", exampleZh: "这个吸尘器是二十一万韩元。", exampleEn: "This vacuum cleaner is 210,000 won." },
        { ko: "세탁기", zh: "洗衣机", en: "washing machine", pos: "명사", source: "어휘와 문법", exampleKo: "세탁기를 샀어요.", exampleZh: "买了洗衣机。", exampleEn: "I bought a washing machine." },
        { ko: "냉장고", zh: "冰箱", en: "refrigerator", pos: "명사", source: "어휘와 문법", exampleKo: "냉장고가 고장 났어요.", exampleZh: "冰箱坏了。", exampleEn: "The refrigerator broke." },
        { ko: "전자레인지", zh: "微波炉", en: "microwave", pos: "명사", source: "어휘와 문법", exampleKo: "전자레인지를 사용해요.", exampleZh: "使用微波炉。", exampleEn: "I use a microwave." },
        { ko: "급하다", zh: "急", en: "urgent", pos: "형용사", source: "문법", exampleKo: "일이 급해요.", exampleZh: "事情很急。", exampleEn: "The matter is urgent." },
        { ko: "참여하다", zh: "参加", en: "participate", pos: "동사", source: "듣기", exampleKo: "수업에 참여해요.", exampleZh: "参加课堂。", exampleEn: "I participate in class." }
    ];

    const question = cloze.createClozeQuestion(target, pool, { lang: "ZH", random: fakeRandom() });
    const distractors = question.options.filter(option => !option.correct).map(option => option.text).sort();
    assert.deepEqual(distractors, ["냉장고", "세탁기", "전자레인지"]);
}

console.log("cloze_game tests passed");

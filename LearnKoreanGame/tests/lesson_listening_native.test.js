const assert = require("assert");
const nativeListening = require("../lesson_listening_native.js");

const payload = nativeListening.buildQueuePayload({
    sessionId: "test-session",
    level: "L3",
    lesson: {
        id: "l3-01",
        titleKo: "대인 관계"
    },
    lessonTranslation: "人际关系",
    settings: {
        mode: "lesson",
        speed: "slow",
        repeat: 2,
        translationLocale: "zh-CN"
    },
    startIndex: 20,
    queue: [
        {
            id: "lesson-title",
            ref: "lesson-title",
            section: "overview",
            label: "本课",
            text: "대인 관계",
            lang: "ko-KR",
            mode: "sentence",
            pauseAfterMs: 900,
            voice: { name: "browser-only" }
        },
        {
            id: "lesson-title-translation",
            ref: "lesson-title",
            section: "overview",
            label: "本课",
            text: "人际关系",
            lang: "zh-CN",
            mode: "translation",
            pauseAfterMs: 900
        }
    ]
});

assert.equal(payload.protocolVersion, 1);
assert.equal(payload.sessionId, "test-session");
assert.equal(payload.startIndex, 1);
assert.equal(payload.items.length, 2);
assert.equal(payload.items[0].text, "대인 관계");
assert.equal(payload.items[0].voice, undefined);
assert.equal(payload.settings.repeat, 2);

const state = nativeListening.normalizeState({
    status: "playing",
    lessonId: "l3-01",
    index: 3,
    ref: "vocab-1",
    repeat: 9
});

assert.equal(state.status, "playing");
assert.equal(state.index, 3);
assert.equal(state.repeat, 3);
assert.equal(nativeListening.normalizeState({ status: "unknown" }).status, "idle");
const timerState = nativeListening.normalizeState({
    status: "ended",
    sleepTimerEndsAt: 1_800_000_000_000,
    endReason: "timer"
});
assert.equal(timerState.sleepTimerEndsAt, 1_800_000_000_000);
assert.equal(timerState.endReason, "timer");

console.log("lesson listening native tests passed");

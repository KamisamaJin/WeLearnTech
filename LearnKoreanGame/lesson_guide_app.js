(function initLessonGuideApp() {
const config = window.lessonGuideConfig || {};
const level = config.level || "L2";
function resolveGlobalValue(name) {
    if (!name) return undefined;
    if (window[name] !== undefined) return window[name];

    try {
        return window.eval(name);
    } catch (_) {
        return undefined;
    }
}

const lessonData = config.data || resolveGlobalValue(config.dataGlobal) || { lessons: [] };
const lessons = lessonData.lessons || [];
const lessonTranslationPacks = config.translationPacks || resolveGlobalValue(config.translationsGlobal) || {};
const lessonTranslationChunkPaths = config.translationChunkPaths || {
    en: config.translationChunkMode === "all"
        ? Object.fromEntries(lessons.map(lesson => [lesson.id, `lesson_translations/en/${lesson.id}.js`]))
        : Object.fromEntries(lessons.filter(lesson => lesson.translationChunk).map(lesson => [lesson.id, lesson.translationChunk]))
};
const localeApi = window.KIIPLocale || {
    supportedLocales: ["zh-CN", "en"],
    shortLabels: { "zh-CN": "中", en: "EN" },
    normalize: locale => ["zh-CN", "en"].includes(locale) ? locale : "zh-CN",
    read: storage => ["zh-CN", "en"].includes(storage?.getItem("lessonGuideLocale")) ? storage.getItem("lessonGuideLocale") : "zh-CN",
    write: (storage, locale) => {
        storage?.setItem("lessonGuideLocale", locale);
        storage?.setItem("lessonGuideUiLocale", locale);
        storage?.setItem("lessonGuideTranslationLocale", locale);
        return locale;
    }
};
const iconApi = window.KIIPIcons;
const labelApi = window.KIIPLessonLabels;
const localeStorageKeys = {
    language: localeApi.storageKeys?.language || "lessonGuideLocale",
    ui: localeApi.storageKeys?.legacyUi || "lessonGuideUiLocale",
    translation: localeApi.storageKeys?.legacyTranslation || "lessonGuideTranslationLocale",
    showTranslation: "lessonGuideShowTranslation",
    listeningMode: "lessonGuideListeningMode",
    listeningSpeed: "lessonGuideListeningSpeed",
    listeningRepeat: "lessonGuideListeningRepeat",
    listeningSleepTimer: "lessonGuideListeningSleepTimer"
};
const localeShortNames = localeApi.shortLabels;
const appLocales = localeApi.supportedLocales;
const messages = {
    "zh-CN": {
        appTitle: config.title || `${level} Lesson Guide`,
        sidebarSubtitle: "单词、对话、文化文章中文伴学",
        searchPlaceholder: "搜索课文、单词或中文...",
        openLessonMenu: "打开课程菜单",
        closeLessonMenu: "关闭课程菜单",
        returnHome: "返回首页",
        switchToEnglish: "切换为英文",
        switchToChinese: "切换为中文",
        lessonAriaLabel: "第 {number} 课：{title}",
        draft: "草稿",
        refined: "精修",
        todo: "待抽取",
        noResults: "没有匹配的课文",
        tabsOverview: "总览",
        tabsVocabulary: "单词",
        tabsDialogue: "对话",
        tabsCulture: "文化",
        tabsPractice: "练习",
        statVocabulary: "单词与表达",
        statDialogue: "对话练习",
        statCulture: "文化文章",
        learningGoals: "学习目标",
        grammarLinks: "本课语法连接",
        openGrammarDetail: "打开语法知识：{pattern}",
        grammarPending: "语法点会在该课 OCR 校对后补充。",
        sourcePending: "来源待补",
        posPending: "词性待补",
        practiceFallback: "练习",
        hideTranslation: "隐藏翻译",
        showTranslation: "显示翻译",
        vocabularyToolbar: "{count} 个词条，翻译和例句可用于复习。",
        vocabularyPendingTitle: "单词表待抽取",
        vocabularyPendingBody: "后续会从该课 어휘 页面抽取韩语词、翻译、例句和使用提示。",
        dialogueToolbar: "{dialogues} 段对话 / {lines} 句台词",
        dialoguePendingTitle: "对话练习待抽取",
        dialoguePendingBody: "后续会拆分角色台词，补逐句翻译、表达讲解和替换练习。",
        dialoguePanelTitle: "对话正文",
        readingTips: "读法提示",
        rolePractice: "角色练习",
        substitutionPractice: "替换练习",
        patternLabel: "句型",
        culturePendingTitle: "文化文章待抽取",
        culturePendingBody: "后续会整理韩国文化文章原文、自然翻译、背景说明和理解题。",
        originalLabel: "原文",
        translationLabel: "翻译",
        originalAndTranslation: "原文与翻译",
        keyTerms: "关键词",
        comprehensionQuestions: "理解问题",
        practicePendingTitle: "练习待生成",
        practicePendingBody: "等本课单词、对话和文化文章校对后，会生成翻译、替换和理解练习。",
        answer: "参考答案",
        loadingTitle: "正在加载课程数据",
        loadErrorTitle: "课程数据加载失败",
        loadErrorBody: "{title} 的分片文件没有加载成功，请刷新页面后再试。",
        listeningTitle: "收听模式",
        listeningUnavailable: "当前浏览器没有可用韩语语音。",
        listeningEmpty: "当前模式没有可播放的韩语内容。",
        listeningIdle: "选择模式后开始连续收听本课内容。",
        listeningPlaying: "正在播放 {current} / {total}",
        listeningPreparing: "正在准备语音 {current} / {total}",
        listeningPaused: "已暂停 {current} / {total}",
        listeningEnded: "已播放完成",
        listeningTimerEnded: "定时播放已结束",
        listeningModeLabel: "范围",
        listeningSpeedLabel: "语速",
        listeningRepeatLabel: "重复",
        listeningSleepTimerLabel: "定时",
        listeningSleepTimerOff: "关闭",
        listeningSleepTimerMinutes: "{minutes} 分钟",
        listeningStart: "开始",
        listeningPause: "暂停",
        listeningResume: "继续",
        listeningStop: "停止",
        listeningPrevious: "上一句",
        listeningNext: "下一句",
        listeningModeLesson: "本课",
        listeningModeVocabulary: "单词",
        listeningModeDialogue: "对话",
        listeningModeCulture: "文化",
        listeningSpeedSlow: "慢",
        listeningSpeedNormal: "正常",
        listeningSpeedFast: "快",
        listeningRepeatOnce: "1 次",
        listeningRepeatTwice: "2 次",
        listeningRepeatThrice: "3 次",
        listeningNow: "正在收听",
        pronunciationLabel: "发音",
        playKoreanPronunciation: "播放韩语发音：{text}"
    },
    en: {
        appTitle: config.title || `${level} Lesson Guide`,
        sidebarSubtitle: "Vocabulary, dialogues, and culture notes",
        searchPlaceholder: "Search lessons, words, or translations...",
        openLessonMenu: "Open lesson menu",
        closeLessonMenu: "Close lesson menu",
        returnHome: "Back to home",
        switchToEnglish: "Switch to English",
        switchToChinese: "Switch to Chinese",
        lessonAriaLabel: "Lesson {number}: {title}",
        draft: "Draft",
        refined: "Refined",
        todo: "To extract",
        noResults: "No matching lessons",
        tabsOverview: "Overview",
        tabsVocabulary: "Words",
        tabsDialogue: "Dialogue",
        tabsCulture: "Culture",
        tabsPractice: "Practice",
        statVocabulary: "Words & phrases",
        statDialogue: "Dialogues",
        statCulture: "Culture texts",
        learningGoals: "Learning Goals",
        grammarLinks: "Grammar Links",
        openGrammarDetail: "Open grammar guide: {pattern}",
        grammarPending: "Grammar notes will be added after OCR review.",
        sourcePending: "Source pending",
        posPending: "POS pending",
        practiceFallback: "Practice",
        hideTranslation: "Hide translation",
        showTranslation: "Show translation",
        vocabularyToolbar: "{count} entries with translations and examples.",
        vocabularyPendingTitle: "Vocabulary pending",
        vocabularyPendingBody: "Korean words, translations, examples, and notes will be extracted from this lesson.",
        dialogueToolbar: "{dialogues} dialogues / {lines} lines",
        dialoguePendingTitle: "Dialogues pending",
        dialoguePendingBody: "Dialogue lines, translations, notes, and substitution drills will be added later.",
        dialoguePanelTitle: "Dialogue Text",
        readingTips: "Reading Tips",
        rolePractice: "Role Practice",
        substitutionPractice: "Substitution Practice",
        patternLabel: "Pattern",
        culturePendingTitle: "Culture text pending",
        culturePendingBody: "Original Korean text, natural translations, background notes, and questions will be added later.",
        originalLabel: "Original",
        translationLabel: "Translation",
        originalAndTranslation: "Original & Translation",
        keyTerms: "Key Terms",
        comprehensionQuestions: "Questions",
        practicePendingTitle: "Practice pending",
        practicePendingBody: "Translation, substitution, and comprehension exercises will be generated after review.",
        answer: "Answer",
        loadingTitle: "Loading lesson data",
        loadErrorTitle: "Lesson data failed to load",
        loadErrorBody: "{title}'s chunk file did not load. Please refresh and try again.",
        listeningTitle: "Listening Mode",
        listeningUnavailable: "No Korean voice is available in this browser.",
        listeningEmpty: "This mode has no playable Korean content.",
        listeningIdle: "Choose a range and start listening through this lesson.",
        listeningPlaying: "Playing {current} / {total}",
        listeningPreparing: "Preparing audio {current} / {total}",
        listeningPaused: "Paused {current} / {total}",
        listeningEnded: "Finished",
        listeningTimerEnded: "Sleep timer ended playback",
        listeningModeLabel: "Range",
        listeningSpeedLabel: "Speed",
        listeningRepeatLabel: "Repeat",
        listeningSleepTimerLabel: "Timer",
        listeningSleepTimerOff: "Off",
        listeningSleepTimerMinutes: "{minutes} min",
        listeningStart: "Start",
        listeningPause: "Pause",
        listeningResume: "Resume",
        listeningStop: "Stop",
        listeningPrevious: "Previous",
        listeningNext: "Next",
        listeningModeLesson: "Lesson",
        listeningModeVocabulary: "Words",
        listeningModeDialogue: "Dialogue",
        listeningModeCulture: "Culture",
        listeningSpeedSlow: "Slow",
        listeningSpeedNormal: "Normal",
        listeningSpeedFast: "Fast",
        listeningRepeatOnce: "1x",
        listeningRepeatTwice: "2x",
        listeningRepeatThrice: "3x",
        listeningNow: "Listening",
        pronunciationLabel: "Pronunciation",
        playKoreanPronunciation: "Play Korean pronunciation: {text}"
    }
};
const tabs = [
    { id: "overview", labelKey: "tabsOverview" },
    { id: "vocabulary", labelKey: "tabsVocabulary" },
    { id: "dialogue", labelKey: "tabsDialogue" },
    { id: "culture", labelKey: "tabsCulture" },
    { id: "practice", labelKey: "tabsPractice" }
];
const listeningModes = [
    { id: "lesson", labelKey: "listeningModeLesson" },
    { id: "vocabulary", labelKey: "listeningModeVocabulary" },
    { id: "dialogue", labelKey: "listeningModeDialogue" },
    { id: "culture", labelKey: "listeningModeCulture" }
];
const listeningSpeeds = [
    { id: "slow", labelKey: "listeningSpeedSlow", sentenceRate: 0.82, wordRate: 0.86 },
    { id: "normal", labelKey: "listeningSpeedNormal", sentenceRate: 1, wordRate: 1 },
    { id: "fast", labelKey: "listeningSpeedFast", sentenceRate: 1.08, wordRate: 1.12 }
];
const listeningRepeats = [
    { value: 1, labelKey: "listeningRepeatOnce" },
    { value: 2, labelKey: "listeningRepeatTwice" },
    { value: 3, labelKey: "listeningRepeatThrice" }
];
const sleepTimerApi = window.KIIPSleepTimer;
const listeningFollowApi = window.KIIPListeningFollow;
const listeningFloatingApi = window.KIIPListeningFloating;
const listeningSleepDurations = sleepTimerApi.durationMinutes;

const lessonList = document.getElementById("lesson-list");
const mainContent = document.getElementById("main-content");
const lessonSearch = document.getElementById("lesson-search");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const menuToggle = document.getElementById("menu-toggle");
const mobileTitle = document.getElementById("mobile-title");
const floatingListeningControls = document.getElementById("floating-listening-controls");

const requestedLessonId = new URLSearchParams(window.location.search).get("lesson");
let activeLessonId = lessons.some(lesson => lesson.id === requestedLessonId)
    ? requestedLessonId
    : lessons[0].id;
let activeTab = "overview";
let lessonSearchLoadPromise = null;
const initialLocale = localeApi.read(localStorage);
let uiLocale = initialLocale;
let translationLocale = initialLocale;
let showChinese = localStorage.getItem(localeStorageKeys.showTranslation) !== "false";
const storedListeningMode = localStorage.getItem(localeStorageKeys.listeningMode);
const storedListeningSpeed = localStorage.getItem(localeStorageKeys.listeningSpeed);
const storedListeningRepeat = Number(localStorage.getItem(localeStorageKeys.listeningRepeat));
const storedSleepTimerMinutes = sleepTimerApi.normalizeDuration(localStorage.getItem(localeStorageKeys.listeningSleepTimer));
const listeningState = {
    status: "idle",
    lessonId: null,
    mode: listeningModes.some(mode => mode.id === storedListeningMode) ? storedListeningMode : "lesson",
    speed: listeningSpeeds.some(speed => speed.id === storedListeningSpeed) ? storedListeningSpeed : "normal",
    repeat: listeningRepeats.some(repeat => repeat.value === storedListeningRepeat) ? storedListeningRepeat : 1,
    queue: [],
    index: 0,
    currentRef: "",
    error: "",
    restartOnResume: false,
    engine: "web",
    sessionId: "",
    sleepTimerMinutes: storedSleepTimerMinutes,
    sleepTimerEndsAt: 0,
    endReason: "",
    lastFollowedRef: ""
};
const sleepTimerScheduler = sleepTimerApi.createScheduler({
    setTimeout: window.setTimeout.bind(window),
    clearTimeout: window.clearTimeout.bind(window),
    onTick: updateSleepTimerDisplay,
    onExpire: handleSleepTimerExpired
});
let nativeListeningReady = false;
let nativeSpeechPreviewSessionId = "";
let nativeSpeechPreviewButton = null;
let nativeVoiceSetupPromptOpen = false;
let listeningPlayerObserver = null;
let listeningPlayerObservationRunId = 0;
let listeningPlayerVisible = true;
let floatingListeningVisible = false;
const floatingListeningDisplayLatch = listeningFloatingApi.createDisplayLatch({
    onChange: visible => {
        floatingListeningVisible = visible;
        paintFloatingListeningControls();
    }
});
const nativeListeningDriver = window.lessonGuideNativeListening?.createDriver({
    onStateChanged: applyNativeListeningState
}) || null;
let listeningWakeLock = null;
let renderRunId = 0;
const mobileSwipeQuery = window.matchMedia("(max-width: 920px)");
const tabSwipeState = {
    tracking: false,
    startX: 0,
    startY: 0,
    startedAt: 0
};

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function t(key) {
    return messages[uiLocale]?.[key] || messages["zh-CN"][key] || key;
}

function tf(key, values = {}) {
    return t(key).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function getLocalizedValue(item, translationKey, fallbackKey) {
    const preferred = item?.translations?.[translationLocale]?.[translationKey];
    if (preferred) return preferred;

    const fallbackTranslation = item?.translations?.["zh-CN"]?.[translationKey];
    if (fallbackTranslation) return fallbackTranslation;

    return item?.[fallbackKey] || "";
}

function wordMeaning(item) {
    return getLocalizedValue(item, "meaning", "zh");
}

function wordGuide(item) {
    if (translationLocale === "en" && !item?.translations?.en?.guide && item?.translations?.en?.meaning) {
        return `${item.ko} means "${item.translations.en.meaning}". Notice how it is used in the example sentence.`;
    }
    return getLocalizedValue(item, "guide", "guide");
}

function uniqueGuideTips(tips) {
    const seen = new Set();
    return tips.filter(tip => {
        if (!tip?.text) return false;
        const key = `${tip.type || tip.label}:${tip.text}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function wordGuideTipType(tip) {
    return labelApi.normalizeTipType(tip?.type || tip?.label);
}

function wordGuideTipLabel(type) {
    return labelApi.tipLabel(uiLocale, type);
}

function normalizeWordGuideTips(tips = [], word = "") {
    if (!Array.isArray(tips)) return [];
    return uniqueGuideTips(tips
        .map(tip => ({
            type: wordGuideTipType(tip),
            text: String(tip.text || "").trim()
        }))
        .filter(tip => tip.type && tip.text && !labelApi.isRedundantWordTip(word, tip))
        .map(tip => ({
            type: tip.type,
            text: tip.text
        })));
}

function lessonHasWordGuideTips(lesson) {
    return (lesson?.vocabulary || []).some(item => localizedWordGuideTips(item).length);
}

function localizedWordGuideTips(item) {
    const preferred = item?.translations?.[translationLocale]?.tips;
    if (Array.isArray(preferred) && preferred.length) return normalizeWordGuideTips(preferred, item.ko);
    if (translationLocale !== "zh-CN") return [];

    const fallbackTranslation = item?.translations?.["zh-CN"]?.tips;
    if (Array.isArray(fallbackTranslation) && fallbackTranslation.length) return normalizeWordGuideTips(fallbackTranslation, item.ko);

    return normalizeWordGuideTips(item?.tips, item.ko);
}

function renderWordGuideTips(tips) {
    return `
        <div class="word-guide-tips">
            ${tips.map(tip => `
                <div class="word-guide-tip">
                    <span class="word-guide-label">${escapeHtml(wordGuideTipLabel(tip.type))}</span>
                    <span class="word-guide-text">${escapeHtml(tip.text)}</span>
                </div>
            `).join("")}
        </div>
    `;
}

function renderWordGuide(lesson, item) {
    const dataTips = localizedWordGuideTips(item);
    if (dataTips.length) return renderWordGuideTips(dataTips);
    if (lessonHasWordGuideTips(lesson)) return "";

    return `<p class="word-guide">${escapeHtml(wordGuide(item))}</p>`;
}

function wordExampleTranslation(item) {
    return getLocalizedValue(item, "example", "exampleZh");
}

function lineTranslation(line) {
    if (translationLocale === "en" && line?.en) return line.en;
    return getLocalizedValue(line, "translation", "zh");
}

function lineGuide(line) {
    if (translationLocale === "en") {
        return line?.noteEn || line?.translations?.en?.guide || line?.translations?.en?.note || "";
    }
    const guide = getLocalizedValue(line, "guide", "guide");
    return guide || line?.noteZh || "";
}

function dialogueLearningPoints(dialogue) {
    const points = localizedArray(dialogue, "learningPoints", "learningPoints");
    if (points.length) return points;

    const guide = translationLocale === "en"
        ? dialogue.guideEn || dialogue.guideZh
        : dialogue.guideZh || dialogue.guideEn;
    if (guide) return [guide];

    return (dialogue.lines || [])
        .map(lineGuide)
        .filter(Boolean)
        .slice(0, 3);
}

function dialogueRolePlays(dialogue) {
    if (dialogue.rolePlays?.length) return dialogue.rolePlays;

    if (dialogue.roleplay) {
        return [{
            title: "场景练习",
            promptZh: dialogue.roleplay.promptZh || dialogue.roleplay.promptKo || "",
            answerKo: (dialogue.roleplay.cues || []).join(" / "),
            translations: {
                en: {
                    title: "Scene Practice",
                    prompt: dialogue.roleplay.translations?.en?.prompt || dialogue.roleplay.promptKo || dialogue.roleplay.promptZh || ""
                }
            }
        }];
    }

    if (dialogue.roleplayZh || dialogue.roleplayKo || dialogue.roleplayEn) {
        return [{
            title: "场景练习",
            promptZh: dialogue.roleplayZh || dialogue.roleplayKo || "",
            answerKo: (dialogue.substitutions || []).join(" / "),
            translations: {
                en: {
                    title: "Scene Practice",
                    prompt: dialogue.roleplayEn || dialogue.roleplayKo || dialogue.roleplayZh || ""
                }
            }
        }];
    }

    const isPronunciationDialogue = [dialogue.title, dialogue.focus, dialogue.source]
        .filter(Boolean)
        .some(text => String(text).includes("발음"));
    const pronunciationLines = (dialogue.lines || [])
        .filter(line => isPronunciationDialogue || line.speaker === "발음" || /\[[^\]]+\]/.test(line.ko || ""))
        .map(line => line.ko)
        .filter(Boolean);
    if (pronunciationLines.length) {
        return [{
            title: "发音跟读",
            promptZh: "跟读本页重点发音，再选一句完整句子读出来。",
            answerKo: pronunciationLines.join(" / "),
            translations: {
                en: {
                    title: "Pronunciation Shadowing",
                    prompt: "Repeat the key pronunciations, then read one complete sentence aloud."
                }
            }
        }];
    }

    if (dialogue.drills?.length) {
        const firstAnswer = dialogue.drills.map(drill => drill.answerKo).filter(Boolean)[0] || "";
        return [{
            title: "应用练习",
            promptZh: "先读原对话，再选一个提示换成自己的情况说出来。",
            answerKo: firstAnswer,
            generatedFrom: "drills",
            translations: {
                en: {
                    title: "Application Practice",
                    prompt: "Read the dialogue first, then choose one cue and say it with your own situation."
                }
            }
        }];
    }

    const dialogueLines = compactDialogueLines(dialogue);
    if (dialogueLines.length) {
        const speakers = Array.from(new Set((dialogue.lines || []).map(line => line.speaker).filter(Boolean)));
        const isReadingStyle = speakers.length <= 1 || speakers.some(speaker => ["본문", "질문", "답", "제목", "안내", "표"].includes(speaker));
        const promptZh = isReadingStyle
            ? "把这段内容用 2-3 句韩语复述，先说主题，再说关键信息。"
            : `按 ${speakers.slice(0, 2).join(" / ")} 的角色重说，再把人物或场景换成自己的情况。`;
        const promptEn = isReadingStyle
            ? "Retell this content in 2-3 Korean sentences: topic first, then key details."
            : `Practice the roles ${speakers.slice(0, 2).join(" / ")}, then replace the people or situation.`;
        return [{
            title: isReadingStyle ? "内容复述" : "角色复述",
            promptZh,
            answerKo: dialogueLines.join("\n"),
            generatedFrom: "dialogue-lines",
            translations: {
                en: {
                    title: isReadingStyle ? "Content Retelling" : "Role Retelling",
                    prompt: promptEn
                }
            }
        }];
    }

    return [];
}

function compactDialogueLines(dialogue, limit = 4) {
    return (dialogue.lines || [])
        .filter(line => line.ko)
        .slice(0, limit)
        .map(line => line.speaker ? `${line.speaker}: ${line.ko}` : line.ko)
        .filter(Boolean);
}

function dialogueDrills(dialogue) {
    if (dialogue.drills?.length) return dialogue.drills;

    const cues = dialogue.roleplay?.cues?.length ? dialogue.roleplay.cues : dialogue.substitutions;
    if (!cues?.length) return [];

    return cues.map(cue => ({
        pattern: dialogue.focus || t("patternLabel"),
        promptZh: "替换练习",
        answerKo: cue,
        translations: {
            en: {
                prompt: "Substitution practice"
            }
        }
    }));
}

function dialogueSideDrills(dialogue, rolePlays) {
    const drills = dialogueDrills(dialogue);
    if (drills.length) return drills;

    const generatedLineDrills = compactDialogueLines(dialogue, 2).map(line => ({
        pattern: dialogue.focus || t("patternLabel"),
        promptZh: "替换人物或场景后重说这句。",
        answerKo: line.replace(/^[^:]+:\s*/, ""),
        translations: {
            en: {
                prompt: "Replace the person or situation and say this sentence again."
            }
        }
    }));
    if (generatedLineDrills.length) return generatedLineDrills;

    const roleAnswers = (rolePlays || [])
        .map(task => task.answerKo)
        .filter(Boolean);
    if (roleAnswers.length) {
        return roleAnswers.map(answerKo => ({
            pattern: dialogue.focus || t("patternLabel"),
            promptZh: "用本课表达再说一遍。",
            answerKo,
            translations: {
                en: {
                    prompt: "Say it again using this lesson's expression."
                }
            }
        }));
    }

    const isPronunciationDialogue = [dialogue.title, dialogue.focus, dialogue.source]
        .filter(Boolean)
        .some(text => String(text).includes("발음"));
    const pronunciationLines = (dialogue.lines || [])
        .filter(line => isPronunciationDialogue || line.speaker === "발음" || /\[[^\]]+\]/.test(line.ko || ""))
        .map(line => line.ko)
        .filter(Boolean);
    return pronunciationLines.map(answerKo => ({
        pattern: dialogue.focus || "발음",
        promptZh: "跟读发音。",
        answerKo,
        translations: {
            en: {
                prompt: "Repeat the pronunciation."
            }
        }
    }));
}

function cultureTranslation(item, key) {
    if (key === "translation") {
        const localizedQuestion = item?.translations?.[translationLocale]?.question;
        if (localizedQuestion) return localizedQuestion;
    }

    const fallbackKeys = {
        translation: "zh",
        meaning: "zh",
        answer: "a",
        guide: "guide",
        title: "titleZh",
        summary: "summaryZh"
    };
    return getLocalizedValue(item, key, fallbackKeys[key] || key);
}

function localizedArray(item, translationKey, fallbackKey) {
    const preferred = item?.translations?.[translationLocale]?.[translationKey];
    if (Array.isArray(preferred) && preferred.length) return preferred;

    const fallbackTranslation = item?.translations?.["zh-CN"]?.[translationKey];
    if (Array.isArray(fallbackTranslation) && fallbackTranslation.length) return fallbackTranslation;

    return item?.[fallbackKey] || [];
}

function mergeLocaleFields(item, locale, fields) {
    if (!item || !fields) return;
    const cleaned = Object.fromEntries(Object.entries(fields).filter(([, value]) => value !== undefined));
    if (!Object.keys(cleaned).length) return;
    item.translations ||= {};
    item.translations[locale] = {
        ...(item.translations[locale] || {}),
        ...cleaned
    };
}

function mergeArrayLocaleFields(items = [], locale, fieldPatches = []) {
    fieldPatches.forEach((fields, index) => {
        mergeLocaleFields(items[index], locale, fields);
    });
}

function applyLessonTranslationPatch(lesson, locale, patch) {
    if (!patch) return;

    mergeLocaleFields(lesson, locale, {
        title: patch.title,
        goals: patch.goals
    });
    mergeArrayLocaleFields(lesson.grammar, locale, patch.grammar);
    mergeArrayLocaleFields(lesson.vocabulary, locale, patch.vocabulary);
    mergeArrayLocaleFields(lesson.practice, locale, patch.practice);

    (patch.dialogues || []).forEach((dialoguePatch, index) => {
        const dialogue = lesson.dialogues?.[index];
        if (!dialogue) return;
        mergeLocaleFields(dialogue, locale, {
            scene: dialoguePatch.scene,
            learningPoints: dialoguePatch.learningPoints
        });
        mergeArrayLocaleFields(dialogue.lines, locale, dialoguePatch.lines);
        mergeArrayLocaleFields(dialogue.rolePlays, locale, dialoguePatch.rolePlays);
        mergeArrayLocaleFields(dialogue.drills, locale, dialoguePatch.drills);
    });

    if (lesson.culture && patch.culture) {
        mergeLocaleFields(lesson.culture, locale, {
            title: patch.culture.title,
            summary: patch.culture.summary
        });
        mergeArrayLocaleFields(lesson.culture.paragraphs, locale, patch.culture.paragraphs);
        mergeArrayLocaleFields(lesson.culture.keyTerms, locale, patch.culture.keyTerms);
        mergeArrayLocaleFields(lesson.culture.questions, locale, patch.culture.questions);
    }
}

function applyEmbeddedNestedTranslations(lesson) {
    (lesson.dialogues || []).forEach(dialogue => {
        Object.entries(dialogue.translations || {}).forEach(([locale, patch]) => {
            mergeArrayLocaleFields(dialogue.lines, locale, patch.lines);
            mergeArrayLocaleFields(dialogue.rolePlays, locale, patch.rolePlays);
            mergeArrayLocaleFields(dialogue.drills, locale, patch.drills);
        });
    });

    const culture = Array.isArray(lesson.culture) ? lesson.culture[0] : lesson.culture;
    if (!culture) return;

    Object.entries(culture.translations || {}).forEach(([locale, patch]) => {
        mergeArrayLocaleFields(culture.paragraphs, locale, patch.paragraphs);
        mergeArrayLocaleFields(culture.keyTerms, locale, patch.keyTerms);
        mergeArrayLocaleFields(culture.questions, locale, patch.questions);
    });
}

function getLessonTranslationChunk(locale, lessonId) {
    return window[config.translationChunksGlobal]?.[locale]?.[lessonId];
}

function applyLessonTranslationPacks(lesson) {
    applyEmbeddedNestedTranslations(lesson);

    Object.entries(lessonTranslationPacks).forEach(([locale, pack]) => {
        applyLessonTranslationPatch(lesson, locale, pack?.lessons?.[lesson.id]);
        applyLessonTranslationPatch(lesson, locale, getLessonTranslationChunk(locale, lesson.id));
    });

    return lesson;
}

function lessonTitleTranslation(item) {
    return getLocalizedValue(item, "title", "titleZh");
}

function grammarMeaning(item) {
    return getLocalizedValue(item, "meaning", "zh");
}

function grammarGuide(item) {
    return getLocalizedValue(item, "guide", "guide");
}

function grammarWikiHref(lesson, grammarIndex) {
    return window.lessonGuideGrammarLinks?.hrefFor(lesson.id, grammarIndex) || "grammar_wiki.html";
}

function dialogueScene(dialogue) {
    return getLocalizedValue(dialogue, "scene", "sceneZh");
}

function taskTitle(item) {
    return getLocalizedValue(item, "title", "title");
}

function taskPrompt(item) {
    return getLocalizedValue(item, "prompt", "promptZh");
}

function cultureTitleTranslation(culture) {
    return getLocalizedValue(culture, "title", "titleZh");
}

function cultureSummary(culture) {
    return getLocalizedValue(culture, "summary", "summaryZh");
}

function practicePrompt(item) {
    return getLocalizedValue(item, "prompt", "prompt");
}

function practiceAnswer(item) {
    const nestedAnswerKo = item?.prompts?.find(prompt => prompt.answerKo)?.answerKo;
    const answer = item?.answerKo || nestedAnswerKo || item?.answer || "";
    return String(answer).split(/\s+\/\s+/)[0].trim();
}

function formatWordSource(item) {
    if (item.page && item.source) return `p.${item.page} · ${item.source}`;
    if (item.page) return `p.${item.page}`;
    if (item.source) return item.source;
    return t("sourcePending");
}

function formatWordPos(pos) {
    return labelApi.posLabel(uiLocale, pos, t("posPending"));
}

function formatPracticeType(type) {
    return labelApi.practiceLabel(uiLocale, type, t("practiceFallback"));
}

function hasHangul(value) {
    return window.KIIPListeningContent.hasHangul(value);
}

function koreanSpeechLabel(text) {
    return tf("playKoreanPronunciation", { text });
}

function normalizeKoreanSpeechText(value) {
    return window.KIIPListeningContent.normalizeKoreanSpeechText(value);
}

const hangulBase = 0xac00;
const hangulLast = 0xd7a3;
const hangulInitials = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const hangulMedials = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
const hangulFinals = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const hangulInitialIndex = Object.fromEntries(hangulInitials.map((letter, index) => [letter, index]));
const hangulFinalIndex = Object.fromEntries(hangulFinals.map((letter, index) => [letter, index]));
const liaisonFinals = {
    "ㄱ": ["", "ㄱ"],
    "ㄲ": ["", "ㄲ"],
    "ㄴ": ["", "ㄴ"],
    "ㄷ": ["", "ㄷ"],
    "ㄹ": ["", "ㄹ"],
    "ㅁ": ["", "ㅁ"],
    "ㅂ": ["", "ㅂ"],
    "ㅅ": ["", "ㅅ"],
    "ㅆ": ["", "ㅆ"],
    "ㅈ": ["", "ㅈ"],
    "ㅊ": ["", "ㅊ"],
    "ㅋ": ["", "ㅋ"],
    "ㅌ": ["", "ㅌ"],
    "ㅍ": ["", "ㅍ"],
    "ㄳ": ["ㄱ", "ㅅ"],
    "ㄵ": ["ㄴ", "ㅈ"],
    "ㄺ": ["ㄹ", "ㄱ"],
    "ㄻ": ["ㄹ", "ㅁ"],
    "ㄼ": ["ㄹ", "ㅂ"],
    "ㄽ": ["ㄹ", "ㅅ"],
    "ㄾ": ["ㄹ", "ㅌ"],
    "ㄿ": ["ㄹ", "ㅍ"],
    "ㅄ": ["ㅂ", "ㅅ"]
};
const neutralFinals = {
    "ㄲ": "ㄱ",
    "ㅋ": "ㄱ",
    "ㄳ": "ㄱ",
    "ㅅ": "ㄷ",
    "ㅆ": "ㄷ",
    "ㅈ": "ㄷ",
    "ㅊ": "ㄷ",
    "ㅌ": "ㄷ",
    "ㅎ": "ㄷ",
    "ㄵ": "ㄴ",
    "ㄶ": "ㄴ",
    "ㄺ": "ㄱ",
    "ㄻ": "ㅁ",
    "ㄼ": "ㄹ",
    "ㄽ": "ㄹ",
    "ㄾ": "ㄹ",
    "ㅀ": "ㄹ",
    "ㄿ": "ㅂ",
    "ㅄ": "ㅂ",
    "ㅍ": "ㅂ"
};
const aspiratedInitials = {
    "ㄱ": "ㅋ",
    "ㄷ": "ㅌ",
    "ㅂ": "ㅍ",
    "ㅈ": "ㅊ"
};
const tenseInitials = {
    "ㄱ": "ㄲ",
    "ㄷ": "ㄸ",
    "ㅂ": "ㅃ",
    "ㅅ": "ㅆ",
    "ㅈ": "ㅉ"
};
const aspiratedFinalsBeforeH = {
    "ㄱ": ["", "ㅋ"],
    "ㄲ": ["", "ㅋ"],
    "ㅋ": ["", "ㅋ"],
    "ㄳ": ["ㄱ", "ㅌ"],
    "ㄷ": ["", "ㅌ"],
    "ㅅ": ["", "ㅌ"],
    "ㅆ": ["", "ㅌ"],
    "ㅈ": ["", "ㅊ"],
    "ㅊ": ["", "ㅊ"],
    "ㅌ": ["", "ㅌ"],
    "ㅂ": ["", "ㅍ"],
    "ㅍ": ["", "ㅍ"],
    "ㄵ": ["ㄴ", "ㅊ"],
    "ㄺ": ["ㄹ", "ㅋ"],
    "ㄼ": ["ㄹ", "ㅍ"],
    "ㄾ": ["ㄹ", "ㅌ"],
    "ㄿ": ["ㄹ", "ㅍ"],
    "ㅄ": ["ㅂ", "ㅌ"]
};
const pronunciationOverrides = {
    "갈등": "갈뜽",
    "결석하다": "결써카다",
    "결재를 받다": "결째를 받따",
    "결재를 하다": "결째를 하다",
    "결정하다": "결쩡하다",
    "갈 수 없어서": "갈 쑤 업써서",
    "갈 수 없다": "갈 쑤 업따",
    "고객의 실수": "고개긔 실쑤",
    "고부간의 갈등이 있다": "고부가늬 갈뜽이 읻따",
    "공연일시": "공여닐씨",
    "국제 전화": "국쩨 전화",
    "구입 일자": "구입 일짜",
    "구직 활동": "구직 활똥",
    "문자": "문짜",
    "문자를 보내다": "문짜를 보내다",
    "문자를 받다": "문짜를 받따",
    "문자를 지우다": "문짜를 지우다",
    "무슨 일": "무슨 닐",
    "무역 회사": "무역 회사",
    "무역 회사에서 번역 일을 하고 있어요": "무역 회사에서 버녁 이를 하고 이써요",
    "번역 일을 하고 있어요": "버녁 이를 하고 이써요",
    "서류를 번역하다": "서류를 버녀카다",
    "번역한 서류": "버녀칸 서류",
    "서류를 출력하다": "서류를 출려카다",
    "서류를 복사하다": "서류를 복싸하다",
    "확인 전화를 하다": "화긴 저놔를 하다",
    "물건을 싣다": "물거늘 싣따",
    "물건을 옮기다": "물거늘 옴기다",
    "물건들을 옮기고 있습니다.": "물건드를 옴기고 읻씀니다",
    "옮기고": "옴기고",
    "옮기고[옴기고]": "옴기고",
    "짐 다 옮겼어요?": "짐 다 옴겨써요",
    "읽고": "일꼬",
    "읽고[일꼬]": "일꼬",
    "책 읽고 있어요.": "책 일꼬 이써요",
    "앉고": "안꼬",
    "앉고[안꼬]": "안꼬",
    "학생들은 앞쪽에 앉고 선생님은 뒤쪽에 앉으세요.": "학생드른 앞쪼게 안꼬 선생니믄 뒤쪼게 안즈세요",
    "기계를 끄다": "기계를 끄다",
    "기계 전원": "기계 저눤",
    "기계 전원을 끄다": "기계 저눠늘 끄다",
    "기계 전원 끄는 거 잊지 마세요.": "기계 저눤 끄는 거 읻찌 마세요",
    "안전모": "안전모",
    "안전모 잊지 말고 꼭 쓰세요.": "안전모 읻찌 말고 꼭 쓰세요",
    "업무 메일 확인했습니다.": "엄무 메일 화긴핻씀니다",
    "직위": "지귀",
    "승진": "승진",
    "입사한 후에": "입싸한 후에",
    "능력을 인정받으면": "능녀글 인정바드면",
    "걷기": "걷끼",
    "걷기[걷끼]": "걷끼",
    "걷는 거": "건는 거",
    "걷는 거[건는 거]": "건는 거",
    "걸었거든요": "거러꺼든요",
    "걸었거든요[거러꺼든요]": "거러꺼든요",
    "하루 종일 걸었거든요.": "하루 종일 거러꺼든요",
    "한마음 걷기 축제": "한마음 걷끼 축쩨",
    "한마음 걷기 축제에 같이 갈래요?": "한마음 걷끼 축쩨에 가치 갈래요",
    "한마음 걷기 축제가 뭐예요?": "한마음 걷끼 축쩨가 뭐예요",
    "외국인 걷기 대회": "외구긴 걷끼 대회",
    "외국인 걷기 대회에 참가할 거예요?": "외구긴 걷끼 대회에 참가할 꺼예요",
    "축제": "축쩨",
    "문화 공연": "문화 공연",
    "체험거리": "체험거리",
    "오시는 길": "오시는 길",
    "서울출입국ㆍ외국인청": "서울추립꾹 외구긴청",
    "게시판": "게시판",
    "주민 모임": "주민 모임",
    "엘리베이터 정기 점검": "엘리베이터 정기 점검",
    "엘리베이터를 이용할 수 없거든요.": "엘리베이터를 이용할 쑤 업꺼든요",
    "단수가 되다": "단수가 되다",
    "동호회": "동호회",
    "회원을 모집하다": "회워늘 모집하다",
    "잃어버린 물건": "이러버린 물건",
    "직원을 뽑다": "지거늘 뽑따",
    "채용 공고": "채용 공고",
    "구인 공고를 봤거든요.": "구인 공고를 봗꺼든요",
    "세계인의 날": "세계이네 날",
    "세계인의 날 행사": "세계이네 날 행사",
    "세계 민속 공연": "세계 민속 공연",
    "사진 공모전": "사진 공모전",
    "참여 가능합니다": "차며 가능함니다",
    "참가하려고 해요.": "참가하려고 해요",
    "잠을 푹 자면 좋겠어요": "자믈 푹 짜면 조케써요",
    "잠을 충분히 자다": "자믈 충분히 자다",
    "잠을 충분히 자면 좋겠어요.": "자믈 충분히 자면 조케써요",
    "좋겠어요": "조케써요",
    "좋겠어요[조케써요]": "조케써요",
    "불규칙한 편이에요": "불규치칸 펴니에요",
    "불규칙한 편이에요[불규치칸 펴니에요]": "불규치칸 펴니에요",
    "하지 않지만": "하지 안치만",
    "하지 않지만[하지 안치만]": "하지 안치만",
    "운동을 꾸준히 하다": "운동을 꾸준히 하다",
    "음식을 골고루 먹다": "음시글 골고루 먹따",
    "식사를 규칙적으로 하다": "식싸를 규칙쩌그로 하다",
    "식사가 불규칙하다": "식싸가 불규치카다",
    "식사가 불규칙한 편이에요.": "식싸가 불규치칸 펴니에요",
    "편식이 심하다": "편시기 심하다",
    "안색이 안 좋다": "안쌔기 안 조타",
    "안색이 안 좋아요": "안쌔기 안 조아요",
    "힘이 없다": "히미 업따",
    "기운이 없다": "기우니 업따",
    "입맛이 없다": "임마시 업따",
    "어지럽다": "어지럽따",
    "얼굴에 뭐가 나다": "얼구레 뭐가 나다",
    "열이 나다": "여리 나다",
    "소화가 안 되다": "소화가 안 되다",
    "소화가 안 돼요?": "소화가 안 돼요",
    "몸살이 나다": "몸싸리 나다",
    "불면증": "불면쯩",
    "불면증에 좋거든요.": "불면쯩에 조커든요",
    "따뜻한 물로 샤워를 해 보세요.": "따뜨탄 물로 샤워를 해 보세요",
    "자기 전에 따뜻한 물로 샤워를 해 보세요.": "자기 저네 따뜨탄 물로 샤워를 해 보세요",
    "며칠 해 보면 괜찮아질 거예요.": "며칠 해 보면 괜차나질 꺼예요",
    "알려 줘서 고마워요.": "알려 줘서 고마워요",
    "당근은 눈에 좋아요": "당그는 누네 조아요",
    "피로 회복에 좋아요": "피로 회보게 조아요",
    "건강에 좋지 않아요": "건강에 조치 아나요",
    "담배를 끊으세요": "담배를 끄느세요",
    "걸어서 갑니다": "거러서 감니다",
    "계단을 이용합시다": "계다늘 이용합씨다",
    "마음이 편해지는 음악": "마으미 편해지는 으막",
    "따뜻한 우유": "따뜨탄 우유",
    "민간요법": "민간요뻡",
    "약손": "약쏜",
    "배를 손으로 쓸어 주다": "배를 소느로 쓰러 주다",
    "기침이 심하다": "기치미 심하다",
    "콩나물국": "콩나물꾹",
    "술이 잘 깹니다": "수리 잘 깸니다",
    "과학적인 근거": "과학쩌긴 근거",
    "의학적으로 입증되다": "의학쩌그로 입쯩되다",
    "이 수업을 신청하는 게 어때요?": "이 수어블 신청하는 게 어때요",
    "문화 센터에는 어떤 수업이 있어요?": "문화 센터에는 어떤 수어비 이써요",
    "요가 수업이 있어요.": "요가 수어비 이써요",
    "천연 비누 만들기": "처년 비누 만들기",
    "저는 천연 비누 만들기 수업을 듣고 싶어요.": "저는 처년 비누 만들기 수어블 듣꼬 시퍼요",
    "노래 교실을 신청하는 게 어때요?": "노래 교시를 신청하는 게 어때요",
    "윗집에 한번 이야기하는 게 어때요?": "윋찌베 한번 이야기하는 게 어때요",
    "건강식품을 먹는 게 어때요?": "건강식푸믈 멍는 게 어때요",
    "한국어능력시험을 보는 게 어때요?": "한구거능녁씨허믈 보는 게 어때요",
    "요리 교실에 가는 게 어때요?": "요리 교시레 가는 게 어때요",
    "인터넷으로 알아보다": "인터네스로 아라보다",
    "회원 가입을 하다": "회워 가이브 하다",
    "수강 신청을 하다": "수강 신청을 하다",
    "수강료를 결제하다": "수강뇨를 결쩨하다",
    "수업을 듣다": "수어블 듣따",
    "재미있어 보이다": "재미이써 보이다",
    "재미있어 보여요": "재미이써 보여요",
    "맛있어 보여요": "마시써 보여요",
    "피곤해 보여요": "피곤해 보여요",
    "좋아 보여요": "조아 보여요",
    "행복해": "행보캐",
    "행복해[행보캐]": "행보캐",
    "어학 자격증": "어학 짜격쯩",
    "어학 자격증[어학 짜격쯩]": "어학 짜격쯩",
    "천연 비누": "처년 비누",
    "천연 비누[처년 비누]": "처년 비누",
    "선착순 모집": "선착쑨 모집",
    "초급반": "초급빤",
    "주민 센터 문화 강좌 수강생 모집": "주민 센터 문화 강좌 수강생 모집",
    "방문 접수 또는 이메일 접수": "방문 접쑤 또는 이메일 접쑤",
    "교재비 1만 원, 재료비 별도": "교재비 일마 눤 재료비 별또",
    "매달 마지막 주 수요일": "매달 마지막 쭈 수요일",
    "문화가 있는 날": "문화가 인는 날",
    "할인된 가격이나 무료로 즐길 수 있습니다.": "하린된 가겨기나 무료로 즐길 쑤 읻씀니다",
    "특색 있는 프로그램": "특쌕 인는 프로그램",
    "문화 시설을 이용합니다.": "문화 시서슬 이용함니다",
    "늦지 않게": "늗찌 안케",
    "늦지 않게 도착하다": "늗찌 안케 도차카다",
    "막히니까": "마키니까",
    "길이 많이 막히니까 좀 기다려 줄래요?": "기리 마니 마키니까 좀 기다려 줄래요",
    "괜찮지만": "괜찬치만",
    "녹차도 괜찮지만 세제나 휴지는 어때요?": "녹차도 괜찬치만 세제나 휴지는 어때요",
    "집들이": "집뜨리",
    "집들이니까": "집뜨리니까",
    "가져갈게요": "가져갈께요",
    "세제나 휴지를 가져갈게요": "세제나 휴지를 가져갈께요",
    "합격하면": "합껴카면",
    "시험에 합격하면": "시허메 합껴카면",
    "시험에 합격하면 3단계를 공부할 거예요.": "시허메 합껴카면 삼단계를 공부할 거예요",
    "듣기로 했어요": "듣끼로 해써요",
    "한국어 수업을 듣기로 했어요": "한구거 수어블 듣끼로 해써요",
    "9월부터 한국어 수업을 듣기로 했어요": "구월부터 한구거 수어블 듣끼로 해써요",
    "아쉽네요": "아쉼네요",
    "수업을 계속 들을 거예요": "수어블 계속 드를 거예요",
    "시간이 맞지 않다": "시가니 맏찌 안타",
    "육교": "육꼬",
    "육교를 건너다": "육꼬를 건너다",
    "육교를 지나다": "육꼬를 지나다",
    "육교를 지나면 서점이 있어요": "육꼬를 지나면 서저미 이써요",
    "있는데": "인는데",
    "1번 출구 앞에 있는데 언제 와요?": "일번 출구 아페 인는데 언제 와요",
    "저 지금 육교 앞에 있는데 어떻게 가요?": "저 지금 육꼬 아페 인는데 어떠케 가요",
    "똑바로 50m쯤 오세요": "똑빠로 오십 미터쯤 오세요",
    "시청 옆에 있는데 가까워요": "시청 여페 인는데 가까워요",
    "횡단보도": "횡단보도",
    "버스 정류장": "버스 정뉴장",
    "보름달": "보름딸",
    "보름달을 보다": "보름따를 보다",
    "보름달을 보면서 소원을 빌어요": "보름따를 보면서 소워늘 비러요",
    "보름달을 보면서 소원을 빌었어요": "보름따를 보면서 소워늘 비러써요",
    "소원을 빌다": "소워늘 빌다",
    "소원을 빌었어요": "소워늘 비러써요",
    "짧게": "짤께",
    "짧게 잘라 주세요": "짤께 잘라 주세요",
    "날씨가 더우니까 짧게 잘라 주세요": "날씨가 더우니까 짤께 잘라 주세요",
    "밝았지요": "발갇찌요",
    "어젯밤 보름달이 참 밝았지요? 봤어요?": "어젣빰 보름따리 참 발갇찌요 봐써요",
    "끓여서": "끄려서",
    "떡국": "떡꾹",
    "떡국을 끓여서 먹어요": "떡꾸글 끄려서 머거요",
    "윷놀이": "윤노리",
    "식당": "식땅",
    "근처에 자주 가는 식당이 있어요": "근처에 자주 가는 식땅이 이써요",
    "국물이 시원하다": "궁무리 시원하다",
    "밑반찬": "믿빤찬",
    "밑반찬이 많이 나오다": "믿빤차니 마니 나오다",
    "줄을 서다": "주를 서다",
    "먹자": "먹짜",
    "매울 것 같아요": "매울 껃 가타요",
    "아주 매울 것 같아요": "아주 매울 껃 가타요",
    "없을 것 같아요": "업쓸 껃 가타요",
    "자리가 없을 것 같아요": "자리가 업쓸 껃 가타요",
    "못 먹을 것 같아요": "몬 머글 껃 가타요",
    "다 못 먹을 것 같아요": "다 몬 머글 껃 가타요",
    "너무 많아서 다 못 먹을 것 같아요.": "너무 마나서 다 몬 머글 껃 가타요",
    "맛있는 음식": "마딘는 음식",
    "맛있는 음식을 먹다": "마딘는 음시글 먹따",
    "맛있는 음식을 먹을 때 행복해요": "마딘는 음시글 머글 때 행보캐요",
    "먹을 때": "머글 때",
    "놓지": "노치",
    "발생하다": "발쌩하다",
    "발생한 고장": "발쌩한 고장",
    "발전 가능성": "발쩐 가능성",
    "보낼 수 있다": "보낼 쑤 읻따",
    "보낼 수 있어요": "보낼 쑤 이써요",
    "방 두 개인 월세 빌라": "방 두 개인 월쎄 빌라",
    "사고가 발생하다": "사고가 발쌩하다",
    "솔직하다": "솔찌카다",
    "수입이 일정하지 않다": "수이비 일쩡하지 안타",
    "실수가 없다": "실쑤가 업따",
    "실수": "실쑤",
    "실수를 자주 하는 편이에요": "실쑤를 자주 하는 펴니에요",
    "실수를 자주 하다": "실쑤를 자주 하다",
    "실수를 자주 하는 편이다": "실쑤를 자주 하는 펴니다",
    "실수를 하다": "실쑤를 하다",
    "실시하다": "실씨하다",
    "실제 매장": "실쩨 매장",
    "실제 모임": "실쩨 모임",
    "물건값": "물건깝",
    "물건값을 잘못 알아들었어요": "물건깝쓸 잘몯 아라드러써요",
    "잘못 알아듣다": "잘몯 아라듣따",
    "잘못 알아들었어요": "잘몯 아라드러써요",
    "택시 기사님이 제 말을 잘못 알아들었어요": "택씨 기사니미 제 마를 잘몯 아라드러써요",
    "잃어버렸어요": "이러버려써요",
    "지갑을 잃어버렸어요": "지갑쓸 이러버려써요",
    "지갑을 잃어버린 적이 있어요": "지갑쓸 이러버린 저기 이써요",
    "얇은 편이에요": "알븐 펴니에요",
    "이 옷은 얇은 편이에요": "이 오슨 알븐 펴니에요",
    "노약자석에 앉다": "노약짜서게 안따",
    "노약자석에 앉았어요": "노약짜서게 안자써요",
    "잔액": "자낵",
    "잔액이 부족합니다": "자내기 부족캄니다",
    "교통 카드 잔액이 부족해서": "교통 카드 자내기 부족캐서",
    "잔액의 뜻을 몰라서 당황했습니다": "자내긔 뜨슬 몰라서 당황핻씀니다",
    "열대야": "열때야",
    "열쇠": "열쐬",
    "어떻게": "어떠케",
    "어떻게 오셨어요?": "어떠케 오셔써요",
    "우울증": "우울쯩",
    "월세": "월쎄",
    "의견을 솔직하게 말하다": "의겨늘 솔찌카게 말하다",
    "이물질": "이물찔",
    "일상": "일쌍",
    "일상생활": "일쌍생활",
    "일당": "일땅",
    "일시적": "일씨적",
    "일시적으로": "일씨저그로",
    "일주일에 서너 번": "일쭈이레 서너 번",
    "일정 기간": "일쩡 기간",
    "작업 일지": "자겁 일찌",
    "전화번호": "전화번호",
    "즐겁겠네요": "즐겁껜네요",
    "좋겠네요": "조켄네요",
    "좋지요": "조치요",
    "통화할 수 있다": "통화할 쑤 읻따",
    "통화할 수 있어요": "통화할 쑤 이써요",
    "택배": "택빼",
    "택배를 보내다": "택빼를 보내다",
    "친구한테 택배를 보내요": "친구한테 택빼를 보내요",
    "우편 번호": "우편 버노",
    "우편 번호가 뭐예요?": "우편 버노가 뭐예요",
    "우편 번호를 쓰다": "우편 버노를 쓰다",
    "옷하고": "오타고",
    "옷하고 화장품요.": "오타고 화장품요",
    "이엠에스(EMS)를 보내려고 해요.": "이엠에스를 보내려고 해요",
    "이엠에스(EMS)를 보내고 싶은데요.": "이엠에스를 보내고 시픈데요",
    "베트남에 소포를 보내려고 하는데요.": "베트나메 소포를 보내려고 하는데요",
    "어떻게 해야 돼요?": "어떠케 해야 돼요",
    "먼저 이 신청서를 쓰셔야 돼요.": "먼저 이 신청서를 쓰셔야 돼요",
    "통장을 만들려고 하는데요. 어떻게 해야 돼요?": "통장을 만들려고 하는데요 어떠케 해야 돼요",
    "공과금을 납부하다": "공과그믈 납뿌하다",
    "금융 업무": "그뮹 엄무",
    "금융 업무 시간": "그뮹 엄무 시간",
    "우편 업무": "우편 엄무",
    "우편 업무 시간": "우편 엄무 시간",
    "은행 업무": "은행 엄무",
    "업무 시간": "엄무 시간",
    "입금하다": "입끔하다",
    "도로명 주소": "도로명 주소",
    "목동동로": "목똥동노",
    "외국인 등록증": "외구긴 등록쯩",
    "외국인 등록증을 신청해요.": "외구긴 등록쯩을 신청해요",
    "외국인 등록증을 발급받으려면 여권이 필요해요.": "외구긴 등록쯩을 발급빠드려면 여꿔니 피료해요",
    "외국인 등록증을 재발급 받고 싶은데요.": "외구긴 등록쯩을 재발급 빧꼬 시픈데요",
    "외국인 등록증을 재발급 받으려면 사진과 여권이 필요해요.": "외구긴 등록쯩을 재발급 빠드려면 사진과 여꿔니 피료해요",
    "신분증": "신분쯩",
    "신분증은 가져오셨어요?": "신분쯩은 가져오셔써요",
    "사진과 신분증은 가져오셨어요?": "사진과 신분쯩은 가져오셔써요",
    "비자 연장": "비자 연장",
    "비자 연장 신청": "비자 연장 신청",
    "비자 연장 신청을 하려면 어떻게 해야 돼요?": "비자 연장 신청을 하려면 어떠케 해야 돼요",
    "출입국ㆍ외국인청": "추립꾹 외구긴청",
    "출입국ㆍ외국인사무소": "추립꾹 외구긴사무소",
    "체류 기간": "체류 기간",
    "체류 기간이 얼마나 연장돼요?": "체류 기가니 얼마나 연장돼요",
    "체류 기간 연장": "체류 기간 연장",
    "체류 자격 변경": "체류 자격 변경",
    "등록증 재발급": "등록쯩 재발급",
    "재발급 받다": "재발급 받따",
    "발급받다": "발급빧따",
    "발급받으려면": "발급빠드려면",
    "방문 예약": "방문 예약",
    "방문 예약을 해야 돼요.": "방문 예야글 해야 돼요",
    "수수료": "수수료",
    "수수료는 6만 원입니다.": "수수료는 육마눠님니다",
    "최대 2년까지 연장됩니다.": "최대 이년까지 연장됨니다",
    "하이코리아": "하이코리아",
    "하이코리아에 접속해야 합니다.": "하이코리아에 접쏘캐야 함니다",
    "인터넷 사전 예약": "인터넷 사전 예약",
    "통합신청서": "통합신청서",
    "건강 검진": "건강 검진",
    "예방 주사": "예방 주사",
    "주소 변경 신고": "주소 변경 신고",
    "출장 서비스": "출짱 서비스",
    "출장비": "출짱비",
    "취미 활동": "취미 활똥",
    "확정 일자": "확쩡 일짜",
    "현실적이다": "현실쩌기다",
    "활동 공간": "활똥 공간"
};
const boundNounTensingSyllables = new Set(["수", "게", "거", "걷", "곧"]);

function decomposeHangul(char) {
    const code = char.charCodeAt(0);
    if (code < hangulBase || code > hangulLast) return null;
    const syllableIndex = code - hangulBase;
    const finalIndex = syllableIndex % 28;
    const medialIndex = Math.floor(syllableIndex / 28) % 21;
    const initialIndex = Math.floor(syllableIndex / 588);

    return {
        initial: hangulInitials[initialIndex],
        medial: hangulMedials[medialIndex],
        final: hangulFinals[finalIndex]
    };
}

function composeHangul({ initial, medial, final = "" }) {
    const initialIndex = hangulInitialIndex[initial];
    const medialIndex = hangulMedials.indexOf(medial);
    const finalIndex = hangulFinalIndex[final] ?? 0;
    if (initialIndex === undefined || medialIndex < 0) return "";

    return String.fromCharCode(hangulBase + ((initialIndex * 21 + medialIndex) * 28) + finalIndex);
}

function pronounceHangulRun(run) {
    const syllables = Array.from(run).map(decomposeHangul).filter(Boolean);

    for (let index = 0; index < syllables.length - 1; index += 1) {
        const current = syllables[index];
        const next = syllables[index + 1];

        if (current.final === "ㅎ" && aspiratedInitials[next.initial]) {
            current.final = "";
            next.initial = aspiratedInitials[next.initial];
            continue;
        }

        if ((current.final === "ㄶ" || current.final === "ㅀ") && aspiratedInitials[next.initial]) {
            current.final = current.final === "ㄶ" ? "ㄴ" : "ㄹ";
            next.initial = aspiratedInitials[next.initial];
            continue;
        }

        if (next.initial === "ㅎ") {
            const aspirated = aspiratedFinalsBeforeH[current.final];
            if (aspirated) {
                current.final = aspirated[0];
                next.initial = aspirated[1];
            }
        }
    }

    for (let index = 0; index < syllables.length - 1; index += 1) {
        const current = syllables[index];
        const next = syllables[index + 1];
        if (!current.final || next.initial !== "ㅇ") continue;

        if ((current.final === "ㄷ" || current.final === "ㅌ") && next.medial === "ㅣ") {
            next.initial = current.final === "ㄷ" ? "ㅈ" : "ㅊ";
            current.final = "";
            continue;
        }

        if (current.final === "ㅇ") continue;
        if (current.final === "ㅎ") {
            current.final = "";
            continue;
        }
        if (current.final === "ㄶ" || current.final === "ㅀ") {
            current.final = current.final === "ㄶ" ? "ㄴ" : "ㄹ";
            continue;
        }

        const moved = liaisonFinals[current.final];
        if (!moved) continue;
        current.final = moved[0];
        next.initial = moved[1];
    }

    for (let index = 0; index < syllables.length - 1; index += 1) {
        const current = syllables[index];
        const next = syllables[index + 1];

        if (current.final === "ㄺ" && next.initial === "ㄱ") {
            current.final = "ㄹ";
            next.initial = "ㄲ";
            continue;
        }

        if ((current.final === "ㄼ" || current.final === "ㄾ") && tenseInitials[next.initial]) {
            current.final = "ㄹ";
            next.initial = tenseInitials[next.initial];
        }
    }

    syllables.forEach(syllable => {
        syllable.final = neutralFinals[syllable.final] || syllable.final;
    });

    for (let index = 0; index < syllables.length - 1; index += 1) {
        const current = syllables[index];
        const next = syllables[index + 1];

        if (["ㄱ", "ㄷ", "ㅂ"].includes(current.final) && ["ㄴ", "ㅁ"].includes(next.initial)) {
            current.final = { "ㄱ": "ㅇ", "ㄷ": "ㄴ", "ㅂ": "ㅁ" }[current.final];
        }

        if (["ㄱ", "ㄷ", "ㅂ"].includes(current.final) && next.initial === "ㄹ") {
            current.final = { "ㄱ": "ㅇ", "ㄷ": "ㄴ", "ㅂ": "ㅁ" }[current.final];
            next.initial = "ㄴ";
        }

        if (["ㅁ", "ㅇ"].includes(current.final) && next.initial === "ㄹ") {
            next.initial = "ㄴ";
        }

        if (current.final === "ㄴ" && next.initial === "ㄹ") {
            current.final = "ㄹ";
            next.initial = "ㄹ";
        } else if (current.final === "ㄹ" && next.initial === "ㄴ") {
            next.initial = "ㄹ";
        }

        if (["ㄱ", "ㄷ", "ㅂ"].includes(current.final) && tenseInitials[next.initial]) {
            next.initial = tenseInitials[next.initial];
        }
    }

    return syllables.map(composeHangul).join("");
}

function tenseSyllableInitial(char) {
    const syllable = decomposeHangul(char);
    if (!syllable || !tenseInitials[syllable.initial]) return char;

    return composeHangul({ ...syllable, initial: tenseInitials[syllable.initial] });
}

function applyPhrasePronunciationAdjustments(value) {
    const chars = Array.from(value);

    for (let index = 1; index < chars.length - 1; index += 1) {
        if (chars[index] !== " ") continue;

        const previous = decomposeHangul(chars[index - 1]);
        const nextChar = chars[index + 1];
        if (chars[index - 1] === "을" || chars[index - 1] === "를") continue;
        if (previous?.final !== "ㄹ" || !boundNounTensingSyllables.has(nextChar)) continue;

        chars[index + 1] = tenseSyllableInitial(nextChar);
    }

    return chars.join("");
}

function koreanPronunciation(value) {
    const normalized = normalizeKoreanSpeechText(value);
    if (!hasHangul(normalized)) return "";
    if (config.pronunciationOverrides?.[normalized]) return config.pronunciationOverrides[normalized];
    if (pronunciationOverrides[normalized]) return pronunciationOverrides[normalized];

    return applyPhrasePronunciationAdjustments(normalized.replace(/[가-힣]+/g, pronounceHangulRun));
}

let speechRunId = 0;
let preferredKoreanVoice = null;
const preferredListeningVoices = {};
let koreanVoicePromise = null;

function scoreKoreanVoice(voice) {
    const name = voice.name.toLowerCase();
    const lang = voice.lang?.toLowerCase() || "";
    const femaleHints = ["sora", "yuna", "sunhi", "heami", "nara", "kyuri", "jimin", "ji-min", "female", "여성"];
    const naturalHints = ["natural", "neural", "premium", "enhanced", "online", "google", "microsoft"];
    const roboticHints = ["compact", "male", "hyunsu", "injoon", "hoon", "minjun", "남성"];
    const femaleScore = femaleHints.reduce((score, hint, index) => score + (name.includes(hint) ? 120 - index : 0), 0);
    const naturalScore = naturalHints.reduce((score, hint, index) => score + (name.includes(hint) ? 70 - index : 0), 0);
    const roboticPenalty = roboticHints.reduce((score, hint) => score + (name.includes(hint) ? 80 : 0), 0);
    const koKrScore = lang === "ko-kr" ? 30 : 0;
    return femaleScore + naturalScore + koKrScore - roboticPenalty;
}

function pickKoreanVoice() {
    if (!("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices?.() || [];
    const koreanVoices = voices.filter(voice => voice.lang?.toLowerCase().startsWith("ko"));
    if (!koreanVoices.length) return null;

    const rankedVoices = koreanVoices
        .map(voice => ({ voice, score: scoreKoreanVoice(voice) }))
        .sort((a, b) => b.score - a.score);
    preferredKoreanVoice = rankedVoices[0].score > 35
        ? rankedVoices[0].voice
        : koreanVoices[1] || rankedVoices[0].voice;
    return preferredKoreanVoice;
}

function scoreListeningVoice(voice, lang) {
    const name = voice.name.toLowerCase();
    const voiceLang = voice.lang?.toLowerCase() || "";
    const langPrefix = lang.toLowerCase().split("-")[0];
    const exactLangScore = voiceLang === lang.toLowerCase() ? 90 : 0;
    const prefixLangScore = voiceLang.startsWith(langPrefix) ? 45 : 0;
    const naturalHints = ["natural", "neural", "premium", "enhanced", "online", "google", "microsoft", "siri"];
    const softerHints = ["female", "woman", "sora", "yuna", "tingting", "mei-jia", "meijia", "sin-ji", "samantha", "zira", "aria", "jenny", "xiaoxiao", "xiaoyi", "xiaobei", "晓晓", "晓伊"];
    const roboticHints = ["compact", "male", "robot", "legacy"];
    const naturalScore = naturalHints.reduce((score, hint, index) => score + (name.includes(hint) ? 70 - index : 0), 0);
    const softerScore = softerHints.reduce((score, hint, index) => score + (name.includes(hint) ? 34 - index : 0), 0);
    const roboticPenalty = roboticHints.reduce((score, hint) => score + (name.includes(hint) ? 55 : 0), 0);

    return exactLangScore + prefixLangScore + naturalScore + softerScore - roboticPenalty;
}

function pickListeningVoice(lang) {
    if (!("speechSynthesis" in window) || !lang) return null;
    if (lang === "ko-KR") return preferredKoreanVoice || pickKoreanVoice();
    if (preferredListeningVoices[lang]) return preferredListeningVoices[lang];

    const voices = window.speechSynthesis.getVoices?.() || [];
    const langPrefix = lang.toLowerCase().split("-")[0];
    const matchingVoices = voices.filter(voice => {
        const voiceLang = voice.lang?.toLowerCase() || "";
        return voiceLang === lang.toLowerCase() || voiceLang.startsWith(langPrefix);
    });
    if (!matchingVoices.length) return null;

    preferredListeningVoices[lang] = matchingVoices
        .map(voice => ({ voice, score: scoreListeningVoice(voice, lang) }))
        .sort((a, b) => b.score - a.score)[0].voice;
    return preferredListeningVoices[lang];
}

function waitForKoreanVoice() {
    if (!("speechSynthesis" in window)) return Promise.resolve(null);
    const readyVoice = preferredKoreanVoice || pickKoreanVoice();
    if (readyVoice) return Promise.resolve(readyVoice);
    if (koreanVoicePromise) return koreanVoicePromise;

    koreanVoicePromise = new Promise(resolve => {
        const finish = () => {
            const voice = pickKoreanVoice();
            if (!voice) return;
            cleanup();
            resolve(voice);
        };
        const cleanup = () => {
            window.clearTimeout(timeoutId);
            window.speechSynthesis.removeEventListener?.("voiceschanged", finish);
        };
        const timeoutId = window.setTimeout(() => {
            cleanup();
            resolve(pickKoreanVoice());
        }, 1600);

        window.speechSynthesis.addEventListener?.("voiceschanged", finish);
        window.speechSynthesis.getVoices?.();
    }).finally(() => {
        koreanVoicePromise = null;
    });

    return koreanVoicePromise;
}

function splitKoreanSpeech(text, mode) {
    const normalized = String(text || "").replace(/\s+/g, " ").trim();
    if (!normalized || mode === "word" || normalized.length < 24) return [normalized].filter(Boolean);

    const protectedText = normalized.replace(/([.?!])\s+/g, "$1|");
    const chunks = protectedText.split("|").flatMap(part => {
        if (part.length < 30) return [part];
        return part
            .replace(/(는데|은데|인데|지만|면서|으면|고)\s+/g, "$1|")
            .split("|");
    });

    return chunks.map(chunk => chunk.trim()).filter(Boolean);
}

function clearNativeSpeechPreview() {
    nativeSpeechPreviewButton?.classList.remove("speaking");
    nativeSpeechPreviewButton = null;
    nativeSpeechPreviewSessionId = "";
}

function maybeOfferNativeVoiceSetup(error) {
    if (!String(error || "").includes("TTS_VOICE_UNAVAILABLE") || nativeVoiceSetupPromptOpen) return;
    nativeVoiceSetupPromptOpen = true;
    window.setTimeout(() => {
        nativeListeningDriver?.promptVoiceSetup(uiLocale)
            .catch(setupError => console.debug?.("Unable to open voice setup", setupError))
            .finally(() => { nativeVoiceSetupPromptOpen = false; });
    }, 0);
}

async function startNativeSpeechPreview(text, mode, button) {
    const lesson = activeLoadedLesson() || lessons.find(item => item.id === activeLessonId);
    if (!lesson) throw new Error("No active lesson is available");

    const payload = window.lessonGuideNativeListening.buildPreviewPayload({
        sessionId: `preview:${Date.now().toString(36)}:${speechRunId}`,
        level,
        lesson,
        lessonTranslation: lessonTitleTranslation(lesson),
        translationLocale: listeningLanguage(),
        text,
        mode
    });
    nativeSpeechPreviewSessionId = payload.sessionId;
    nativeSpeechPreviewButton = button || null;
    await nativeListeningDriver.loadQueue(payload);
    await nativeListeningDriver.play(0);
}

async function speakKorean(text, options = {}) {
    if (!text) return;
    const mode = options.mode || "word";
    const normalizedText = normalizeKoreanSpeechText(text);
    if (!hasHangul(normalizedText)) return;

    if (nativeListeningDriver) {
        try {
            nativeListeningReady = nativeListeningReady || await nativeListeningDriver.connect();
        } catch (_) {
            nativeListeningReady = false;
        }
    }

    stopListening({ render: true, notifyNative: !nativeListeningReady });
    const runId = ++speechRunId;
    document.querySelectorAll(".speak-btn.speaking").forEach(button => button.classList.remove("speaking"));
    options.button?.classList.add("speaking");

    if (nativeListeningReady) {
        try {
            await startNativeSpeechPreview(normalizedText, mode, options.button);
            return;
        } catch (error) {
            clearNativeSpeechPreview();
            nativeListeningReady = false;
            nativeListeningDriver.stop("preview").catch(() => {});
            console.debug?.("Native speech preview unavailable", error);
        }
    }

    if (!("speechSynthesis" in window)) {
        options.button?.classList.remove("speaking");
        return;
    }
    window.speechSynthesis.cancel();

    const voice = await waitForKoreanVoice();
    if (runId !== speechRunId) {
        options.button?.classList.remove("speaking");
        return;
    }
    if (!voice) {
        options.button?.classList.remove("speaking");
        return;
    }

    const chunks = splitKoreanSpeech(normalizedText, mode);

    const speakChunk = index => {
        if (runId !== speechRunId || index >= chunks.length) {
            options.button?.classList.remove("speaking");
            return;
        }

        const utterance = new SpeechSynthesisUtterance(chunks[index]);
        utterance.lang = "ko-KR";
        utterance.rate = 1;
        utterance.pitch = mode === "sentence" ? 0.92 : 0.98;
        utterance.volume = 1;
        utterance.voice = voice;
        utterance.onend = () => window.setTimeout(() => speakChunk(index + 1), mode === "sentence" ? 90 : 0);
        utterance.onerror = () => options.button?.classList.remove("speaking");
        window.speechSynthesis.speak(utterance);
    };

    speakChunk(0);
}

function clearListeningHighlight() {
    document.querySelectorAll(".is-listening-current").forEach(element => {
        element.classList.remove("is-listening-current");
    });
}

function currentListeningItem() {
    return listeningState.queue[listeningState.index] || null;
}

function paintFloatingListeningControls() {
    const visible = floatingListeningVisible;
    floatingListeningControls.hidden = !visible;
    mainContent.classList.toggle("has-floating-listening-controls", visible);
    if (!visible) {
        if (floatingListeningControls.firstChild) floatingListeningControls.innerHTML = "";
        return;
    }

    const isPlaying = listeningState.status !== "paused";
    const total = listeningState.queue.length;
    const atStart = listeningState.index <= 0;
    const atEnd = listeningState.index >= total - 1;
    if (!floatingListeningControls.querySelector(".floating-listening-controls__bar")) {
        floatingListeningControls.innerHTML = `
        <div class="floating-listening-controls__bar" role="group" aria-label="${escapeHtml(t("listeningTitle"))}">
            <button class="floating-listening-btn" type="button" data-listening-action="previous"></button>
            <button class="floating-listening-btn is-primary" type="button"></button>
            <button class="floating-listening-btn" type="button" data-listening-action="next"></button>
        </div>
        `;
        floatingListeningControls.querySelector('[data-listening-action="previous"]').innerHTML = previousIcon();
        floatingListeningControls.querySelector('[data-listening-action="next"]').innerHTML = nextIcon();
    }

    const bar = floatingListeningControls.querySelector(".floating-listening-controls__bar");
    const previous = bar.querySelector('[data-listening-action="previous"]');
    const primary = bar.querySelector(".is-primary");
    const next = bar.querySelector('[data-listening-action="next"]');
    const primaryAction = isPlaying ? "pause" : "resume";
    const primaryLabel = isPlaying ? t("listeningPause") : t("listeningResume");

    bar.setAttribute("aria-label", t("listeningTitle"));
    previous.disabled = atStart;
    previous.setAttribute("aria-label", t("listeningPrevious"));
    previous.title = t("listeningPrevious");
    next.disabled = atEnd;
    next.setAttribute("aria-label", t("listeningNext"));
    next.title = t("listeningNext");
    primary.setAttribute("aria-label", primaryLabel);
    primary.title = primaryLabel;
    if (primary.dataset.listeningAction !== primaryAction) {
        primary.dataset.listeningAction = primaryAction;
        primary.innerHTML = isPlaying ? pauseIcon() : playIcon();
    }
}

function renderFloatingListeningControls() {
    const lesson = activeLoadedLesson();
    const lessonMatches = Boolean(lesson && lesson.id === listeningState.lessonId);
    const shouldShow = listeningFloatingApi.shouldShow({
        status: listeningState.status,
        playerVisible: listeningPlayerVisible,
        lessonMatches
    });
    const immediate = listeningPlayerVisible
        || !lessonMatches
        || ["idle", "ended"].includes(listeningState.status);
    floatingListeningDisplayLatch.update(shouldShow, { immediate });
    paintFloatingListeningControls();
}

function setListeningPlayerVisible(visible) {
    if (listeningPlayerVisible === visible) return;
    listeningPlayerVisible = visible;
    renderFloatingListeningControls();
}

function setListeningPlayerVisibilityRatio(ratio) {
    setListeningPlayerVisible(listeningFloatingApi.resolvePlayerVisible(ratio, listeningPlayerVisible));
}

function observeListeningPlayer() {
    listeningPlayerObservationRunId += 1;
    listeningPlayerObserver?.disconnect();
    listeningPlayerObserver = null;

    const player = mainContent.querySelector("[data-listening-player]");
    if (!player) {
        listeningPlayerVisible = true;
        renderFloatingListeningControls();
        return;
    }

    listeningPlayerVisible = listeningFloatingApi.resolvePlayerVisible(listeningFloatingApi.visibleRatio(
        player.getBoundingClientRect(),
        mainContent.getBoundingClientRect()
    ), listeningPlayerVisible);
    renderFloatingListeningControls();

    if (!("IntersectionObserver" in window)) return;
    listeningPlayerObserver = new IntersectionObserver(entries => {
        const entry = entries[0];
        setListeningPlayerVisibilityRatio(entry?.isIntersecting ? entry.intersectionRatio : 0);
    }, {
        root: mainContent,
        threshold: [0, listeningFloatingApi.playerExitRatio, listeningFloatingApi.playerEnterRatio, 1]
    });
    listeningPlayerObserver.observe(player);
}

function observeListeningPlayerAfterLayout() {
    const runId = ++listeningPlayerObservationRunId;
    listeningPlayerObserver?.disconnect();
    listeningPlayerObserver = null;
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            if (runId !== listeningPlayerObservationRunId) return;
            observeListeningPlayer();
        });
    });
}

function applyListeningHighlight() {
    clearListeningHighlight();
    if (!listeningState.currentRef || ["idle", "ended"].includes(listeningState.status)) return;

    const shouldFollow = listeningFollowApi.shouldFollow({
        status: listeningState.status,
        currentRef: listeningState.currentRef,
        lastFollowedRef: listeningState.lastFollowedRef
    });
    const targetTab = listeningFollowApi.tabForItem(currentListeningItem());
    const lesson = activeLoadedLesson();
    if (shouldFollow && targetTab && targetTab !== activeTab && lesson?.id === listeningState.lessonId) {
        activeTab = targetTab;
        renderLoadedLesson(lesson, "preserve");
        return;
    }

    const targets = Array.from(document.querySelectorAll("[data-listening-ref]"))
        .filter(element => element.dataset.listeningRef === listeningState.currentRef);
    targets.forEach(element => element.classList.add("is-listening-current"));

    const target = targets[0];
    if (!shouldFollow || !target) return;
    listeningState.lastFollowedRef = listeningState.currentRef;
    window.requestAnimationFrame(() => {
        const plan = listeningFollowApi.scrollPlan(
            target.getBoundingClientRect(),
            mainContent.getBoundingClientRect()
        );
        if (!plan.shouldScroll) return;
        target.scrollIntoView({ behavior: plan.behavior, block: "center", inline: "nearest" });
    });
}

function activeLoadedLesson() {
    return lessonDataLoader.getCached(activeLessonId);
}

function refreshListeningPlayer() {
    const lesson = activeLoadedLesson();
    const player = document.querySelector("[data-listening-player]");
    if (!lesson || !player) return;

    const template = document.createElement("template");
    template.innerHTML = renderListeningPlayer(lesson).trim();
    const nextPlayer = template.content.firstElementChild;
    player.className = nextPlayer.className;
    player.innerHTML = nextPlayer.innerHTML;
    renderFloatingListeningControls();
    applyListeningHighlight();
}

function updateSleepTimerDisplay(endsAt = listeningState.sleepTimerEndsAt) {
    document.querySelectorAll("[data-sleep-timer-countdown]").forEach(element => {
        const activeEndsAt = sleepTimerApi.normalizeEndsAt(endsAt);
        element.textContent = activeEndsAt ? sleepTimerApi.formatRemaining(activeEndsAt) : "";
        element.hidden = !activeEndsAt;
    });
}

function cancelActiveSleepTimer(options = {}) {
    const { notifyNative = true } = options;
    listeningState.sleepTimerEndsAt = 0;
    sleepTimerScheduler.cancel();
    if (notifyNative && nativeListeningIsActive()) {
        nativeListeningDriver.cancelSleepTimer()
            .catch(error => console.debug?.("Native sleep timer cancellation failed", error));
    }
}

function startSleepTimerForPlayback() {
    const minutes = sleepTimerApi.normalizeDuration(listeningState.sleepTimerMinutes);
    if (!minutes) {
        cancelActiveSleepTimer();
        return;
    }

    const endsAt = Date.now() + minutes * 60 * 1000;
    listeningState.sleepTimerEndsAt = endsAt;
    listeningState.endReason = "";
    sleepTimerScheduler.setEndsAt(endsAt);
    if (nativeListeningIsActive()) {
        nativeListeningDriver.setSleepTimer(endsAt)
            .catch(error => console.debug?.("Native sleep timer setup failed", error));
    }
    refreshListeningPlayer();
}

function handleSleepTimerExpired() {
    if (!listeningState.sleepTimerEndsAt) return;
    listeningState.sleepTimerEndsAt = 0;
    listeningState.endReason = "timer";
    listeningState.status = "ended";
    listeningState.currentRef = "";
    listeningState.lastFollowedRef = "";
    speechRunId += 1;
    releaseListeningWakeLock();
    clearListeningHighlight();

    if (nativeListeningIsActive()) {
        nativeListeningDriver.stop("timer")
            .catch(error => console.debug?.("Native sleep timer stop failed", error));
    } else if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
    refreshListeningPlayer();
}

function setListeningError(message) {
    listeningState.status = "idle";
    listeningState.error = message;
    listeningState.currentRef = "";
    listeningState.lastFollowedRef = "";
    cancelActiveSleepTimer();
    releaseListeningWakeLock();
    refreshListeningPlayer();
}

function nativeListeningIsActive() {
    return listeningState.engine === "native" && nativeListeningReady;
}

function applyNativeListeningState(state) {
    nativeListeningReady = true;
    const isPreviewState = window.lessonGuideNativeListening.isPreviewSession(state.sessionId);
    if (nativeSpeechPreviewSessionId && state.sessionId && !isPreviewState) return;
    if (isPreviewState) {
        if (state.sessionId !== nativeSpeechPreviewSessionId) {
            nativeListeningDriver.stop("preview").catch(() => {});
            return;
        }
        const active = ["preparing", "playing", "paused"].includes(state.status);
        nativeSpeechPreviewButton?.classList.toggle("speaking", active);
        if (!active) {
            maybeOfferNativeVoiceSetup(state.error);
            clearNativeSpeechPreview();
            nativeListeningDriver.stop("preview").catch(() => {});
        }
        return;
    }
    clearNativeSpeechPreview();
    listeningState.engine = "native";
    listeningState.sessionId = state.sessionId || listeningState.sessionId;
    listeningState.status = state.status;
    listeningState.lessonId = state.lessonId;
    listeningState.index = state.index;
    listeningState.currentRef = state.ref;
    listeningState.error = state.error || "";
    if (state.status === "error") maybeOfferNativeVoiceSetup(state.error);
    listeningState.restartOnResume = false;
    listeningState.endReason = state.endReason || "";
    listeningState.sleepTimerEndsAt = sleepTimerApi.normalizeEndsAt(state.sleepTimerEndsAt);
    if (listeningState.sleepTimerEndsAt) {
        sleepTimerScheduler.setEndsAt(listeningState.sleepTimerEndsAt);
    } else {
        sleepTimerScheduler.cancel();
    }

    const lesson = activeLoadedLesson();
    if (lesson && lesson.id === state.lessonId && !listeningState.queue.length) {
        listeningState.queue = buildListeningQueue(lesson);
    }
    if (listeningState.queue.length) {
        listeningState.index = Math.min(listeningState.index, listeningState.queue.length - 1);
    }

    releaseListeningWakeLock();
    if (["idle", "ended"].includes(state.status)) {
        listeningState.lastFollowedRef = "";
        clearListeningHighlight();
    }
    refreshListeningPlayer();
    applyListeningHighlight();
}

async function initializeNativeListening() {
    if (!nativeListeningDriver) return;

    try {
        nativeListeningReady = await nativeListeningDriver.connect();
        if (!nativeListeningReady) return;

        const state = await nativeListeningDriver.getState();
        if (state.lessonId && lessons.some(lesson => lesson.id === state.lessonId)) {
            activeLessonId = state.lessonId;
            renderLessonList();
            renderMain({ scrollTarget: "preserve" });
        }
        applyNativeListeningState(state);
    } catch (error) {
        nativeListeningReady = false;
        console.debug?.("Native listening unavailable", error);
    }
}

function nativeListeningPayload(lesson, queue, startIndex) {
    return window.lessonGuideNativeListening.buildQueuePayload({
        level,
        lesson,
        lessonTranslation: lessonTitleTranslation(lesson),
        queue,
        startIndex,
        settings: {
            mode: listeningState.mode,
            speed: listeningState.speed,
            repeat: listeningState.repeat,
            translationLocale: listeningLanguage()
        }
    });
}

async function startNativeListening(lesson, startIndex, queue) {
    const boundedIndex = Math.min(Math.max(startIndex, 0), queue.length - 1);
    const payload = nativeListeningPayload(lesson, queue, boundedIndex);

    clearNativeSpeechPreview();
    listeningState.engine = "native";
    listeningState.sessionId = payload.sessionId;
    listeningState.status = "preparing";
    listeningState.lessonId = lesson.id;
    listeningState.queue = queue;
    listeningState.index = boundedIndex;
    listeningState.currentRef = queue[boundedIndex]?.ref || "";
    listeningState.error = "";
    listeningState.restartOnResume = false;
    releaseListeningWakeLock();
    refreshListeningPlayer();
    applyListeningHighlight();

    try {
        await nativeListeningDriver.loadQueue(payload);
        await nativeListeningDriver.play(boundedIndex);
        startSleepTimerForPlayback();
    } catch (error) {
        setListeningError(error?.message || t("listeningUnavailable"));
    }
}

async function requestListeningWakeLock() {
    if (!navigator.wakeLock?.request || document.visibilityState !== "visible") return;
    if (listeningWakeLock) return;

    try {
        const wakeLock = await navigator.wakeLock.request("screen");
        if (listeningState.status !== "playing") {
            wakeLock.release?.().catch?.(() => {});
            return;
        }
        listeningWakeLock = wakeLock;
        wakeLock.addEventListener?.("release", () => {
            if (listeningWakeLock === wakeLock) listeningWakeLock = null;
        });
    } catch (error) {
        console.debug?.("Screen wake lock unavailable", error);
    }
}

function releaseListeningWakeLock() {
    if (!listeningWakeLock) return;
    const wakeLock = listeningWakeLock;
    listeningWakeLock = null;
    wakeLock.release?.().catch?.(() => {});
}

function stopListening(options = {}) {
    const { render = true, clearError = true, endReason = "", notifyNative = true } = options;
    if (notifyNative && nativeListeningIsActive()) {
        nativeListeningDriver.stop(endReason).catch(error => console.debug?.("Native listening stop failed", error));
    } else if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
    speechRunId += 1;
    listeningState.status = "idle";
    listeningState.index = 0;
    listeningState.currentRef = "";
    listeningState.lastFollowedRef = "";
    listeningState.restartOnResume = false;
    listeningState.sessionId = "";
    listeningState.endReason = endReason;
    cancelActiveSleepTimer({ notifyNative: false });
    if (clearError) listeningState.error = "";
    releaseListeningWakeLock();
    clearListeningHighlight();
    if (render) refreshListeningPlayer();
}

function listeningRateForItem(item) {
    if (item.lang !== "ko-KR") return 1;

    const speed = listeningSpeedConfig();
    return item.mode === "word" ? speed.wordRate : speed.sentenceRate;
}

function splitListeningSpeech(text, item) {
    if (item.lang === "ko-KR") return splitKoreanSpeech(text, item.mode);

    const normalized = String(text || "").replace(/\s+/g, " ").trim();
    if (!normalized || normalized.length < 42) return [normalized].filter(Boolean);

    return normalized
        .replace(/([。！？.!?])\s*/g, "$1|")
        .split("|")
        .flatMap(part => {
            if (part.length < 56) return [part];
            return part.replace(/([，,；;])\s*/g, "$1|").split("|");
        })
        .map(chunk => chunk.trim())
        .filter(Boolean);
}

function listeningPitchForItem(item) {
    if (item.lang === "ko-KR") return item.mode === "sentence" ? 0.92 : 0.98;
    if (item.lang === "zh-CN") return 1;
    return 0.98;
}

function speakListeningItem(item, runId) {
    const chunks = splitListeningSpeech(item.text, item);
    const rate = listeningRateForItem(item);

    return new Promise(resolve => {
        const speakChunk = index => {
            if (runId !== speechRunId || listeningState.status === "idle") {
                resolve(false);
                return;
            }

            if (index >= chunks.length) {
                resolve(true);
                return;
            }

            const utterance = new SpeechSynthesisUtterance(chunks[index]);
            utterance.lang = item.lang;
            utterance.rate = rate;
            utterance.pitch = listeningPitchForItem(item);
            utterance.volume = 1;
            if (item.voice) utterance.voice = item.voice;
            utterance.onend = () => window.setTimeout(() => speakChunk(index + 1), item.mode === "sentence" ? 90 : 0);
            utterance.onerror = () => resolve(false);
            window.speechSynthesis.speak(utterance);
        };

        speakChunk(0);
    });
}

function waitUntilListeningPlaying(runId) {
    return new Promise(resolve => {
        const check = () => {
            if (runId !== speechRunId || listeningState.status === "idle") {
                resolve(false);
                return;
            }
            if (listeningState.status === "playing") {
                resolve(true);
                return;
            }
            window.setTimeout(check, 100);
        };

        check();
    });
}

function waitForListeningDelay(ms, runId) {
    return new Promise(resolve => {
        let remaining = ms;
        let lastTick = Date.now();

        const check = () => {
            if (runId !== speechRunId || listeningState.status === "idle") {
                resolve(false);
                return;
            }
            if (listeningState.status === "paused") {
                lastTick = Date.now();
                window.setTimeout(check, 100);
                return;
            }

            const now = Date.now();
            remaining -= now - lastTick;
            lastTick = now;
            if (remaining <= 0) {
                resolve(true);
                return;
            }

            window.setTimeout(check, Math.min(remaining, 100));
        };

        check();
    });
}

async function playListeningLoop(runId) {
    while (runId === speechRunId && listeningState.status !== "idle" && listeningState.index < listeningState.queue.length) {
        const canPlay = await waitUntilListeningPlaying(runId);
        if (!canPlay) return;

        const item = listeningState.queue[listeningState.index];
        listeningState.currentRef = item.ref;
        listeningState.error = "";
        refreshListeningPlayer();
        applyListeningHighlight();

        for (let repeatIndex = 0; repeatIndex < listeningState.repeat; repeatIndex += 1) {
            const completed = await speakListeningItem(item, runId);
            if (!completed || runId !== speechRunId || listeningState.status === "idle") return;
            if (repeatIndex < listeningState.repeat - 1) {
                const canContinueRepeat = await waitForListeningDelay(360, runId);
                if (!canContinueRepeat) return;
            }
        }

        const canContinue = await waitForListeningDelay(item.pauseAfterMs, runId);
        if (!canContinue) return;
        listeningState.index += 1;
    }

    if (runId !== speechRunId || listeningState.status === "idle") return;
    listeningState.status = "ended";
    listeningState.currentRef = "";
    listeningState.lastFollowedRef = "";
    listeningState.endReason = "queue";
    cancelActiveSleepTimer();
    releaseListeningWakeLock();
    clearListeningHighlight();
    refreshListeningPlayer();
}

async function startWebListening(lesson, startIndex = 0) {
    if (!("speechSynthesis" in window)) {
        setListeningError(t("listeningUnavailable"));
        return;
    }

    const queue = buildListeningQueue(lesson);
    if (!queue.length) {
        setListeningError(t("listeningEmpty"));
        return;
    }

    const previousCurrentRef = listeningState.currentRef;
    const previousFollowedRef = listeningState.lastFollowedRef;
    window.speechSynthesis.cancel();
    const runId = ++speechRunId;
    listeningState.status = "playing";
    listeningState.engine = "web";
    listeningState.lessonId = lesson.id;
    listeningState.queue = queue;
    listeningState.index = Math.min(Math.max(startIndex, 0), queue.length - 1);
    listeningState.currentRef = queue[listeningState.index]?.ref || "";
    listeningState.error = "";
    listeningState.restartOnResume = false;
    listeningState.endReason = "";
    listeningState.lastFollowedRef = listeningFollowApi.continuedRef({
        nextRef: listeningState.currentRef,
        currentRef: previousCurrentRef,
        lastFollowedRef: previousFollowedRef
    });
    requestListeningWakeLock();
    startSleepTimerForPlayback();
    refreshListeningPlayer();

    const voice = await waitForKoreanVoice();
    if (runId !== speechRunId || listeningState.status === "idle") return;
    if (!voice) {
        setListeningError(t("listeningUnavailable"));
        return;
    }
    listeningState.queue.forEach(item => {
        item.voice = item.lang === "ko-KR"
            ? voice
            : pickListeningVoice(item.lang);
    });

    playListeningLoop(runId);
}

async function startListening(lesson, startIndex = 0) {
    const queue = buildListeningQueue(lesson);
    if (!queue.length) {
        setListeningError(t("listeningEmpty"));
        return;
    }

    if (nativeListeningDriver) {
        try {
            nativeListeningReady = nativeListeningReady || await nativeListeningDriver.connect();
        } catch (_) {
            nativeListeningReady = false;
        }
    }

    if (nativeListeningReady) {
        await startNativeListening(lesson, startIndex, queue);
        return;
    }
    await startWebListening(lesson, startIndex);
}

function pauseListening() {
    if (listeningState.status !== "playing") return;
    listeningState.status = "paused";
    listeningState.restartOnResume = false;
    if (nativeListeningIsActive()) {
        nativeListeningDriver.pause().catch(error => setListeningError(error?.message || t("listeningUnavailable")));
    } else {
        window.speechSynthesis.pause();
    }
    releaseListeningWakeLock();
    refreshListeningPlayer();
}

function resumeListening() {
    if (listeningState.status !== "paused") return;
    if (nativeListeningIsActive()) {
        listeningState.status = "playing";
        nativeListeningDriver.resume().catch(error => setListeningError(error?.message || t("listeningUnavailable")));
        refreshListeningPlayer();
        return;
    }
    if (listeningState.restartOnResume) {
        const lesson = activeLoadedLesson();
        if (!lesson) return;
        startListening(lesson, listeningState.index);
        return;
    }
    listeningState.status = "playing";
    requestListeningWakeLock();
    window.speechSynthesis.resume();
    refreshListeningPlayer();
}

function restartListeningAfterSettingChange() {
    if (!["playing", "paused"].includes(listeningState.status)) return;

    if (nativeListeningIsActive()) {
        nativeListeningDriver.updateSettings({
            speed: listeningState.speed,
            repeat: listeningState.repeat
        }).catch(error => setListeningError(error?.message || t("listeningUnavailable")));
        return;
    }

    const lesson = activeLoadedLesson();
    if (!lesson) return;
    const currentIndex = listeningState.index;

    if (listeningState.status === "playing") {
        startListening(lesson, currentIndex);
        return;
    }

    window.speechSynthesis.cancel();
    speechRunId += 1;
    listeningState.restartOnResume = true;
    refreshListeningPlayer();
}

function suspendListeningForBackground() {
    if (!["playing", "paused"].includes(listeningState.status)) return;
    if (nativeListeningIsActive()) return;

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
    speechRunId += 1;
    listeningState.status = "paused";
    listeningState.restartOnResume = true;
    releaseListeningWakeLock();
    refreshListeningPlayer();
}

function repairListeningAfterForeground() {
    sleepTimerScheduler.tick();
    if (nativeListeningIsActive()) {
        nativeListeningDriver.getState()
            .then(applyNativeListeningState)
            .catch(error => console.debug?.("Native listening state sync failed", error));
        return;
    }
    if (listeningState.status !== "playing") return;
    if (!("speechSynthesis" in window)) return;

    window.setTimeout(() => {
        if (document.visibilityState !== "visible" || listeningState.status !== "playing") return;
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
            requestListeningWakeLock();
            return;
        }
        suspendListeningForBackground();
    }, 250);
}

function jumpListening(lesson, direction) {
    const queue = listeningState.lessonId === lesson.id && listeningState.queue.length
        ? listeningState.queue
        : buildListeningQueue(lesson);
    if (!queue.length) return;

    const currentIndex = listeningState.lessonId === lesson.id
        ? listeningState.index
        : 0;
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), queue.length - 1);
    if (nativeListeningIsActive()) {
        listeningState.index = nextIndex;
        listeningState.currentRef = queue[nextIndex]?.ref || "";
        nativeListeningDriver.skipTo(nextIndex)
            .catch(error => setListeningError(error?.message || t("listeningUnavailable")));
        refreshListeningPlayer();
        applyListeningHighlight();
        return;
    }
    startListening(lesson, nextIndex);
}

function normalizeLesson(lesson) {
    return {
        goals: [],
        grammar: [],
        vocabulary: [],
        dialogues: [],
        culture: null,
        practice: [],
        ...lesson
    };
}

function isLessonDialogue(dialogue) {
    return window.KIIPListeningContent.isLessonDialogue(dialogue);
}

function lessonDialogues(lesson) {
    return window.KIIPListeningContent.lessonDialogues(lesson);
}

function getLessonStats(lesson) {
    const dialogueCount = lessonDialogues(lesson).length;
    return {
        vocabulary: lesson.vocabulary?.length || lesson.stats?.vocabulary || 0,
        dialogues: Array.isArray(lesson.dialogues) ? dialogueCount : (lesson.stats?.dialogues || 0),
        culture: lesson.culture ? 1 : lesson.stats?.culture || 0,
        practice: lesson.practice?.length || lesson.stats?.practice || 0
    };
}

const listeningQueueBuilder = window.KIIPListeningQueue.create({
    t,
    getTranslationLocale: () => translationLocale,
    normalizeKoreanSpeechText,
    hasHangul,
    lessonTitleTranslation,
    wordMeaning,
    wordExampleTranslation,
    lessonDialogues,
    lineTranslation,
    cultureTitleTranslation,
    cultureTranslation
});

const lessonDataLoader = window.KIIPLessonDataLoader.create({
    root: window,
    document,
    lessons,
    lessonChunksGlobal: config.lessonChunksGlobal,
    translationChunkPaths: lessonTranslationChunkPaths,
    getTranslationLocale: () => translationLocale,
    getTranslationChunk: getLessonTranslationChunk,
    applyTranslations: applyLessonTranslationPacks,
    normalizeLesson
});

function listeningSpeedConfig() {
    return listeningSpeeds.find(speed => speed.id === listeningState.speed) || listeningSpeeds[1];
}

function listeningLanguage() {
    return translationLocale === "en" ? "en-US" : "zh-CN";
}

function buildListeningQueue(lesson, mode = listeningState.mode) {
    return listeningQueueBuilder.build(lesson, mode);
}

function listeningIsActiveForLesson(lesson) {
    return listeningState.lessonId === lesson.id && ["preparing", "playing", "paused", "ended"].includes(listeningState.status);
}

function listeningStatusText(total) {
    if (listeningState.error) return listeningState.error;
    if (!("speechSynthesis" in window) && !nativeListeningReady) return t("listeningUnavailable");
    if (!total) return t("listeningEmpty");

    const current = Math.min(listeningState.index + 1, total);
    if (listeningState.status === "preparing") return tf("listeningPreparing", { current, total });
    if (listeningState.status === "playing") return tf("listeningPlaying", { current, total });
    if (listeningState.status === "paused") return tf("listeningPaused", { current, total });
    if (listeningState.status === "ended") {
        return t(listeningState.endReason === "timer" ? "listeningTimerEnded" : "listeningEnded");
    }
    return t("listeningIdle");
}

function sleepTimerOptionLabel(minutes) {
    return minutes ? tf("listeningSleepTimerMinutes", { minutes }) : t("listeningSleepTimerOff");
}

function playIcon() {
    return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z"></path>
        </svg>
    `;
}

function pauseIcon() {
    return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 5h4v14H7z"></path>
            <path d="M13 5h4v14h-4z"></path>
        </svg>
    `;
}

function stopIcon() {
    return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 7h10v10H7z"></path>
        </svg>
    `;
}

function previousIcon() {
    return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 5h2v14H6z"></path>
            <path d="m19 5-10 7 10 7z"></path>
        </svg>
    `;
}

function nextIcon() {
    return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 5h2v14h-2z"></path>
            <path d="m5 5 10 7-10 7z"></path>
        </svg>
    `;
}

function renderListeningPlayer(lesson) {
    const queue = listeningIsActiveForLesson(lesson)
        ? listeningState.queue
        : buildListeningQueue(lesson);
    const total = queue.length;
    const active = listeningIsActiveForLesson(lesson);
    const status = active ? listeningState.status : "idle";
    const currentItem = active ? queue[listeningState.index] : null;
    const canSpeak = "speechSynthesis" in window || nativeListeningReady;
    const isPlaying = status === "playing";
    const isPaused = status === "paused";

    return `
        <section class="listening-player ${isPlaying ? "is-playing" : ""}" data-listening-player>
            <div class="listening-main">
                <div class="listening-heading">
                    <span class="listening-kicker">${escapeHtml(t("listeningTitle"))}</span>
                    <span class="listening-status">${escapeHtml(active ? listeningStatusText(total) : listeningStatusText(buildListeningQueue(lesson).length))}</span>
                    <label class="listening-sleep-timer" title="${escapeHtml(t("listeningSleepTimerLabel"))}">
                        ${iconApi.render("clock")}
                        <select data-listening-setting="sleepTimer" aria-label="${escapeHtml(t("listeningSleepTimerLabel"))}">
                            ${listeningSleepDurations.map(minutes => `<option value="${minutes}" ${minutes === listeningState.sleepTimerMinutes ? "selected" : ""}>${escapeHtml(sleepTimerOptionLabel(minutes))}</option>`).join("")}
                        </select>
                        <span class="listening-sleep-countdown" data-sleep-timer-countdown ${listeningState.sleepTimerEndsAt ? "" : "hidden"}>${listeningState.sleepTimerEndsAt ? escapeHtml(sleepTimerApi.formatRemaining(listeningState.sleepTimerEndsAt)) : ""}</span>
                    </label>
                </div>
                <div class="listening-now" title="${escapeHtml(currentItem?.text || "")}">
                    ${currentItem ? `<span>${escapeHtml(t("listeningNow"))}</span>${escapeHtml(currentItem.text)}` : ""}
                </div>
            </div>
            <div class="listening-settings" aria-label="${escapeHtml(t("listeningTitle"))}">
                <label>
                    <span>${escapeHtml(t("listeningModeLabel"))}</span>
                    <select data-listening-setting="mode">
                        ${listeningModes.map(mode => `<option value="${escapeHtml(mode.id)}" ${mode.id === listeningState.mode ? "selected" : ""}>${escapeHtml(t(mode.labelKey))}</option>`).join("")}
                    </select>
                </label>
                <label>
                    <span>${escapeHtml(t("listeningSpeedLabel"))}</span>
                    <select data-listening-setting="speed">
                        ${listeningSpeeds.map(speed => `<option value="${escapeHtml(speed.id)}" ${speed.id === listeningState.speed ? "selected" : ""}>${escapeHtml(t(speed.labelKey))}</option>`).join("")}
                    </select>
                </label>
                <label>
                    <span>${escapeHtml(t("listeningRepeatLabel"))}</span>
                    <select data-listening-setting="repeat">
                        ${listeningRepeats.map(repeat => `<option value="${repeat.value}" ${repeat.value === listeningState.repeat ? "selected" : ""}>${escapeHtml(t(repeat.labelKey))}</option>`).join("")}
                    </select>
                </label>
            </div>
            <div class="listening-controls">
                <button class="listening-icon-btn" type="button" data-listening-action="previous" aria-label="${escapeHtml(t("listeningPrevious"))}" title="${escapeHtml(t("listeningPrevious"))}" ${active && total ? "" : "disabled"}>
                    ${previousIcon()}
                </button>
                <button class="listening-primary-btn" type="button" data-listening-action="${isPlaying ? "pause" : isPaused ? "resume" : "start"}" ${canSpeak && total ? "" : "disabled"}>
                    ${isPlaying ? pauseIcon() : playIcon()}
                    <span>${escapeHtml(isPlaying ? t("listeningPause") : isPaused ? t("listeningResume") : t("listeningStart"))}</span>
                </button>
                <button class="listening-icon-btn" type="button" data-listening-action="next" aria-label="${escapeHtml(t("listeningNext"))}" title="${escapeHtml(t("listeningNext"))}" ${active && total ? "" : "disabled"}>
                    ${nextIcon()}
                </button>
                <button class="listening-icon-btn" type="button" data-listening-action="stop" aria-label="${escapeHtml(t("listeningStop"))}" title="${escapeHtml(t("listeningStop"))}" ${active ? "" : "disabled"}>
                    ${stopIcon()}
                </button>
            </div>
        </section>
    `;
}

function getLessonMeta(lessonId = activeLessonId) {
    return lessonDataLoader.getLessonMeta(lessonId);
}

async function loadLesson(lessonId) {
    return lessonDataLoader.load(lessonId);
}

function preloadNextLesson(lessonId) {
    lessonDataLoader.preloadNext(lessonId);
}

function languageIcon() {
    if (iconApi) return iconApi.render("globe");
    return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 0 20"></path>
            <path d="M12 2a15.3 15.3 0 0 0 0 20"></path>
        </svg>
    `;
}

function renderLanguageSwitchers() {
    document.querySelectorAll("[data-language-switcher]").forEach(switcher => {
        const nextLocale = translationLocale === "zh-CN" ? "en" : "zh-CN";
        const switchLabel = nextLocale === "en" ? t("switchToEnglish") : t("switchToChinese");
        switcher.innerHTML = `
            <button class="language-toggle kiip-language-toggle" type="button" data-language-toggle
                data-next-locale="${nextLocale}"
                aria-label="${escapeHtml(switchLabel)}"
                title="${escapeHtml(switchLabel)}">
                ${languageIcon()}
                <span class="language-toggle-text kiip-language-toggle__label">${escapeHtml(localeShortNames[translationLocale] || translationLocale)}</span>
            </button>
        `;
    });
}

function applyStaticLocale() {
    document.documentElement.lang = uiLocale;
    document.title = t("appTitle");
    document.querySelector(".sidebar-title").textContent = t("appTitle");
    document.querySelector(".sidebar-subtitle").textContent = t("sidebarSubtitle");
    document.querySelectorAll(".home-link").forEach(link => {
        link.title = t("returnHome");
        link.setAttribute("aria-label", t("returnHome"));
    });
    lessonSearch.placeholder = t("searchPlaceholder");
    menuToggle.setAttribute("aria-label", t(sidebar.classList.contains("open") ? "closeLessonMenu" : "openLessonMenu"));
    renderLanguageSwitchers();
}

function setLocale(locale) {
    const selectedLocale = localeApi.normalize(locale);
    if (!appLocales.includes(selectedLocale)) return;

    if (["preparing", "playing", "paused"].includes(listeningState.status)) {
        stopListening({ render: false });
    }

    uiLocale = selectedLocale;
    translationLocale = selectedLocale;
    showChinese = true;
    localeApi.write(localStorage, selectedLocale);
    localStorage.setItem(localeStorageKeys.showTranslation, "true");

    applyStaticLocale();
    renderLessonList();
    renderMain({ scrollTarget: "preserve" });
}

function lessonSearchIndex() {
    return resolveGlobalValue(config.searchGlobal) || {};
}

function ensureLessonSearchIndex() {
    if (!config.searchScript || resolveGlobalValue(config.searchGlobal)) return Promise.resolve();
    if (lessonSearchLoadPromise) return lessonSearchLoadPromise;

    lessonSearchLoadPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = config.searchScript;
        script.async = true;
        script.addEventListener("load", resolve, { once: true });
        script.addEventListener("error", () => reject(new Error(`Unable to load ${config.searchScript}`)), { once: true });
        document.body.appendChild(script);
    }).catch(error => {
        console.warn(error);
        lessonSearchLoadPromise = null;
    });

    return lessonSearchLoadPromise;
}

function lessonMatches(lesson, query) {
    if (!query) return true;
    const searchableLesson = lessonDataLoader.getCached(lesson.id) || lesson;
    const haystack = [
        searchableLesson.titleKo,
        searchableLesson.titleZh,
        JSON.stringify(searchableLesson.translations || ""),
        searchableLesson.number,
        searchableLesson.searchText || lessonSearchIndex()[lesson.id],
        ...(searchableLesson.goals || []),
        ...(searchableLesson.grammar || []).map(item => `${item.pattern} ${item.zh} ${item.guide}`),
        ...(searchableLesson.vocabulary || []).map(item => `${item.ko} ${item.zh} ${item.guide}`),
        ...(searchableLesson.dialogues || []).flatMap(dialogue => [
            dialogue.title,
            dialogue.focus,
            dialogue.source,
            dialogue.sceneZh,
            ...(dialogue.learningPoints || []),
            ...(dialogue.lines || []).map(line => `${line.ko} ${line.zh} ${line.guide}`),
            ...(dialogue.rolePlays || []).map(item => `${item.title} ${item.promptZh} ${item.answerKo}`),
            ...(dialogue.drills || []).map(item => `${item.promptZh} ${item.answerKo} ${item.pattern}`)
        ]),
        searchableLesson.culture ? [
            searchableLesson.culture.titleKo,
            searchableLesson.culture.titleZh,
            searchableLesson.culture.summaryZh,
            ...(searchableLesson.culture.paragraphs || []).map(paragraph => `${paragraph.ko} ${paragraph.zh} ${paragraph.guide}`),
            ...(searchableLesson.culture.keyTerms || []).map(term => `${term.ko} ${term.zh}`)
        ].join(" ") : ""
    ].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase());
}

function renderLessonList() {
    const query = lessonSearch.value.trim();
    const filtered = lessons.filter(lesson => lessonMatches(lesson, query));

    lessonList.innerHTML = filtered.map(lesson => `
        <button class="lesson-item ${lesson.id === activeLessonId ? "active" : ""} ${lesson.status === "todo" ? "todo" : ""}" data-lesson-id="${escapeHtml(lesson.id)}" aria-label="${escapeHtml(tf("lessonAriaLabel", { number: lesson.number, title: lesson.titleKo }))}">
            <span class="lesson-number" title="${escapeHtml(`${level}-${String(lesson.number).padStart(2, "0")}`)}">${String(lesson.number).padStart(2, "0")}</span>
            <span class="lesson-name">
                <span class="lesson-ko">${escapeHtml(lesson.titleKo)}</span>
                <span class="lesson-zh">${escapeHtml(lessonTitleTranslation(lesson))}</span>
            </span>
        </button>
    `).join("") || `<div class="todo-panel">${escapeHtml(t("noResults"))}</div>`;
}

function handleLessonSearchInput() {
    const query = lessonSearch.value.trim();
    renderLessonList();
    if (!query || resolveGlobalValue(config.searchGlobal)) return;

    ensureLessonSearchIndex().then(() => {
        if (lessonSearch.value.trim() === query) renderLessonList();
    });
}

function renderHero(lesson) {
    return `
        <section class="hero">
            <div class="hero-copy" data-listening-ref="lesson-title">
                <div class="eyebrow">
                    <span class="level-badge">KIIP ${level}-${String(lesson.number).padStart(2, "0")}</span>
                    ${lesson.pages ? `<span class="page-badge">p.${escapeHtml(lesson.pages)}</span>` : ""}
                </div>
                <h1>${escapeHtml(lesson.titleKo)}</h1>
                <p class="hero-zh">${escapeHtml(lessonTitleTranslation(lesson))}</p>
            </div>
            <div class="hero-listening">
                ${renderListeningPlayer(lesson)}
            </div>
        </section>
        <nav class="tabs">
            ${tabs.map(tab => `<button class="tab-btn ${tab.id === activeTab ? "active" : ""}" data-tab="${tab.id}">${escapeHtml(t(tab.labelKey))}</button>`).join("")}
        </nav>
    `;
}

const lessonRenderers = window.KIIPLessonRenderers.create({
    t,
    tf,
    escapeHtml,
    getShowTranslation: () => showChinese,
    getLessonStats,
    localizedArray,
    grammarWikiHref,
    grammarMeaning,
    grammarGuide,
    wordMeaning,
    renderWordGuide,
    wordExampleTranslation,
    hasHangul,
    koreanPronunciation,
    koreanSpeechLabel,
    formatWordSource,
    formatWordPos,
    lessonDialogues,
    dialogueScene,
    dialogueLearningPoints,
    dialogueRolePlays,
    dialogueSideDrills,
    lineTranslation,
    lineGuide,
    taskTitle,
    taskPrompt,
    cultureTitleTranslation,
    cultureSummary,
    cultureTranslation,
    formatPracticeType,
    practicePrompt,
    practiceAnswer,
    icons: iconApi
});

function renderActiveTab(lesson) {
    return lessonRenderers.renderActiveTab(lesson, activeTab);
}

function getTabsElement() {
    return lessonGuideStickyTabs.getTabsElement(mainContent);
}

function tabsAreSticky() {
    return lessonGuideStickyTabs.tabsAreSticky(mainContent);
}

function scrollMainContent(target) {
    lessonGuideStickyTabs.scrollMainContent(mainContent, target);
}

function scrollActiveTabIntoView() {
    lessonGuideStickyTabs.keepActiveTabVisible(mainContent);
}

function renderLoadedLesson(lesson, scrollTarget) {
    if (nativeListeningIsActive() && listeningState.lessonId === lesson.id && !listeningState.queue.length) {
        listeningState.queue = buildListeningQueue(lesson);
        listeningState.index = Math.min(listeningState.index, Math.max(listeningState.queue.length - 1, 0));
        listeningState.currentRef = listeningState.queue[listeningState.index]?.ref || listeningState.currentRef;
    }
    mobileTitle.textContent = `${level}-${String(lesson.number).padStart(2, "0")} ${lesson.titleKo}`;
    mainContent.innerHTML = renderHero(lesson) + renderActiveTab(lesson);
    scrollMainContent(scrollTarget);
    window.requestAnimationFrame(() => {
        scrollActiveTabIntoView();
        applyListeningHighlight();
        observeListeningPlayerAfterLayout();
    });
}

async function renderMain(options = {}) {
    const { scrollTarget = "top" } = options;
    const lessonMeta = getLessonMeta();
    const runId = ++renderRunId;

    if (lessonDataLoader.hasCached(lessonMeta.id) || !lessonMeta.chunk) {
        const lesson = await loadLesson(lessonMeta.id);
        if (runId !== renderRunId || lesson.id !== activeLessonId) return;
        renderLoadedLesson(lesson, scrollTarget);
        preloadNextLesson(lesson.id);
        return;
    }

    mobileTitle.textContent = `${level}-${String(lessonMeta.number).padStart(2, "0")} ${lessonMeta.titleKo}`;
    mainContent.innerHTML = renderHero(lessonMeta) + lessonRenderers.renderLoading(lessonMeta, lessonTitleTranslation);
    observeListeningPlayer();
    scrollMainContent(scrollTarget);

    try {
        const lesson = await loadLesson(lessonMeta.id);
        if (runId !== renderRunId || lesson.id !== activeLessonId) return;
        renderLoadedLesson(lesson, scrollTarget);
        preloadNextLesson(lesson.id);
    } catch (error) {
        if (runId !== renderRunId) return;
        mainContent.innerHTML = renderHero(lessonMeta) + lessonRenderers.renderLoadError(lessonMeta);
        observeListeningPlayer();
        scrollMainContent(scrollTarget);
    }
}

function switchTab(tabId, options = {}) {
    if (!tabs.some(tab => tab.id === tabId) || tabId === activeTab) return;

    activeTab = tabId;
    renderMain({
        scrollTarget: options.keepSticky ? "tabs" : "top"
    });
}

function switchAdjacentTab(direction, options = {}) {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < 0) return;

    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), tabs.length - 1);
    if (nextIndex === currentIndex) return;
    switchTab(tabs[nextIndex].id, options);
}

function toggleSidebar(force) {
    const open = typeof force === "boolean" ? force : !sidebar.classList.contains("open");
    sidebar.classList.toggle("open", open);
    sidebarOverlay.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", t(open ? "closeLessonMenu" : "openLessonMenu"));
}

function closeSidebar() {
    toggleSidebar(false);
}

function handleListeningAction(button) {
    const lesson = activeLoadedLesson();
    if (!lesson || !button) return;

    const action = button.dataset.listeningAction;
    if (action === "start") startListening(lesson);
    if (action === "pause") pauseListening();
    if (action === "resume") resumeListening();
    if (action === "stop") stopListening();
    if (action === "previous") jumpListening(lesson, -1);
    if (action === "next") jumpListening(lesson, 1);
}

lessonList.addEventListener("click", event => {
    const button = event.target.closest("[data-lesson-id]");
    if (!button) return;
    if (button.dataset.lessonId !== activeLessonId) stopListening({ render: false });
    activeLessonId = button.dataset.lessonId;
    activeTab = "overview";
    renderLessonList();
    renderMain();
    if (window.innerWidth <= 920) closeSidebar();
});

mainContent.addEventListener("click", event => {
    const listeningActionButton = event.target.closest("[data-listening-action]");
    if (listeningActionButton) {
        handleListeningAction(listeningActionButton);
        return;
    }

    const tabButton = event.target.closest("[data-tab]");
    if (tabButton) {
        switchTab(tabButton.dataset.tab, {
            keepSticky: Boolean(tabButton.closest(".tabs")) && mobileSwipeQuery.matches
        });
        return;
    }

    const speakButton = event.target.closest("[data-speak-ko]");
    if (speakButton) {
        speakKorean(speakButton.dataset.speakKo, {
            mode: speakButton.dataset.speakMode,
            button: speakButton
        });
        return;
    }

    if (event.target.closest("[data-toggle-zh]")) {
        showChinese = !showChinese;
        localStorage.setItem(localeStorageKeys.showTranslation, String(showChinese));
        renderMain();
    }
});

floatingListeningControls.addEventListener("click", event => {
    handleListeningAction(event.target.closest("[data-listening-action]"));
});

mainContent.addEventListener("change", event => {
    const setting = event.target.closest("[data-listening-setting]");
    if (!setting) return;

    const key = setting.dataset.listeningSetting;
    if (key === "mode" && listeningModes.some(mode => mode.id === setting.value)) {
        stopListening({ render: false });
        listeningState.mode = setting.value;
        localStorage.setItem(localeStorageKeys.listeningMode, listeningState.mode);
    }
    if (key === "speed" && listeningSpeeds.some(speed => speed.id === setting.value)) {
        listeningState.speed = setting.value;
        localStorage.setItem(localeStorageKeys.listeningSpeed, listeningState.speed);
        restartListeningAfterSettingChange();
    }
    if (key === "repeat") {
        const repeat = Number(setting.value);
        if (listeningRepeats.some(item => item.value === repeat)) {
            listeningState.repeat = repeat;
            localStorage.setItem(localeStorageKeys.listeningRepeat, String(listeningState.repeat));
            restartListeningAfterSettingChange();
        }
    }
    if (key === "sleepTimer") {
        listeningState.sleepTimerMinutes = sleepTimerApi.normalizeDuration(setting.value);
        localStorage.setItem(localeStorageKeys.listeningSleepTimer, String(listeningState.sleepTimerMinutes));
        if (["preparing", "playing", "paused"].includes(listeningState.status)) {
            startSleepTimerForPlayback();
        } else {
            cancelActiveSleepTimer({ notifyNative: false });
        }
    }

    refreshListeningPlayer();
});

function canStartTabSwipe(event) {
    return lessonGuideStickyTabs.canStartTabSwipe(event, {
        mobileQuery: mobileSwipeQuery,
        sidebar
    });
}

mainContent.addEventListener("touchstart", event => {
    if (event.touches.length !== 1 || !canStartTabSwipe(event)) {
        tabSwipeState.tracking = false;
        return;
    }

    const touch = event.touches[0];
    tabSwipeState.tracking = true;
    tabSwipeState.startX = touch.clientX;
    tabSwipeState.startY = touch.clientY;
    tabSwipeState.startedAt = Date.now();
}, { passive: true });

mainContent.addEventListener("touchend", event => {
    if (!tabSwipeState.tracking || event.changedTouches.length !== 1) return;

    tabSwipeState.tracking = false;
    const direction = lessonGuideStickyTabs.shouldSwitchTabFromSwipe(tabSwipeState, event.changedTouches[0]);
    if (!direction) return;

    switchAdjacentTab(direction, {
        keepSticky: true
    });
}, { passive: true });

mainContent.addEventListener("touchcancel", () => {
    tabSwipeState.tracking = false;
}, { passive: true });

lessonSearch.addEventListener("input", handleLessonSearchInput);
menuToggle.addEventListener("click", () => {
    toggleSidebar();
});
sidebarOverlay.addEventListener("click", closeSidebar);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && sidebar.classList.contains("open")) closeSidebar();
});

document.addEventListener("click", event => {
    const toggle = event.target.closest("[data-language-toggle]");
    if (toggle) {
        setLocale(toggle.dataset.nextLocale);
        event.stopPropagation();
        return;
    }
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        suspendListeningForBackground();
        return;
    }
    repairListeningAfterForeground();
});

if (!lessons.length) {
    throw new Error(`No lessons configured for ${level}`);
}
lessons.forEach(applyLessonTranslationPacks);
applyStaticLocale();
renderLessonList();
renderMain();
initializeNativeListening();
})();

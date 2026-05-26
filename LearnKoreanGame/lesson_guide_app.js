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
const lessonCache = new Map();
const lessonLoadPromises = new Map();
const lessonTranslationLoadPromises = new Map();
const loadedLessonScripts = new Set();
const localeStorageKeys = {
    language: "lessonGuideLocale",
    ui: "lessonGuideUiLocale",
    translation: "lessonGuideTranslationLocale",
    showTranslation: "lessonGuideShowTranslation"
};
const localeNames = {
    "zh-CN": "中文",
    en: "English"
};
const localeShortNames = {
    "zh-CN": "中文",
    en: "EN"
};
const appLocales = ["zh-CN", "en"];
const messages = {
    "zh-CN": {
        appTitle: config.title || `${level} Lesson Guide`,
        sidebarSubtitle: "单词、对话、文化文章中文伴学",
        searchPlaceholder: "搜索课文、单词或中文...",
        openLessonMenu: "打开课程菜单",
        returnHome: "返回首页",
        languageSettings: "语言设置",
        languageLabel: "语言",
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
        loadErrorBody: "{title} 的分片文件没有加载成功，请刷新页面后再试。"
    },
    en: {
        appTitle: config.title || `${level} Lesson Guide`,
        sidebarSubtitle: "Vocabulary, dialogues, and culture notes",
        searchPlaceholder: "Search lessons, words, or translations...",
        openLessonMenu: "Open lesson menu",
        returnHome: "Back to home",
        languageSettings: "Language settings",
        languageLabel: "Language",
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
        loadErrorBody: "{title}'s chunk file did not load. Please refresh and try again."
    }
};
const wordPosLabels = {
    "zh-CN": {
        "名词": "名词",
        "名词短语": "名词短语",
        "动词": "动词",
        "动词短语": "动词短语",
        "动词表达": "动词表达",
        "形容词": "形容词",
        "副词": "副词",
        "副词短语": "副词短语",
        "表达": "表达",
        "语法": "语法",
        "语法表达": "语法表达",
        "汉字成语": "汉字成语",
        "冠形词": "冠形词",
        "俗语型表达": "俗语型表达",
        "问候语": "问候语",
        "机构名": "机构名",
        "告示表达": "告示表达",
        "数量表达": "数量表达",
        "敬语动词": "敬语动词",
        "敬语表达": "敬语表达",
        "依存名词": "依存名词",
        "问候表达": "问候表达",
        "请求表达": "请求表达",
        "명사": "名词",
        "명사구": "名词短语",
        "동사": "动词",
        "동사구": "动词短语",
        "형용사": "形容词",
        "부사": "副词",
        "부사구": "副词短语",
        "표현": "表达",
        "문법": "语法",
        "문법 표현": "语法表达",
        "한자성어": "汉字成语",
        "관형사": "冠形词",
        "속담형 표현": "俗语型表达",
        "인사말": "问候语"
    },
    en: {
        "名词": "Noun",
        "名词短语": "Noun phrase",
        "动词": "Verb",
        "动词短语": "Verb phrase",
        "动词表达": "Verb phrase",
        "形容词": "Adjective",
        "副词": "Adverb",
        "副词短语": "Adverb phrase",
        "表达": "Expression",
        "语法": "Grammar",
        "语法表达": "Grammar expression",
        "汉字成语": "Idiom",
        "冠形词": "Determiner",
        "俗语型表达": "Proverbial expression",
        "问候语": "Greeting",
        "机构名": "Institution",
        "告示表达": "Notice phrase",
        "数量表达": "Quantity",
        "敬语动词": "Honorific verb",
        "敬语表达": "Honorific expression",
        "依存名词": "Bound noun",
        "问候表达": "Greeting",
        "请求表达": "Request",
        "명사": "Noun",
        "명사구": "Noun phrase",
        "동사": "Verb",
        "동사구": "Verb phrase",
        "형용사": "Adjective",
        "부사": "Adverb",
        "부사구": "Adverb phrase",
        "표현": "Expression",
        "문법": "Grammar",
        "문법 표현": "Grammar expression",
        "한자성어": "Idiom",
        "관형사": "Determiner",
        "속담형 표현": "Proverbial expression",
        "인사말": "Greeting"
    }
};
const practiceTypeLabels = {
    "zh-CN": {
        grammar: "语法",
        culture: "文化",
        speaking: "口语",
        reading: "阅读",
        writing: "写作",
        vocabulary: "词汇",
        translation: "翻译",
        pattern: "句型",
        listening: "听力"
    },
    en: {
        grammar: "Grammar",
        culture: "Culture",
        speaking: "Speaking",
        reading: "Reading",
        writing: "Writing",
        vocabulary: "Vocabulary",
        translation: "Translation",
        pattern: "Pattern",
        listening: "Listening"
    }
};
const tabs = [
    { id: "overview", labelKey: "tabsOverview" },
    { id: "vocabulary", labelKey: "tabsVocabulary" },
    { id: "dialogue", labelKey: "tabsDialogue" },
    { id: "culture", labelKey: "tabsCulture" },
    { id: "practice", labelKey: "tabsPractice" }
];

const lessonList = document.getElementById("lesson-list");
const mainContent = document.getElementById("main-content");
const lessonSearch = document.getElementById("lesson-search");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const menuToggle = document.getElementById("menu-toggle");
const mobileTitle = document.getElementById("mobile-title");

let activeLessonId = lessons[0].id;
let activeTab = "overview";
const storedLocale = localStorage.getItem(localeStorageKeys.language);
const legacyTranslationLocale = localStorage.getItem(localeStorageKeys.translation);
const legacyUiLocale = localStorage.getItem(localeStorageKeys.ui);
const initialLocale = appLocales.includes(storedLocale)
    ? storedLocale
    : appLocales.includes(legacyTranslationLocale)
        ? legacyTranslationLocale
        : appLocales.includes(legacyUiLocale)
            ? legacyUiLocale
            : "zh-CN";
let uiLocale = initialLocale;
let translationLocale = initialLocale;
let showChinese = localStorage.getItem(localeStorageKeys.showTranslation) !== "false";
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

const wordGuideTipTypeByLabel = {
    "搭配": "collocation",
    "易错": "pitfall",
    "变形": "form",
    collocation: "collocation",
    pitfall: "pitfall",
    form: "form"
};
const wordGuideTipLabels = {
    "zh-CN": {
        collocation: "搭配",
        pitfall: "易错",
        form: "变形"
    },
    en: {
        collocation: "Pattern",
        pitfall: "Pitfall",
        form: "Form"
    }
};

function wordGuideTipType(tip) {
    return tip?.type || wordGuideTipTypeByLabel[tip?.label] || "";
}

function wordGuideTipLabel(type) {
    return wordGuideTipLabels[uiLocale]?.[type] || wordGuideTipLabels["zh-CN"][type] || type;
}

function normalizeWordGuideTips(tips = []) {
    if (!Array.isArray(tips)) return [];
    return uniqueGuideTips(tips
        .map(tip => ({
            type: wordGuideTipType(tip),
            text: String(tip.text || "").trim()
        }))
        .filter(tip => tip.type && tip.text)
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
    if (Array.isArray(preferred) && preferred.length) return normalizeWordGuideTips(preferred);
    if (translationLocale !== "zh-CN") return [];

    const fallbackTranslation = item?.translations?.["zh-CN"]?.tips;
    if (Array.isArray(fallbackTranslation) && fallbackTranslation.length) return normalizeWordGuideTips(fallbackTranslation);

    return normalizeWordGuideTips(item?.tips);
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
    const label = String(pos || "").trim();
    if (!label) return t("posPending");
    const posMap = wordPosLabels[uiLocale] || wordPosLabels["zh-CN"];

    return label
        .split("/")
        .map(part => posMap[part.trim()] || part.trim())
        .join("/");
}

function formatPracticeType(type) {
    const label = String(type || "").trim();
    const typeMap = practiceTypeLabels[uiLocale] || practiceTypeLabels["zh-CN"];

    return typeMap[label] || label || t("practiceFallback");
}

function hasHangul(value) {
    return /[가-힣]/.test(String(value || ""));
}

function koreanSpeechLabel(text) {
    return `한국어 발음 재생: ${text}`;
}

function normalizeKoreanSpeechText(value) {
    return String(value || "")
        .split(/\s+\/\s+/)[0]
        .replace(/\s+/g, " ")
        .trim();
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

async function speakKorean(text, options = {}) {
    if (!("speechSynthesis" in window) || !text) return;

    const mode = options.mode || "word";
    const normalizedText = normalizeKoreanSpeechText(text);
    if (!hasHangul(normalizedText)) return;

    const runId = ++speechRunId;
    window.speechSynthesis.cancel();

    document.querySelectorAll(".speak-btn.speaking").forEach(button => button.classList.remove("speaking"));
    options.button?.classList.add("speaking");

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
        utterance.rate = mode === "sentence" ? 0.78 : 0.82;
        utterance.pitch = mode === "sentence" ? 0.92 : 0.98;
        utterance.volume = 1;
        utterance.voice = voice;
        utterance.onend = () => window.setTimeout(() => speakChunk(index + 1), mode === "sentence" ? 90 : 0);
        utterance.onerror = () => options.button?.classList.remove("speaking");
        window.speechSynthesis.speak(utterance);
    };

    speakChunk(0);
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
    const sourceText = [
        dialogue?.source,
        dialogue?.focus,
        dialogue?.title
    ].filter(Boolean).join(" ");

    return !/(읽기|쓰기|발음)/.test(sourceText);
}

function lessonDialogues(lesson) {
    return (lesson.dialogues || []).filter(isLessonDialogue);
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

function getLessonMeta(lessonId = activeLessonId) {
    return lessons.find(lesson => lesson.id === lessonId) || lessons[0];
}

function versionedScriptSrc(src) {
    const url = new URL(src, window.location.href);
    const pageVersion = new URLSearchParams(window.location.search).get("v");
    if (pageVersion && !url.searchParams.has("v")) {
        url.searchParams.set("v", pageVersion);
    }
    return url.href;
}

function loadScript(src) {
    const absoluteSrc = versionedScriptSrc(src);
    if (loadedLessonScripts.has(absoluteSrc)) return Promise.resolve();

    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = absoluteSrc;
        script.async = true;
        script.onload = () => {
            loadedLessonScripts.add(absoluteSrc);
            resolve();
        };
        script.onerror = () => reject(new Error(`课程数据加载失败：${absoluteSrc}`));
        document.head.appendChild(script);
    });
}

async function loadLessonTranslation(locale, lessonId) {
    if (locale === "zh-CN" || getLessonTranslationChunk(locale, lessonId)) return;

    const src = lessonTranslationChunkPaths[locale]?.[lessonId];
    if (!src) return;

    const promiseKey = `${locale}:${lessonId}`;
    if (!lessonTranslationLoadPromises.has(promiseKey)) {
        lessonTranslationLoadPromises.set(promiseKey, loadScript(src).catch(error => {
            console.warn(error);
        }));
    }

    await lessonTranslationLoadPromises.get(promiseKey);
}

async function loadLesson(lessonId) {
    const meta = getLessonMeta(lessonId);
    if (lessonCache.has(meta.id)) {
        await loadLessonTranslation(translationLocale, meta.id);
        return applyLessonTranslationPacks(lessonCache.get(meta.id));
    }

    if (!meta.chunk) {
        await loadLessonTranslation(translationLocale, meta.id);
        const lesson = applyLessonTranslationPacks(normalizeLesson(meta));
        lessonCache.set(meta.id, lesson);
        return lesson;
    }

    if (!lessonLoadPromises.has(meta.id)) {
        lessonLoadPromises.set(meta.id, (async () => {
            await loadScript(meta.chunk);
            await loadLessonTranslation(translationLocale, meta.id);
            const chunk = window[config.lessonChunksGlobal]?.[meta.id];
            if (!chunk) throw new Error(`没有找到课程分片：${meta.id}`);

            const lesson = applyLessonTranslationPacks(normalizeLesson({
                ...meta,
                ...chunk
            }));
            lessonCache.set(meta.id, lesson);
            return lesson;
        })());
    }

    return lessonLoadPromises.get(meta.id);
}

function preloadNextLesson(lessonId) {
    const currentIndex = lessons.findIndex(lesson => lesson.id === lessonId);
    const next = lessons[currentIndex + 1];
    if (!next?.chunk || lessonCache.has(next.id) || lessonLoadPromises.has(next.id)) return;
    loadLesson(next.id).catch(() => {});
}

function languageIcon() {
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
        const isOpen = switcher.querySelector(".language-menu:not([hidden])");
        switcher.innerHTML = `
            <button class="language-toggle" type="button" data-language-toggle aria-label="${escapeHtml(t("languageSettings"))}" title="${escapeHtml(t("languageSettings"))}" aria-expanded="${isOpen ? "true" : "false"}">
                ${languageIcon()}
                <span class="language-toggle-text">${escapeHtml(localeShortNames[translationLocale] || translationLocale)}</span>
            </button>
            <div class="language-menu" data-language-menu ${isOpen ? "" : "hidden"}>
                <div class="language-section">
                    <p class="language-section-title">${escapeHtml(t("languageLabel"))}</p>
                    ${appLocales.map(locale => `
                        <button class="language-option ${locale === translationLocale ? "active" : ""}" type="button" data-locale-value="${escapeHtml(locale)}">
                            ${escapeHtml(localeNames[locale])}
                        </button>
                    `).join("")}
                </div>
            </div>
        `;
    });
}

function closeLanguageMenus() {
    document.querySelectorAll("[data-language-menu]").forEach(menu => {
        menu.hidden = true;
        menu.previousElementSibling?.setAttribute("aria-expanded", "false");
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
    menuToggle.setAttribute("aria-label", t("openLessonMenu"));
    renderLanguageSwitchers();
}

function setLocale(locale) {
    if (!appLocales.includes(locale)) return;

    uiLocale = locale;
    translationLocale = locale;
    showChinese = true;
    localStorage.setItem(localeStorageKeys.language, locale);
    localStorage.setItem(localeStorageKeys.ui, locale);
    localStorage.setItem(localeStorageKeys.translation, locale);
    localStorage.setItem(localeStorageKeys.showTranslation, "true");

    applyStaticLocale();
    renderLessonList();
    renderMain({ scrollTarget: "preserve" });
}

function lessonMatches(lesson, query) {
    if (!query) return true;
    const searchableLesson = lessonCache.get(lesson.id) || lesson;
    const haystack = [
        searchableLesson.titleKo,
        searchableLesson.titleZh,
        JSON.stringify(searchableLesson.translations || ""),
        searchableLesson.number,
        searchableLesson.searchText,
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

function renderHero(lesson) {
    return `
        <section class="hero">
            <div>
                <div class="eyebrow">
                    <span class="level-badge">KIIP ${level}-${String(lesson.number).padStart(2, "0")}</span>
                    ${lesson.pages ? `<span class="page-badge">p.${escapeHtml(lesson.pages)}</span>` : ""}
                </div>
                <h1>${escapeHtml(lesson.titleKo)}</h1>
                <p class="hero-zh">${escapeHtml(lessonTitleTranslation(lesson))}</p>
            </div>
        </section>
        <nav class="tabs">
            ${tabs.map(tab => `<button class="tab-btn ${tab.id === activeTab ? "active" : ""}" data-tab="${tab.id}">${escapeHtml(t(tab.labelKey))}</button>`).join("")}
        </nav>
    `;
}

function renderOverview(lesson) {
    const stats = getLessonStats(lesson);
    const goals = localizedArray(lesson, "goals", "goals");

    return `
        <div class="section-grid">
            <button class="stat-card" type="button" data-tab="vocabulary">
                <div class="stat-value">${stats.vocabulary}</div>
                <div class="stat-label">${escapeHtml(t("statVocabulary"))}</div>
            </button>
            <button class="stat-card" type="button" data-tab="dialogue">
                <div class="stat-value">${stats.dialogues}</div>
                <div class="stat-label">${escapeHtml(t("statDialogue"))}</div>
            </button>
            <button class="stat-card" type="button" data-tab="culture">
                <div class="stat-value">${stats.culture}</div>
                <div class="stat-label">${escapeHtml(t("statCulture"))}</div>
            </button>
        </div>

        <section class="content-card">
            <h2>${escapeHtml(t("learningGoals"))}</h2>
            <ul class="guide-list">
                ${goals.map(goal => `<li>${escapeHtml(goal)}</li>`).join("")}
            </ul>
        </section>

        <section class="content-card">
            <h2>${escapeHtml(t("grammarLinks"))}</h2>
            ${(lesson.grammar || []).length ? lesson.grammar.map(item => `
                <div class="grammar-row">
                    <div class="pattern">${escapeHtml(item.pattern)} · ${escapeHtml(grammarMeaning(item))}</div>
                    <div class="muted">${escapeHtml(grammarGuide(item))}</div>
                </div>
            `).join("") : `<p class="muted">${escapeHtml(t("grammarPending"))}</p>`}
        </section>
    `;
}

function renderVocabulary(lesson) {
    if (!lesson.vocabulary?.length) return renderTodo(t("vocabularyPendingTitle"), t("vocabularyPendingBody"));

    return `
        <div class="toolbar">
            <div class="muted">${escapeHtml(tf("vocabularyToolbar", { count: lesson.vocabulary.length }))}</div>
            <button class="tool-btn" data-toggle-zh>${escapeHtml(showChinese ? t("hideTranslation") : t("showTranslation"))}</button>
        </div>
        <div class="vocab-grid">
            ${lesson.vocabulary.map(item => `
                <article class="word-card">
                    <div class="word-top">
                        <div class="word-title-line">
                            <div class="word-ko">${escapeHtml(item.ko)}</div>
                            ${hasHangul(item.ko) ? `<span class="word-pron">발음 [${escapeHtml(koreanPronunciation(item.ko))}]</span>` : ""}
                        </div>
                        ${hasHangul(item.ko) ? `<button class="speak-btn" type="button" data-speak-ko="${escapeHtml(item.ko)}" data-speak-mode="word" aria-label="${escapeHtml(koreanSpeechLabel(item.ko))}" title="${escapeHtml(koreanSpeechLabel(item.ko))}">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8 5v14l11-7z"></path>
                            </svg>
                        </button>` : ""}
                    </div>
                    ${showChinese ? `<div class="word-zh">${escapeHtml(wordMeaning(item))}</div>` : ""}
                    ${renderWordGuide(lesson, item)}
                    <div class="example-ko">${escapeHtml(item.exampleKo)}</div>
                    ${showChinese ? `<div class="example-zh">${escapeHtml(wordExampleTranslation(item))}</div>` : ""}
                    <div class="word-meta">
                        <span class="word-source">${escapeHtml(formatWordSource(item))}</span>
                        <span class="word-pos">${escapeHtml(formatWordPos(item.pos))}</span>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function renderDialogue(lesson) {
    const dialogues = lessonDialogues(lesson);
    if (!dialogues.length) return renderTodo(t("dialoguePendingTitle"), t("dialoguePendingBody"));

    const lineCount = dialogues.reduce((total, dialogue) => total + (dialogue.lines?.length || 0), 0);

    return `
        <div class="toolbar">
            <div class="muted">${escapeHtml(tf("dialogueToolbar", { dialogues: dialogues.length, lines: lineCount }))}</div>
            <button class="tool-btn" data-toggle-zh>${escapeHtml(showChinese ? t("hideTranslation") : t("showTranslation"))}</button>
        </div>
        ${dialogues.map(dialogue => {
            const speakers = Array.from(new Set((dialogue.lines || []).map(line => line.speaker)));
            const scene = dialogueScene(dialogue);
            const learningPoints = dialogueLearningPoints(dialogue);
            const rolePlays = dialogueRolePlays(dialogue);
            const drills = dialogueSideDrills(dialogue, rolePlays);

            return `
                <section class="content-card dialogue-card">
                    <div class="dialogue-header">
                        <div class="dialogue-title">
                            <h2>${escapeHtml(dialogue.title)}</h2>
                            <div class="dialogue-meta">
                                <span class="dialogue-focus">${escapeHtml(dialogue.focus)}</span>
                                ${dialogue.page ? `<span class="page-badge">p.${escapeHtml(dialogue.page)}</span>` : ""}
                                ${dialogue.source ? `<span class="word-source">${escapeHtml(dialogue.source)}</span>` : ""}
                            </div>
                        </div>
                        ${speakers.length ? `
                            <div class="speaker-list">
                                ${speakers.map(speaker => `<span class="speaker-chip">${escapeHtml(speaker)}</span>`).join("")}
                            </div>
                        ` : ""}
                        ${scene && showChinese ? `<p class="dialogue-scene">${escapeHtml(scene)}</p>` : ""}
                    </div>
                    <div class="dialogue-layout">
                        <div class="dialogue-transcript">
                            <div class="dialogue-panel-title">${escapeHtml(t("dialoguePanelTitle"))}</div>
                            ${(dialogue.lines || []).map((line, index) => `
                                <div class="line-card">
                                    <div class="line-index">${index + 1}</div>
                                    <div class="line-body">
                                        <div class="line-speaker-row">
                                            <span class="speaker">${escapeHtml(line.speaker)}</span>
                                        </div>
                                        <div class="line-ko-row">
                                            <div class="line-ko">${escapeHtml(line.ko)}</div>
                                            ${hasHangul(line.ko) ? `<button class="speak-btn" type="button" data-speak-ko="${escapeHtml(line.ko)}" data-speak-mode="sentence" aria-label="${escapeHtml(koreanSpeechLabel(line.ko))}" title="${escapeHtml(koreanSpeechLabel(line.ko))}">
                                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M8 5v14l11-7z"></path>
                                                </svg>
                                            </button>` : ""}
                                        </div>
                                        ${showChinese ? `<div class="line-zh">${escapeHtml(lineTranslation(line))}</div>` : ""}
                                        ${showChinese ? `<div class="line-guide">${escapeHtml(lineGuide(line))}</div>` : ""}
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                        <aside class="dialogue-side">
                            ${learningPoints.length && showChinese ? `
                                <section class="dialogue-mini-panel">
                                    <h3>${escapeHtml(t("readingTips"))}</h3>
                                    <ul class="dialogue-points">
                                        ${learningPoints.map(point => `<li>${escapeHtml(point)}</li>`).join("")}
                                    </ul>
                                </section>
                            ` : ""}
                            ${rolePlays.length ? `
                                <details class="dialogue-mini-panel" open>
                                    <summary>${escapeHtml(t("rolePractice"))}</summary>
                                    <div class="role-task-grid">
                                        ${rolePlays.map(task => `
                                            <div class="role-task">
                                                <h3>${escapeHtml(taskTitle(task))}</h3>
                                                ${showChinese ? `<div class="muted">${escapeHtml(taskPrompt(task))}</div>` : ""}
                                                <div class="drill-answer">${escapeHtml(task.answerKo)}</div>
                                            </div>
                                        `).join("")}
                                    </div>
                                </details>
                            ` : ""}
                            ${drills.length ? `
                                <details class="dialogue-mini-panel">
                                    <summary>${escapeHtml(t("substitutionPractice"))}</summary>
                                    ${drills.map(drill => `
                                        <div class="drill">
                                            ${showChinese ? `<div>${escapeHtml(taskPrompt(drill))}</div>` : ""}
                                            <div class="muted">${escapeHtml(t("patternLabel"))}：${escapeHtml(drill.pattern)}</div>
                                            <div class="drill-answer">${escapeHtml(drill.answerKo)}</div>
                                        </div>
                                    `).join("")}
                                </details>
                            ` : ""}
                        </aside>
                    </div>
                </section>
            `;
        }).join("")}
    `;
}

function renderCulture(lesson) {
    if (!lesson.culture) return renderTodo(t("culturePendingTitle"), t("culturePendingBody"));

    const culture = lesson.culture;
    return `
        <section class="content-card">
            <div class="eyebrow">
                <span class="level-badge">${escapeHtml(culture.titleKo)}</span>
                <span class="page-badge">${escapeHtml(cultureTitleTranslation(culture))}</span>
                ${culture.page ? `<span class="page-badge">p.${escapeHtml(culture.page)}</span>` : ""}
            </div>
            <div class="culture-summary">${escapeHtml(cultureSummary(culture))}</div>
            <h2>${escapeHtml(t("originalAndTranslation"))}</h2>
            ${(culture.paragraphs || []).map(paragraph => `
                <div class="paragraph-block">
                    <span class="paragraph-label">${escapeHtml(t("originalLabel"))}</span>
                    <div class="paragraph-ko">${escapeHtml(paragraph.ko)}</div>
                    <span class="paragraph-label">${escapeHtml(t("translationLabel"))}</span>
                    <div class="paragraph-zh">${escapeHtml(cultureTranslation(paragraph, "translation"))}</div>
                    <p class="line-guide">${escapeHtml(cultureTranslation(paragraph, "guide"))}</p>
                </div>
            `).join("")}
        </section>

        <section class="content-card">
            <h2>${escapeHtml(t("keyTerms"))}</h2>
            ${(culture.keyTerms || []).map(term => `
                <div class="term-row">
                    <div class="pattern">${escapeHtml(term.ko)}</div>
                    <div>${escapeHtml(cultureTranslation(term, "meaning"))}</div>
                </div>
            `).join("")}
        </section>

        <section class="content-card">
            <h2>${escapeHtml(t("comprehensionQuestions"))}</h2>
            ${(culture.questions || []).map(item => `
                <div class="qa-row">
                    <div class="line-ko">${escapeHtml(item.q)}</div>
                    <div class="line-zh">${escapeHtml(cultureTranslation(item, "translation"))}</div>
                    <div class="muted">${escapeHtml(cultureTranslation(item, "answer"))}</div>
                </div>
            `).join("")}
        </section>
    `;
}

function renderPractice(lesson) {
    if (!lesson.practice?.length) return renderTodo(t("practicePendingTitle"), t("practicePendingBody"));

    return lesson.practice.map(item => `
        <article class="practice-card">
            <span class="practice-type">${escapeHtml(formatPracticeType(item.type))}</span>
            <h3>${escapeHtml(taskTitle(item))}</h3>
            <p>${escapeHtml(practicePrompt(item))}</p>
            <details>
                <summary>${escapeHtml(t("answer"))}</summary>
                <div class="drill-answer">${escapeHtml(practiceAnswer(item))}</div>
            </details>
        </article>
    `).join("");
}

function renderTodo(title, body) {
    return `
        <div class="todo-panel">
            <div>
                <h2>${escapeHtml(title)}</h2>
                <p>${escapeHtml(body)}</p>
            </div>
        </div>
    `;
}

function renderLoading(lesson) {
    return `
        <div class="todo-panel">
            <div>
                <h2>${escapeHtml(t("loadingTitle"))}</h2>
                <p>${escapeHtml(lesson.titleKo)} · ${escapeHtml(lessonTitleTranslation(lesson))}</p>
            </div>
        </div>
    `;
}

function renderLoadError(lesson) {
    return `
        <div class="todo-panel">
            <div>
                <h2>${escapeHtml(t("loadErrorTitle"))}</h2>
                <p>${escapeHtml(tf("loadErrorBody", { title: lesson.titleKo }))}</p>
            </div>
        </div>
    `;
}

function renderActiveTab(lesson) {
    if (activeTab === "vocabulary") return renderVocabulary(lesson);
    if (activeTab === "dialogue") return renderDialogue(lesson);
    if (activeTab === "culture") return renderCulture(lesson);
    if (activeTab === "practice") return renderPractice(lesson);
    return renderOverview(lesson);
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
    mobileTitle.textContent = `${level}-${String(lesson.number).padStart(2, "0")} ${lesson.titleKo}`;
    mainContent.innerHTML = renderHero(lesson) + renderActiveTab(lesson);
    scrollMainContent(scrollTarget);
    window.requestAnimationFrame(scrollActiveTabIntoView);
}

async function renderMain(options = {}) {
    const { scrollTarget = "top" } = options;
    const lessonMeta = getLessonMeta();
    const runId = ++renderRunId;

    if (lessonCache.has(lessonMeta.id) || !lessonMeta.chunk) {
        const lesson = await loadLesson(lessonMeta.id);
        if (runId !== renderRunId || lesson.id !== activeLessonId) return;
        renderLoadedLesson(lesson, scrollTarget);
        preloadNextLesson(lesson.id);
        return;
    }

    mobileTitle.textContent = `${level}-${String(lessonMeta.number).padStart(2, "0")} ${lessonMeta.titleKo}`;
    mainContent.innerHTML = renderHero(lessonMeta) + renderLoading(lessonMeta);
    scrollMainContent(scrollTarget);

    try {
        const lesson = await loadLesson(lessonMeta.id);
        if (runId !== renderRunId || lesson.id !== activeLessonId) return;
        renderLoadedLesson(lesson, scrollTarget);
        preloadNextLesson(lesson.id);
    } catch (error) {
        if (runId !== renderRunId) return;
        mainContent.innerHTML = renderHero(lessonMeta) + renderLoadError(lessonMeta);
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

function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("open");
}

lessonList.addEventListener("click", event => {
    const button = event.target.closest("[data-lesson-id]");
    if (!button) return;
    activeLessonId = button.dataset.lessonId;
    activeTab = "overview";
    renderLessonList();
    renderMain();
    if (window.innerWidth <= 920) closeSidebar();
});

mainContent.addEventListener("click", event => {
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

lessonSearch.addEventListener("input", renderLessonList);
menuToggle.addEventListener("click", () => {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("open");
});
sidebarOverlay.addEventListener("click", closeSidebar);

document.addEventListener("click", event => {
    const toggle = event.target.closest("[data-language-toggle]");
    if (toggle) {
        const switcher = toggle.closest("[data-language-switcher]");
        const menu = switcher?.querySelector("[data-language-menu]");
        const shouldOpen = Boolean(menu?.hidden);
        closeLanguageMenus();
        if (menu) {
            menu.hidden = !shouldOpen;
            toggle.setAttribute("aria-expanded", String(shouldOpen));
        }
        event.stopPropagation();
        return;
    }

    const localeOption = event.target.closest("[data-locale-value]");
    if (localeOption) {
        setLocale(localeOption.dataset.localeValue);
        closeLanguageMenus();
        event.stopPropagation();
        return;
    }

    if (!event.target.closest("[data-language-switcher]")) {
        closeLanguageMenus();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeLanguageMenus();
});

if (!lessons.length) {
    throw new Error(`No lessons configured for ${level}`);
}
lessons.forEach(applyLessonTranslationPacks);
applyStaticLocale();
renderLessonList();
renderMain();
})();

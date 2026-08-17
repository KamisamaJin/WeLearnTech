(function initKiipLessonLabels(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPLessonLabels = api;
})(typeof window !== "undefined" ? window : globalThis, function createLessonLabelsApi() {
    const tipAliases = Object.freeze({
        "搭配": "collocation",
        "易错": "pitfall",
        "变形": "form",
        mistake: "pitfall",
        error: "pitfall"
    });

    const tipLabels = Object.freeze({
        "zh-CN": Object.freeze({
            collocation: "搭配",
            pitfall: "易错",
            form: "变形",
            abbrev: "缩写",
            also: "又称",
            antonym: "反义词",
            contrast: "辨析",
            fixed: "固定表达",
            honorific: "敬语",
            pair: "关联词",
            pronunciation: "发音",
            proverb: "谚语",
            set: "词组",
            similar: "近义表达",
            spacing: "空格",
            standard: "规范写法",
            usage: "用法"
        }),
        en: Object.freeze({
            collocation: "Collocation",
            pitfall: "Pitfall",
            form: "Form",
            abbrev: "Abbreviation",
            also: "Also known as",
            antonym: "Antonym",
            contrast: "Contrast",
            fixed: "Fixed expression",
            honorific: "Honorific",
            pair: "Related pair",
            pronunciation: "Pronunciation",
            proverb: "Proverb",
            set: "Word set",
            similar: "Similar expression",
            spacing: "Spacing",
            standard: "Standard form",
            usage: "Usage"
        })
    });

    const chinesePosLabels = Object.freeze({
        "专有名词": "专有名词",
        "代词": "代词",
        "依存名词": "依存名词",
        "俗语": "俗语",
        "俗语型表达": "俗语型表达",
        "冠形词": "冠形词",
        "副词": "副词",
        "副词性表达": "副词性表达",
        "副词短语": "副词短语",
        "动词": "动词",
        "动词短语": "动词短语",
        "动词表达": "动词表达",
        "助词": "助词",
        "发音": "发音",
        "发音表达": "发音表达",
        "句型": "句型",
        "句型表达": "句型表达",
        "句子": "句子",
        "名词": "名词",
        "名词短语": "名词短语",
        "告示表达": "告示表达",
        "固有名词": "固有名词",
        "地名": "地名",
        "地址表达": "地址表达",
        "常用表达": "常用表达",
        "形容词": "形容词",
        "形容词短语": "形容词短语",
        "惯用表达": "惯用表达",
        "感叹词": "感叹词",
        "敬语动词": "敬语动词",
        "敬语表达": "敬语表达",
        "数量表达": "数量表达",
        "时间表达": "时间表达",
        "机构": "机构",
        "机构名": "机构名",
        "疑问表达": "疑问表达",
        "疑问词": "疑问词",
        "短语": "短语",
        "网站名": "网站名",
        "聊天语": "聊天语",
        "职位名": "职位名",
        "表情": "表情",
        "表达": "表达",
        "词组": "词组",
        "语尾": "语尾",
        "语法": "语法",
        "语法短语": "语法短语",
        "语法表达": "语法表达",
        "请求表达": "请求表达",
        "连体表达": "连体表达",
        "连接表达": "连接表达",
        "连接词": "连接词",
        "邮件结尾": "邮件结尾",
        "量词": "量词",
        "问候表达": "问候表达",
        "问候语": "问候语",
        "问句": "问句",
        "项目名": "项目名",
        "관형사": "冠形词",
        "동사": "动词",
        "동사구": "动词短语",
        "명사": "名词",
        "명사구": "名词短语",
        "문법": "语法",
        "문법 표현": "语法表达",
        "부사": "副词",
        "부사구": "副词短语",
        "속담형 표현": "俗语型表达",
        "인사말": "问候语",
        "표현": "表达",
        "한자성어": "汉字成语",
        "형용사": "形容词"
    });

    const englishPosLabels = Object.freeze({
        "专有名词": "Proper noun",
        "代词": "Pronoun",
        "依存名词": "Bound noun",
        "俗语": "Proverb",
        "俗语型表达": "Proverbial expression",
        "冠形词": "Determiner",
        "副词": "Adverb",
        "副词性表达": "Adverbial expression",
        "副词短语": "Adverb phrase",
        "动词": "Verb",
        "动词短语": "Verb phrase",
        "动词表达": "Verbal expression",
        "助词": "Particle",
        "发音": "Pronunciation",
        "发音表达": "Pronunciation expression",
        "句型": "Pattern",
        "句型表达": "Pattern",
        "句子": "Sentence",
        "名词": "Noun",
        "名词短语": "Noun phrase",
        "告示表达": "Notice phrase",
        "固有名词": "Proper noun",
        "地名": "Place name",
        "地址表达": "Address expression",
        "常用表达": "Common expression",
        "形容词": "Adjective",
        "形容词短语": "Adjective phrase",
        "惯用表达": "Idiomatic expression",
        "感叹词": "Interjection",
        "敬语动词": "Honorific verb",
        "敬语表达": "Honorific expression",
        "数量表达": "Quantity expression",
        "时间表达": "Time expression",
        "机构": "Organization",
        "机构名": "Organization name",
        "疑问表达": "Question expression",
        "疑问词": "Interrogative",
        "短语": "Phrase",
        "网站名": "Website name",
        "聊天语": "Chat expression",
        "职位名": "Job title",
        "表情": "Emoticon",
        "表达": "Expression",
        "词组": "Phrase",
        "语尾": "Ending",
        "语法": "Grammar",
        "语法短语": "Grammar phrase",
        "语法表达": "Grammar expression",
        "请求表达": "Request",
        "连体表达": "Adnominal expression",
        "连接表达": "Connecting expression",
        "连接词": "Conjunction",
        "邮件结尾": "Email closing",
        "量词": "Counter",
        "问候表达": "Greeting",
        "问候语": "Greeting",
        "问句": "Question",
        "项目名": "Program name",
        "관형사": "Determiner",
        "동사": "Verb",
        "동사구": "Verb phrase",
        "명사": "Noun",
        "명사구": "Noun phrase",
        "문법": "Grammar",
        "문법 표현": "Grammar expression",
        "부사": "Adverb",
        "부사구": "Adverb phrase",
        "속담형 표현": "Proverbial expression",
        "인사말": "Greeting",
        "표현": "Expression",
        "한자성어": "Idiom",
        "형용사": "Adjective"
    });

    const posLabels = Object.freeze({ "zh-CN": chinesePosLabels, en: englishPosLabels });
    const practiceLabels = Object.freeze({
        "zh-CN": Object.freeze({
            grammar: "语法", culture: "文化", speaking: "口语", reading: "阅读",
            writing: "写作", vocabulary: "词汇", translation: "翻译", pattern: "句型",
            listening: "听力", dialogue: "对话", direction: "方位", matching: "配对", sign: "标识"
        }),
        en: Object.freeze({
            grammar: "Grammar", culture: "Culture", speaking: "Speaking", reading: "Reading",
            writing: "Writing", vocabulary: "Vocabulary", translation: "Translation", pattern: "Pattern",
            listening: "Listening", dialogue: "Dialogue", direction: "Directions", matching: "Matching", sign: "Signs"
        })
    });

    function localeKey(locale) {
        return locale === "en" ? "en" : "zh-CN";
    }

    function normalizeTipType(value) {
        const type = String(value || "").trim();
        return tipAliases[type] || type.toLowerCase();
    }

    function hasTipType(value) {
        return Object.prototype.hasOwnProperty.call(tipLabels["zh-CN"], normalizeTipType(value));
    }

    function tipLabel(locale, value) {
        const type = normalizeTipType(value);
        return tipLabels[localeKey(locale)][type] || tipLabels["zh-CN"][type] || type;
    }

    function hasPos(value) {
        const parts = String(value || "").split("/").map(part => part.trim()).filter(Boolean);
        return parts.length > 0 && parts.every(part => Object.prototype.hasOwnProperty.call(chinesePosLabels, part));
    }

    function posLabel(locale, value, fallback = "") {
        const label = String(value || "").trim();
        if (!label) return fallback;
        const labels = posLabels[localeKey(locale)];
        return label.split("/").map(part => labels[part.trim()] || part.trim()).join("/");
    }

    function hasPracticeType(value) {
        return Object.prototype.hasOwnProperty.call(practiceLabels["zh-CN"], String(value || "").trim());
    }

    function practiceLabel(locale, value, fallback = "") {
        const type = String(value || "").trim();
        return practiceLabels[localeKey(locale)][type] || type || fallback;
    }

    return Object.freeze({
        normalizeTipType,
        hasTipType,
        tipLabel,
        hasPos,
        posLabel,
        hasPracticeType,
        practiceLabel
    });
});

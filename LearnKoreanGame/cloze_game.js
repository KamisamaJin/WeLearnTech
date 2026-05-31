(function (root, factory) {
    const api = factory();
    if (typeof module !== "undefined" && module.exports) {
        module.exports = api;
    }
    root.KLingoCloze = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
    const BLANK = "___";
    const HANGUL_TAIL = "[가-힣]*";

    function normalizeText(value) {
        return String(value || "").trim();
    }

    function escapeRegExp(value) {
        return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function replaceFirst(text, target) {
        const index = text.indexOf(target);
        if (index < 0) return "";
        return text.slice(0, index) + BLANK + text.slice(index + target.length);
    }

    function stripDictionaryEnding(term) {
        return term.endsWith("다") ? term.slice(0, -1) : term;
    }

    function stemCandidates(term) {
        const candidates = [];
        if (term.endsWith("다")) candidates.push(term.slice(0, -1));
        if (term.endsWith("하다")) candidates.push(term.slice(0, -2));
        return [...new Set(candidates.filter(stem => stem.length >= 2))];
    }

    function findInflectedPhrase(term, exampleKo) {
        const parts = term.split(/\s+/).filter(Boolean);
        if (parts.length < 2) return null;

        const prefix = parts.slice(0, -1).join("\\s+");
        for (const stem of stemCandidates(parts[parts.length - 1])) {
            const pattern = new RegExp(`(${prefix}\\s+${escapeRegExp(stem)}${HANGUL_TAIL})`);
            const match = exampleKo.match(pattern);
            if (match?.[1]) return match[1];
        }
        return null;
    }

    function findInflectedWord(term, exampleKo) {
        if (!term.endsWith("다")) return null;
        for (const stem of stemCandidates(term)) {
            const pattern = new RegExp(`(^|[^가-힣])(${escapeRegExp(stem)}${HANGUL_TAIL})`);
            const match = exampleKo.match(pattern);
            if (match?.[2]) return match[2];
        }
        return null;
    }

    function createClozeCard(item) {
        const ko = normalizeText(item?.ko);
        const exampleKo = normalizeText(item?.exampleKo);
        if (!ko || !exampleKo) return null;

        let answer = "";
        let blankedKo = "";

        if (item?.cloze?.answer && item?.cloze?.blankedKo) {
            answer = normalizeText(item.cloze.answer);
            blankedKo = normalizeText(item.cloze.blankedKo);
        } else if (exampleKo.includes(ko)) {
            answer = ko;
            blankedKo = replaceFirst(exampleKo, ko);
        } else {
            const inflectedPhrase = findInflectedPhrase(ko, exampleKo);
            const inflectedWord = inflectedPhrase || findInflectedWord(ko, exampleKo);
            if (!inflectedWord) return null;
            answer = inflectedWord;
            blankedKo = replaceFirst(exampleKo, inflectedWord);
        }

        if (!answer || !blankedKo || blankedKo === exampleKo) return null;

        return {
            key: ko,
            term: ko,
            answer,
            blankedKo,
            exampleKo,
            meaning: {
                zh: normalizeText(item.zh),
                en: normalizeText(item.en || item.translations?.en?.meaning || item.zh)
            },
            translation: {
                zh: normalizeText(item.exampleZh || item.zh),
                en: normalizeText(item.exampleEn || item.translations?.en?.example || item.en || item.zh)
            },
            pos: normalizeText(item.pos),
            source: normalizeText(item.source),
            page: item.page
        };
    }

    function cardTextForLocale(card, lang) {
        return lang === "EN" ? card.translation.en : card.translation.zh;
    }

    function shuffle(array, random = Math.random) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function uniqueCards(items) {
        const seen = new Set();
        return items.filter(item => {
            const card = item.answer ? item : createClozeCard(item);
            if (!card || seen.has(card.answer)) return false;
            seen.add(card.answer);
            return true;
        }).map(item => item.answer ? item : createClozeCard(item));
    }

    function normalizePos(pos) {
        const label = normalizeText(pos).toLowerCase();
        if (!label) return "";
        if (/명사|noun/.test(label)) return "noun";
        if (/동사|verb/.test(label)) return "verb";
        if (/형용사|adjective/.test(label)) return "adjective";
        if (/부사|adverb/.test(label)) return "adverb";
        if (/표현|expression|phrase/.test(label)) return "expression";
        return label;
    }

    function sourceBase(source) {
        return normalizeText(source).split(/[/:·]/)[0].trim();
    }

    function rankedDistractors(targetCard, pool, random) {
        const candidates = shuffle(pool.filter(card => card.answer !== targetCard.answer), random);
        const targetPos = normalizePos(targetCard.pos);
        const targetSource = sourceBase(targetCard.source);
        return candidates
            .map((card, index) => {
                const samePos = targetPos && normalizePos(card.pos) === targetPos;
                const sameSource = targetSource && sourceBase(card.source) === targetSource;
                const score = (samePos ? 4 : 0) + (sameSource ? 2 : 0);
                return { card, index, score };
            })
            .sort((a, b) => b.score - a.score || a.index - b.index)
            .map(entry => entry.card);
    }

    function createClozeQuestion(targetCard, poolItems, options = {}) {
        const lang = options.lang === "EN" ? "EN" : "ZH";
        const random = options.random || Math.random;
        const pool = uniqueCards(poolItems);
        const distractors = rankedDistractors(targetCard, pool, random).slice(0, 3);
        const choices = shuffle([
            { text: targetCard.answer, correct: true },
            ...distractors.map(card => ({ text: card.answer, correct: false }))
        ], random);

        return {
            key: targetCard.key,
            term: targetCard.term,
            sourceCard: targetCard,
            promptKo: targetCard.blankedKo,
            exampleKo: targetCard.exampleKo,
            correctAnswer: targetCard.answer,
            meaning: lang === "EN" ? targetCard.meaning.en : targetCard.meaning.zh,
            translation: cardTextForLocale(targetCard, lang),
            source: targetCard.source,
            page: targetCard.page,
            options: choices
        };
    }

    function createClozeRound(poolItems, options = {}) {
        const count = options.count || 10;
        const lang = options.lang === "EN" ? "EN" : "ZH";
        const random = options.random || Math.random;
        const reviewItems = Array.isArray(options.reviewItems) ? options.reviewItems : [];
        const recentKeys = new Set(options.recentKeys || []);
        const eligible = uniqueCards(poolItems);
        const byKey = new Map(eligible.map(card => [card.key, card]));
        const picked = [];
        const selected = new Set();

        reviewItems.forEach(item => {
            if (picked.length >= count) return;
            const reviewKey = item.key || item.ko;
            const card = byKey.get(reviewKey);
            if (!card || selected.has(card.key)) return;
            picked.push(card);
            selected.add(card.key);
        });

        const fresh = shuffle(eligible.filter(card => !selected.has(card.key) && !recentKeys.has(card.key)), random);
        const fallback = shuffle(eligible.filter(card => !selected.has(card.key)), random);
        [...fresh, ...fallback].forEach(card => {
            if (picked.length >= count || selected.has(card.key)) return;
            picked.push(card);
            selected.add(card.key);
        });

        return picked.map(card => createClozeQuestion(card, eligible, { lang, random }));
    }

    return {
        BLANK,
        createClozeCard,
        createClozeQuestion,
        createClozeRound
    };
});

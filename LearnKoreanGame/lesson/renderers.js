(function initKiipLessonRenderers(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPLessonRenderers = api;
})(typeof window !== "undefined" ? window : globalThis, function createRendererApi() {
    function groupGrammarDialogues(lesson, dialogues) {
        const normalize = value => String(value || "").normalize("NFKC").replace(/[A-Za-z~\s\u00b7()/\-]/g, "");
        const groups = (lesson.grammar || []).map((grammar, grammarIndex) => ({ grammar, grammarIndex, dialogues: [] }));
        const integrated = [];
        dialogues.forEach((dialogue, dialogueIndex) => {
            const focus = normalize(dialogue.focus);
            const matches = groups.filter(group => {
                const pattern = normalize(group.grammar.pattern);
                return pattern && focus.includes(pattern);
            });
            const numbered = String(dialogue.source || "").match(/문법\s*([1-9]\d*)/);
            const group = matches.length === 1 ? matches[0]
                : matches.length === 0 && numbered ? groups[Number(numbered[1]) - 1] : null;
            (group?.dialogues || integrated).push({ dialogue, dialogueIndex });
        });
        return { groups, integrated };
    }

    function create(deps) {
        const {
            t, tf, escapeHtml, getShowTranslation, getLessonStats, localizedArray,
            grammarWikiHref, grammarMeaning, grammarGuide, grammarExampleTranslation, wordMeaning, renderWordGuide,
            wordExampleTranslation, hasHangul, koreanPronunciation, koreanSpeechLabel,
            formatWordSource, formatWordPos, lessonDialogues, dialogueScene,
            dialogueLearningPoints, dialogueRolePlays, dialogueSideDrills, lineTranslation,
            lineGuide, taskTitle, taskPrompt, cultureTitleTranslation, cultureSummary,
            cultureTranslation, formatPracticeType, practicePrompt, practiceAnswer, icons,
            getGrammarStudyMode = () => "read", getSelectedGrammar = () => "0",
            highlightGrammar = text => escapeHtml(text)
        } = deps;

        const showTranslation = () => Boolean(getShowTranslation());
        const speakIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>';

        function renderTodo(title, body) {
            return `<div class="todo-panel"><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(body)}</p></div></div>`;
        }

        function renderOverview(lesson) {
            const stats = getLessonStats(lesson);
            const goals = localizedArray(lesson, "goals", "goals");
            const chevron = icons?.render("chevronRight", { className: "grammar-link-icon" })
                || '<svg class="grammar-link-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>';

            return `
                <div class="section-grid">
                    <button class="stat-card" type="button" data-tab="vocabulary"><div class="stat-value">${stats.vocabulary}</div><div class="stat-label">${escapeHtml(t("statVocabulary"))}</div></button>
                    <button class="stat-card" type="button" data-tab="grammar"><div class="stat-value">${(lesson.grammar || []).length}</div><div class="stat-label">${escapeHtml(t("statGrammar"))}</div></button>
                    <button class="stat-card" type="button" data-tab="culture"><div class="stat-value">${stats.culture}</div><div class="stat-label">${escapeHtml(t("statCulture"))}</div></button>
                </div>
                <section class="content-card">
                    <h2>${escapeHtml(t("learningGoals"))}</h2>
                    <ul class="guide-list">${goals.map(goal => `<li>${escapeHtml(goal)}</li>`).join("")}</ul>
                </section>
                <section class="content-card">
                    <h2>${escapeHtml(t("grammarLinks"))}</h2>
                    ${(lesson.grammar || []).length ? lesson.grammar.map((item, grammarIndex) => `
                        <a class="grammar-row grammar-link" href="${escapeHtml(grammarWikiHref(lesson, grammarIndex))}" aria-label="${escapeHtml(tf("openGrammarDetail", { pattern: item.pattern }))}">
                            <span class="grammar-link-copy"><span class="pattern">${escapeHtml(item.pattern)} · ${escapeHtml(grammarMeaning(item))}</span><span class="muted">${escapeHtml(grammarGuide(item))}</span></span>
                            ${chevron}
                        </a>
                    `).join("") : `<p class="muted">${escapeHtml(t("grammarPending"))}</p>`}
                </section>`;
        }

        function renderVocabulary(lesson) {
            if (!lesson.vocabulary?.length) return renderTodo(t("vocabularyPendingTitle"), t("vocabularyPendingBody"));
            const reveal = showTranslation();
            return `
                <div class="toolbar"><div class="muted">${escapeHtml(tf("vocabularyToolbar", { count: lesson.vocabulary.length }))}</div><button class="tool-btn" data-toggle-zh>${escapeHtml(reveal ? t("hideTranslation") : t("showTranslation"))}</button></div>
                <div class="vocab-grid">${lesson.vocabulary.map((item, index) => `
                    <article class="word-card" data-listening-ref="vocab-${index}">
                        <div class="word-top"><div class="word-title-line"><div class="word-ko">${escapeHtml(item.ko)}</div>${hasHangul(item.ko) ? `<span class="word-pron">${escapeHtml(t("pronunciationLabel"))} [${escapeHtml(koreanPronunciation(item.ko))}]</span>` : ""}</div>
                        ${hasHangul(item.ko) ? `<button class="speak-btn" type="button" data-speak-ko="${escapeHtml(item.ko)}" data-speak-mode="word" aria-label="${escapeHtml(koreanSpeechLabel(item.ko))}" title="${escapeHtml(koreanSpeechLabel(item.ko))}">${speakIcon}</button>` : ""}</div>
                        ${reveal ? `<div class="word-zh">${escapeHtml(wordMeaning(item))}</div>` : ""}
                        ${renderWordGuide(lesson, item)}
                        <div class="example-ko">${escapeHtml(item.exampleKo)}</div>
                        ${reveal ? `<div class="example-zh">${escapeHtml(wordExampleTranslation(item))}</div>` : ""}
                        <div class="word-meta"><span class="word-source">${escapeHtml(formatWordSource(item))}</span><span class="word-pos">${escapeHtml(formatWordPos(item.pos))}</span></div>
                    </article>`).join("")}</div>`;
        }

        function renderDialogueCards(entries, grammars, lesson) {
            const reveal = showTranslation();
            const recall = getGrammarStudyMode() === "recall";
            const translation = line => !reveal ? "" : recall
                ? `<details class="grammar-recall-answer"><summary>${escapeHtml(t("grammarRevealTranslation"))}</summary><div class="line-zh">${escapeHtml(lineTranslation(line))}</div></details>`
                : `<div class="line-zh">${escapeHtml(lineTranslation(line))}</div>`;
            return entries.map(({ dialogue, dialogueIndex }) => {
                    const scene = dialogueScene(dialogue);
                    const learningPoints = dialogueLearningPoints(dialogue);
                    const rolePlays = dialogueRolePlays(dialogue);
                    const drills = dialogueSideDrills(dialogue, rolePlays);
                    return `<section class="content-card dialogue-card">
                        <div class="dialogue-header"><div class="dialogue-title"><h2>${escapeHtml(dialogue.title)}</h2><div class="dialogue-meta"><span class="dialogue-focus">${escapeHtml(dialogue.focus)}</span>${dialogue.page ? `<span class="page-badge">p.${escapeHtml(dialogue.page)}</span>` : ""}${dialogue.source ? `<span class="word-source">${escapeHtml(dialogue.source)}</span>` : ""}</div></div>
                        ${scene && reveal ? `<p class="dialogue-scene">${escapeHtml(scene)}</p>` : ""}</div>
                        <div class="dialogue-layout"><div class="dialogue-transcript"><div class="dialogue-panel-title">${escapeHtml(t("dialoguePanelTitle"))}</div>
                        ${(dialogue.lines || []).map((line, index) => `<div class="line-card" data-listening-ref="dialogue-${dialogueIndex}-line-${index}"><div class="line-index">${index + 1}</div><div class="line-body"><div class="line-speaker-row"><span class="speaker">${escapeHtml(line.speaker)}</span></div><div class="line-ko-row"><div class="line-ko">${highlightGrammar(line.ko, grammars, lesson)}</div>${hasHangul(line.ko) ? `<button class="speak-btn" type="button" data-speak-ko="${escapeHtml(line.ko)}" data-speak-mode="sentence" aria-label="${escapeHtml(koreanSpeechLabel(line.ko))}" title="${escapeHtml(koreanSpeechLabel(line.ko))}">${speakIcon}</button>` : ""}</div>${translation(line)}${reveal && lineGuide(line) ? `<details class="line-note"><summary>${escapeHtml(t("grammarExpressionNote"))}</summary><div class="line-guide">${escapeHtml(lineGuide(line))}</div></details>` : ""}</div></div>`).join("")}</div>
                        <aside class="dialogue-side">${learningPoints.length && reveal ? `<details class="dialogue-mini-panel"><summary>${escapeHtml(t("readingTips"))}</summary><ul class="dialogue-points">${learningPoints.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul></details>` : ""}
                        ${rolePlays.length ? `<details class="dialogue-mini-panel"><summary>${escapeHtml(t("rolePractice"))}</summary><div class="role-task-grid">${rolePlays.map(task => `<div class="role-task"><h3>${escapeHtml(taskTitle(task))}</h3>${reveal ? `<div class="muted">${escapeHtml(taskPrompt(task))}</div>` : ""}<details class="grammar-task-answer"><summary>${escapeHtml(t("answer"))}</summary><div class="drill-answer">${highlightGrammar(task.answerKo, grammars, lesson)}</div></details></div>`).join("")}</div></details>` : ""}
                        ${drills.length ? `<details class="dialogue-mini-panel"><summary>${escapeHtml(t("substitutionPractice"))}</summary>${drills.map(drill => `<div class="drill">${reveal ? `<div>${escapeHtml(taskPrompt(drill))}</div>` : ""}<div class="muted">${escapeHtml(t("patternLabel"))}：${escapeHtml(drill.pattern)}</div><details class="grammar-task-answer"><summary>${escapeHtml(t("answer"))}</summary><div class="drill-answer">${highlightGrammar(drill.answerKo, grammars, lesson)}</div></details></div>`).join("")}</details>` : ""}</aside></div>
                    </section>`;
                }).join("");
        }

        function renderGrammar(lesson) {
            const dialogues = lessonDialogues(lesson);
            const { groups, integrated } = groupGrammarDialogues(lesson, dialogues);
            if (!groups.length && !dialogues.length) return renderTodo(t("tabsGrammar"), t("grammarPending"));
            const reveal = showTranslation();
            const recall = getGrammarStudyMode() === "recall";
            const chevron = icons?.render("chevronRight", { className: "grammar-link-icon" }) || "";
            const answer = (html, label) => recall ? `<details class="grammar-recall-answer"><summary>${escapeHtml(t(label))}</summary>${html}</details>` : html;
            const panels = groups.map(group => ({ key: String(group.grammarIndex), title: group.grammar.pattern }));
            if (integrated.length) panels.push({ key: "integrated", title: t("grammarIntegrated") });
            const requested = String(getSelectedGrammar());
            const selected = panels.some(panel => panel.key === requested) ? requested : panels[0].key;
            const footer = key => {
                const index = panels.findIndex(panel => panel.key === key);
                return `<nav class="grammar-pagination" aria-label="${escapeHtml(t("grammarQuickReview"))}">${index > 0 ? `<button type="button" data-grammar-select="${panels[index - 1].key}">${escapeHtml(t("grammarPrevious"))}</button>` : "<span></span>"}<span>${index + 1} / ${panels.length}</span>${index < panels.length - 1 ? `<button type="button" data-grammar-select="${panels[index + 1].key}">${escapeHtml(t("grammarNext"))}${chevron}</button>` : "<span></span>"}</nav>`;
            };
            const conversation = (id, entries, grammars, heading) => `<section class="grammar-dialogue-group grammar-practice" id="${id}">${heading}${renderDialogueCards(entries, grammars, lesson)}</section>`;
            return `
                <div class="grammar-workspace">
                <div class="grammar-selector" role="tablist" aria-label="${escapeHtml(t("grammarQuickReview"))}">${panels.map((panel, index) => `<button type="button" role="tab" id="grammar-choice-${panel.key}" data-grammar-select="${panel.key}" aria-controls="${panel.key === "integrated" ? "grammar-integrated" : `grammar-${panel.key}`}" aria-selected="${panel.key === selected}" tabindex="${panel.key === selected ? 0 : -1}"><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(panel.title)}</button>`).join("")}</div>
                <div class="toolbar grammar-toolbar"><div class="grammar-study-controls"><div class="grammar-study-modes" role="group" aria-label="${escapeHtml(t("grammarStudyMode"))}"><button type="button" data-grammar-study-mode="read" aria-pressed="${!recall}">${escapeHtml(t("grammarReadMode"))}</button><button type="button" data-grammar-study-mode="recall" aria-pressed="${recall}">${escapeHtml(t("grammarRecallMode"))}</button></div><button class="tool-btn" data-toggle-zh>${escapeHtml(reveal ? t("hideTranslation") : t("showTranslation"))}</button></div></div>
                ${groups.map(({ grammar, grammarIndex, dialogues: entries }) => {
                    const examples = grammar.examples?.length ? grammar.examples : grammar.exampleKo
                        ? [{ ko: grammar.exampleKo, zh: grammar.exampleZh, translations: grammar.translations }]
                        : entries.flatMap(entry => entry.dialogue.lines || [])
                            .filter(line => highlightGrammar(line.ko, [grammar], lesson).includes('<mark class="grammar-highlight '))
                            .slice(0, 2).map(line => ({ ko: line.ko, localizedTranslation: lineTranslation(line) }));
                    let step = 0;
                    const heading = (label, extra = "") => `<h3 class="grammar-step-heading"><span>${String(++step).padStart(2, "0")}</span>${escapeHtml(t(label))}${extra}</h3>`;
                    const exampleTranslation = example => example.localizedTranslation ?? grammarExampleTranslation(example);
                    return `<section class="grammar-panel grammar-unit grammar-tone-${grammarIndex % 3}" id="grammar-${grammarIndex}" data-grammar-panel="${grammarIndex}" role="tabpanel" aria-labelledby="grammar-choice-${grammarIndex}" ${selected === String(grammarIndex) ? "" : "hidden"}>
                        <header class="grammar-unit-header"><div><div class="grammar-unit-number">${escapeHtml(tf("grammarNumber", { number: String(grammarIndex + 1).padStart(2, "0") }))}</div><h2>${escapeHtml(grammar.pattern)}</h2></div>
                        <a class="grammar-detail-link" href="${escapeHtml(grammarWikiHref(lesson, grammarIndex))}" aria-label="${escapeHtml(tf("openGrammarDetail", { pattern: grammar.pattern }))}">${escapeHtml(t("grammarDetail"))}${chevron}</a></header>
                        ${reveal ? answer(`<div class="grammar-meaning">${escapeHtml(grammarMeaning(grammar))}</div>${grammarGuide(grammar) ? `${heading("grammarUsage")}<p class="grammar-explanation">${escapeHtml(grammarGuide(grammar))}</p>` : ""}`, "grammarRevealMeaning") : ""}
                        ${examples.length ? `${heading("grammarExamples")}<div class="grammar-examples">${examples.map((example, index) => `<div class="grammar-example"><div class="grammar-example-line"><div lang="ko"><span class="grammar-example-number">${index + 1}.</span>${highlightGrammar(example.ko, [grammar], lesson)}</div>${hasHangul(example.ko) ? `<button class="speak-btn" type="button" data-speak-ko="${escapeHtml(example.ko)}" data-speak-mode="sentence" aria-label="${escapeHtml(koreanSpeechLabel(example.ko))}">${speakIcon}</button>` : ""}</div>${reveal && exampleTranslation(example) ? answer(`<div class="muted">${escapeHtml(exampleTranslation(example))}</div>`, "grammarRevealTranslation") : ""}</div>`).join("")}</div>` : ""}
                        ${entries.length ? conversation(`grammar-dialogues-${grammarIndex}`, entries, [grammar], heading("grammarApplication", `<small>${escapeHtml(tf("grammarDialogueCount", { count: entries.length }))}</small>`)) : ""}
                        ${footer(String(grammarIndex))}
                    </section>`;
                }).join("")}
                ${integrated.length ? `<section class="grammar-panel grammar-practice" id="grammar-integrated" data-grammar-panel="integrated" role="tabpanel" aria-labelledby="grammar-choice-integrated" ${selected === "integrated" ? "" : "hidden"}><header class="grammar-unit-header"><h2>${escapeHtml(t("grammarIntegrated"))}</h2></header>${renderDialogueCards(integrated, lesson.grammar || [], lesson)}${footer("integrated")}</section>` : ""}
                </div>`;
        }

        function renderCulture(lesson) {
            if (!lesson.culture) return renderTodo(t("culturePendingTitle"), t("culturePendingBody"));
            const culture = lesson.culture;
            return `
                <section class="content-card"><div class="eyebrow"><span class="level-badge">${escapeHtml(culture.titleKo)}</span><span class="page-badge">${escapeHtml(cultureTitleTranslation(culture))}</span>${culture.page ? `<span class="page-badge">p.${escapeHtml(culture.page)}</span>` : ""}</div><div class="culture-summary">${escapeHtml(cultureSummary(culture))}</div><h2>${escapeHtml(t("originalAndTranslation"))}</h2>
                ${(culture.paragraphs || []).map((paragraph, index) => `<div class="paragraph-block" data-listening-ref="culture-paragraph-${index}"><span class="paragraph-label">${escapeHtml(t("originalLabel"))}</span><div class="paragraph-ko">${escapeHtml(paragraph.ko)}</div><span class="paragraph-label">${escapeHtml(t("translationLabel"))}</span><div class="paragraph-zh">${escapeHtml(cultureTranslation(paragraph, "translation"))}</div><p class="line-guide">${escapeHtml(cultureTranslation(paragraph, "guide"))}</p></div>`).join("")}</section>
                <section class="content-card"><h2>${escapeHtml(t("keyTerms"))}</h2>${(culture.keyTerms || []).map(term => `<div class="term-row"><div class="pattern">${escapeHtml(term.ko)}</div><div>${escapeHtml(cultureTranslation(term, "meaning"))}</div></div>`).join("")}</section>
                <section class="content-card"><h2>${escapeHtml(t("comprehensionQuestions"))}</h2>${(culture.questions || []).map(item => `<div class="qa-row"><div class="line-ko">${escapeHtml(item.q)}</div><div class="line-zh">${escapeHtml(cultureTranslation(item, "translation"))}</div><div class="muted">${escapeHtml(cultureTranslation(item, "answer"))}</div></div>`).join("")}</section>`;
        }

        function renderPractice(lesson) {
            if (!lesson.practice?.length) return renderTodo(t("practicePendingTitle"), t("practicePendingBody"));
            return lesson.practice.map(item => `<article class="practice-card"><span class="practice-type">${escapeHtml(formatPracticeType(item.type))}</span><h3>${escapeHtml(taskTitle(item))}</h3><p>${escapeHtml(practicePrompt(item))}</p><details><summary>${escapeHtml(t("answer"))}</summary><div class="drill-answer">${escapeHtml(practiceAnswer(item))}</div></details></article>`).join("");
        }

        function renderLoading(lesson, lessonTitleTranslation) {
            return renderTodo(t("loadingTitle"), `${lesson.titleKo} · ${lessonTitleTranslation(lesson)}`);
        }

        function renderLoadError(lesson) {
            return renderTodo(t("loadErrorTitle"), tf("loadErrorBody", { title: lesson.titleKo }));
        }

        function renderActiveTab(lesson, activeTab) {
            if (activeTab === "vocabulary") return renderVocabulary(lesson);
            if (activeTab === "grammar" || activeTab === "dialogue") return renderGrammar(lesson);
            if (activeTab === "culture") return renderCulture(lesson);
            if (activeTab === "practice") return renderPractice(lesson);
            return renderOverview(lesson);
        }

        return Object.freeze({ renderTodo, renderOverview, renderVocabulary, renderGrammar, renderCulture, renderPractice, renderLoading, renderLoadError, renderActiveTab });
    }

    return Object.freeze({ create, groupGrammarDialogues });
});

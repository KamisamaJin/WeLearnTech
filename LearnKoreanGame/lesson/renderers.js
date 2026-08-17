(function initKiipLessonRenderers(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPLessonRenderers = api;
})(typeof window !== "undefined" ? window : globalThis, function createRendererApi() {
    function create(deps) {
        const {
            t, tf, escapeHtml, getShowTranslation, getLessonStats, localizedArray,
            grammarWikiHref, grammarMeaning, grammarGuide, wordMeaning, renderWordGuide,
            wordExampleTranslation, hasHangul, koreanPronunciation, koreanSpeechLabel,
            formatWordSource, formatWordPos, lessonDialogues, dialogueScene,
            dialogueLearningPoints, dialogueRolePlays, dialogueSideDrills, lineTranslation,
            lineGuide, taskTitle, taskPrompt, cultureTitleTranslation, cultureSummary,
            cultureTranslation, formatPracticeType, practicePrompt, practiceAnswer, icons
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
                    <button class="stat-card" type="button" data-tab="dialogue"><div class="stat-value">${stats.dialogues}</div><div class="stat-label">${escapeHtml(t("statDialogue"))}</div></button>
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

        function renderDialogue(lesson) {
            const dialogues = lessonDialogues(lesson);
            if (!dialogues.length) return renderTodo(t("dialoguePendingTitle"), t("dialoguePendingBody"));
            const reveal = showTranslation();
            const lineCount = dialogues.reduce((total, dialogue) => total + (dialogue.lines?.length || 0), 0);
            return `
                <div class="toolbar"><div class="muted">${escapeHtml(tf("dialogueToolbar", { dialogues: dialogues.length, lines: lineCount }))}</div><button class="tool-btn" data-toggle-zh>${escapeHtml(reveal ? t("hideTranslation") : t("showTranslation"))}</button></div>
                ${dialogues.map((dialogue, dialogueIndex) => {
                    const speakers = Array.from(new Set((dialogue.lines || []).map(line => line.speaker)));
                    const scene = dialogueScene(dialogue);
                    const learningPoints = dialogueLearningPoints(dialogue);
                    const rolePlays = dialogueRolePlays(dialogue);
                    const drills = dialogueSideDrills(dialogue, rolePlays);
                    return `<section class="content-card dialogue-card">
                        <div class="dialogue-header"><div class="dialogue-title"><h2>${escapeHtml(dialogue.title)}</h2><div class="dialogue-meta"><span class="dialogue-focus">${escapeHtml(dialogue.focus)}</span>${dialogue.page ? `<span class="page-badge">p.${escapeHtml(dialogue.page)}</span>` : ""}${dialogue.source ? `<span class="word-source">${escapeHtml(dialogue.source)}</span>` : ""}</div></div>
                        ${speakers.length ? `<div class="speaker-list">${speakers.map(speaker => `<span class="speaker-chip">${escapeHtml(speaker)}</span>`).join("")}</div>` : ""}${scene && reveal ? `<p class="dialogue-scene">${escapeHtml(scene)}</p>` : ""}</div>
                        <div class="dialogue-layout"><div class="dialogue-transcript"><div class="dialogue-panel-title">${escapeHtml(t("dialoguePanelTitle"))}</div>
                        ${(dialogue.lines || []).map((line, index) => `<div class="line-card" data-listening-ref="dialogue-${dialogueIndex}-line-${index}"><div class="line-index">${index + 1}</div><div class="line-body"><div class="line-speaker-row"><span class="speaker">${escapeHtml(line.speaker)}</span></div><div class="line-ko-row"><div class="line-ko">${escapeHtml(line.ko)}</div>${hasHangul(line.ko) ? `<button class="speak-btn" type="button" data-speak-ko="${escapeHtml(line.ko)}" data-speak-mode="sentence" aria-label="${escapeHtml(koreanSpeechLabel(line.ko))}" title="${escapeHtml(koreanSpeechLabel(line.ko))}">${speakIcon}</button>` : ""}</div>${reveal ? `<div class="line-zh">${escapeHtml(lineTranslation(line))}</div><div class="line-guide">${escapeHtml(lineGuide(line))}</div>` : ""}</div></div>`).join("")}</div>
                        <aside class="dialogue-side">${learningPoints.length && reveal ? `<section class="dialogue-mini-panel"><h3>${escapeHtml(t("readingTips"))}</h3><ul class="dialogue-points">${learningPoints.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul></section>` : ""}
                        ${rolePlays.length ? `<details class="dialogue-mini-panel" open><summary>${escapeHtml(t("rolePractice"))}</summary><div class="role-task-grid">${rolePlays.map(task => `<div class="role-task"><h3>${escapeHtml(taskTitle(task))}</h3>${reveal ? `<div class="muted">${escapeHtml(taskPrompt(task))}</div>` : ""}<div class="drill-answer">${escapeHtml(task.answerKo)}</div></div>`).join("")}</div></details>` : ""}
                        ${drills.length ? `<details class="dialogue-mini-panel"><summary>${escapeHtml(t("substitutionPractice"))}</summary>${drills.map(drill => `<div class="drill">${reveal ? `<div>${escapeHtml(taskPrompt(drill))}</div>` : ""}<div class="muted">${escapeHtml(t("patternLabel"))}：${escapeHtml(drill.pattern)}</div><div class="drill-answer">${escapeHtml(drill.answerKo)}</div></div>`).join("")}</details>` : ""}</aside></div>
                    </section>`;
                }).join("")}`;
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
            if (activeTab === "dialogue") return renderDialogue(lesson);
            if (activeTab === "culture") return renderCulture(lesson);
            if (activeTab === "practice") return renderPractice(lesson);
            return renderOverview(lesson);
        }

        return Object.freeze({ renderTodo, renderOverview, renderVocabulary, renderDialogue, renderCulture, renderPractice, renderLoading, renderLoadError, renderActiveTab });
    }

    return Object.freeze({ create });
});

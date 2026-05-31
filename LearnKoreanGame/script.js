let vocabDB = [];
let sentenceDB = [];
let activeVocabPool = [];
let activeSentencePool = [];
const loadedDataScripts = new Set();
const lessonGuideVocabCache = new Map();
const lessonGuideVocabConfig = {
    L1: {
        dataScript: 'lesson_data_l1.js',
        dataGlobal: 'lessonGuideL1',
        chunksGlobal: 'lessonGuideL1LessonChunks',
        hasEnglishVocab: true
    },
    L2: {
        dataScript: 'lesson_data_l2.js',
        dataGlobal: 'lessonGuideL2',
        chunksGlobal: 'lessonGuideL2LessonChunks',
        hasEnglishVocab: true
    },
    L3: {
        dataScript: 'lesson_data_l3.js',
        dataGlobal: 'lessonGuideL3',
        chunksGlobal: 'lessonGuideL3LessonChunks',
        hasEnglishVocab: false,
        allowMeaningFallback: true
    },
    L4: {
        dataScript: 'lesson_data_l4.js',
        dataGlobal: 'lessonGuideL4',
        chunksGlobal: 'lessonGuideL4LessonChunks',
        hasEnglishVocab: true
    }
};

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function versionedAsset(src) {
    const version = new URLSearchParams(window.location.search).get('v');
    return version ? `${src}?v=${encodeURIComponent(version)}` : src;
}

function loadScriptOnce(src) {
    const absoluteSrc = new URL(versionedAsset(src), window.location.href).href;
    if (loadedDataScripts.has(absoluteSrc)) return Promise.resolve();

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = absoluteSrc;
        script.async = true;
        script.onload = () => {
            loadedDataScripts.add(absoluteSrc);
            resolve();
        };
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
    });
}

function resolveLoadedGlobal(name) {
    if (!name) return undefined;
    if (window[name] !== undefined) return window[name];

    try {
        return window.eval(name);
    } catch (_) {
        return undefined;
    }
}

function isGameVocabularyLabel(ko) {
    if (ko === '어휘' || ko === '제목') return true;
    if (/관련 어휘$|실천 어휘$|선거 어휘$/.test(ko)) return true;
    if (/말과 관련된 한국 속담/.test(ko)) return true;
    if (/(^|\s|\/)(V|A|N|동|형)[-/]/.test(ko)) return true;
    return false;
}

function normalizeLessonGuideWord(item, lang = currentLang, options = {}) {
    const ko = String(item?.ko || '').trim();
    const zh = String(item?.zh || '').trim();
    const en = String(item?.translations?.en?.meaning || item?.en || '').trim();
    const exampleKo = String(item?.exampleKo || '').trim();
    const exampleZh = String(item?.exampleZh || '').trim();
    const exampleEn = String(item?.translations?.en?.example || item?.exampleEn || '').trim();

    if (!ko || !zh) return null;
    if (lang === 'EN' && !en && !options.allowMeaningFallback) return null;
    if (isGameVocabularyLabel(ko)) return null;
    return {
        ko,
        zh,
        en: en || zh,
        hasEnglishMeaning: Boolean(en),
        hasEnglishExample: Boolean(exampleEn),
        exampleKo,
        exampleZh,
        exampleEn,
        pos: item?.pos || '',
        page: item?.page || '',
        source: item?.source || '',
        cloze: item?.cloze
    };
}

async function loadLessonGuideVocab(level, lang = currentLang) {
    const cacheKey = `${level}:${lang}`;
    if (lessonGuideVocabCache.has(cacheKey)) return lessonGuideVocabCache.get(cacheKey);

    const guideConfig = lessonGuideVocabConfig[level];
    if (!guideConfig) return [];
    if (lang === 'EN' && !guideConfig.hasEnglishVocab && !guideConfig.allowMeaningFallback) return [];

    await loadScriptOnce(guideConfig.dataScript);
    const lessonData = resolveLoadedGlobal(guideConfig.dataGlobal);
    if (!lessonData?.lessons?.length) return [];

    await Promise.all(lessonData.lessons
        .filter(lesson => lesson.chunk)
        .map(lesson => loadScriptOnce(lesson.chunk)));

    const seen = new Set();
    const words = [];
    Object.values(window[guideConfig.chunksGlobal] || {}).forEach(lesson => {
        (lesson.vocabulary || []).forEach(item => {
            const normalized = normalizeLessonGuideWord(item, lang, {
                allowMeaningFallback: Boolean(guideConfig.allowMeaningFallback)
            });
            if (!normalized || seen.has(normalized.ko)) return;
            seen.add(normalized.ko);
            words.push(normalized);
        });
    });

    lessonGuideVocabCache.set(cacheKey, words);
    return words;
}

function currentModeUsesVocabulary() {
    return Boolean(currentMode) && currentMode !== 'sentenceBuilder';
}

async function loadDataByLevel() {
    const level = document.getElementById('level-selector').value;
    const fallbackVocab = kiipData.vocab[level] || kiipData.vocab['L1'];

    vocabDB = fallbackVocab;
    if (currentModeUsesVocabulary()) {
        try {
            const lessonGuideVocab = await loadLessonGuideVocab(level, currentLang);
            vocabDB = lessonGuideVocab.length ? lessonGuideVocab : fallbackVocab;
        } catch (error) {
            console.warn(error);
            vocabDB = fallbackVocab;
        }
    }

    sentenceDB = kiipData.sentences[level] || kiipData.sentences['L1'];
    activeVocabPool = shuffleArray(vocabDB);
    activeSentencePool = shuffleArray(sentenceDB);
}

const localeStorageKey = 'lessonGuideLocale';
const uiStrings = {
    'EN': {
        scoreLabel: 'Total EXP', startBtn: 'Start Game', restartBtn: 'Play Again', menuBtn: 'Back to Menu',
        loadingBtn: 'Loading...',
        modes: {
            wordPop: { title: 'Word Pop', desc: 'Match falling words before they hit the bottom.' },
            sonicCatch: { title: 'Sonic Catch', desc: 'Listen to the pronunciation and select the correct meaning.' },
            wordLink: { title: 'Word Link', desc: 'Connect five Korean words to their meanings.' },
            sentenceGap: { title: 'Sentence Gap', desc: 'Fill the missing Korean word in real example sentences.' },
            sentenceBuilder: { title: 'Sentence Builder', desc: 'Rearrange the blocks to form the correct Korean sentence.' },
            survival: { title: 'Boss Survival', desc: 'Endless mode! Don\'t let the words drop. You have 3 lives.' }
        }
    },
    'ZH': {
        scoreLabel: '总经验', startBtn: '开始游戏', restartBtn: '再玩一次', menuBtn: '返回大厅',
        loadingBtn: '加载中...',
        modes: {
            wordPop: { title: '词汇消消乐', desc: '在单词掉落到底部前，选出它的正确意思。' },
            sonicCatch: { title: '听音辨位', desc: '聆听韩语发音，选出正确的翻译。' },
            wordLink: { title: '连线消消乐', desc: '选择左边韩语词，再选择右边中文意思，正确就消除。' },
            sentenceGap: { title: '例句补空', desc: '在真实例句里补回缺失的韩语词。' },
            sentenceBuilder: { title: '句子接龙', desc: '将打乱的韩语词块拖拽排序，还原正确句型。' },
            survival: { title: '终极生存战', desc: '无尽挑战！漏掉单词会扣血，你有 3 条命。' }
        }
    }
};

function localeToGameLang(locale) {
    return locale === 'en' ? 'EN' : 'ZH';
}

function gameLangToLocale(lang) {
    return lang === 'EN' ? 'en' : 'zh-CN';
}

function languageLabel(lang) {
    return lang === 'EN' ? 'EN' : '中文';
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

let currentLang = localeToGameLang(localStorage.getItem(localeStorageKey));
let globalScore = 0;
let currentMode = null; // 'wordPop', 'sonicCatch', 'sentenceBuilder', 'survival'
let isPlaying = false;
let gameLoopInterval = null;

// Game State Variables
let score = 0;
let lives = 3;
let currentItem = null;
let currentY = -80;
let fallSpeed = 0.5;

// DOM Elements
const globalScoreEl = document.getElementById('global-score');
const uiGlobalScoreEl = document.getElementById('ui-global-score');
const currentModeBadge = document.getElementById('current-mode-badge');
const langToggleBtn = document.getElementById('lang-toggle');
const currentLangText = document.getElementById('current-lang-text');
const appContainer = document.querySelector('.app-container');

// Screens
const screenMenu = document.getElementById('screen-menu');
const screenGameplay = document.getElementById('screen-gameplay');
const screenSentence = document.getElementById('screen-sentence');
const overlayStart = document.getElementById('overlay-start');
const overlayGameover = document.getElementById('overlay-gameover');

// Game UI Elements
const gameInfoBar = document.querySelector('.game-info-bar');
const playArea = document.getElementById('play-area');
const optionsGrid = document.getElementById('options-grid');
const playerLifeEl = document.getElementById('player-life');

// Sentence Builder UI
const sentenceHint = document.getElementById('sentence-hint');
const builderSlots = document.getElementById('builder-slots');
const availableWords = document.getElementById('available-words');

// Buttons
document.getElementById('btn-home').addEventListener('click', showMenu);
document.getElementById('btn-back-menu').addEventListener('click', showMenu);
document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-restart').addEventListener('click', startGame);

// Init Language Toggle
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'EN' ? 'ZH' : 'EN';
    localStorage.setItem(localeStorageKey, gameLangToLocale(currentLang));
    localStorage.setItem('lessonGuideUiLocale', gameLangToLocale(currentLang));
    localStorage.setItem('lessonGuideTranslationLocale', gameLangToLocale(currentLang));
    updateUILanguage();
});

// Setup Menu Cards
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', () => {
        currentMode = card.getAttribute('data-mode');
        showStartScreen();
    });
});

function updateUILanguage() {
    document.documentElement.lang = currentLang === 'EN' ? 'en' : 'zh-CN';
    currentLangText.textContent = languageLabel(currentLang);
    langToggleBtn.setAttribute('aria-label', currentLang === 'EN' ? 'Switch to Chinese' : '切换到英文');
    langToggleBtn.setAttribute('title', currentLang === 'EN' ? 'Switch to Chinese' : '切换到英文');
    const s = uiStrings[currentLang];
    uiGlobalScoreEl.textContent = s.scoreLabel;
    
    document.getElementById('ui-btn-start').textContent = s.startBtn;
    document.getElementById('ui-btn-restart').textContent = s.restartBtn;
    document.getElementById('ui-btn-menu').textContent = s.menuBtn;
    document.getElementById('ui-menu-title').textContent = currentLang === 'EN' ? 'Select a Challenge' : '选择挑战模式';
    
    // Update Menu Cards
    document.getElementById('ui-mode-word').textContent = s.modes.wordPop.title;
    document.getElementById('ui-desc-word').textContent = s.modes.wordPop.desc;
    document.getElementById('ui-mode-sonic').textContent = s.modes.sonicCatch.title;
    document.getElementById('ui-desc-sonic').textContent = s.modes.sonicCatch.desc;
    document.getElementById('ui-mode-link').textContent = s.modes.wordLink.title;
    document.getElementById('ui-desc-link').textContent = s.modes.wordLink.desc;
    document.getElementById('ui-mode-gap').textContent = s.modes.sentenceGap.title;
    document.getElementById('ui-desc-gap').textContent = s.modes.sentenceGap.desc;
    document.getElementById('ui-mode-sentence').textContent = s.modes.sentenceBuilder.title;
    document.getElementById('ui-desc-sentence').textContent = s.modes.sentenceBuilder.desc;
    document.getElementById('ui-mode-survival').textContent = s.modes.survival.title;
    document.getElementById('ui-desc-survival').textContent = s.modes.survival.desc;

    if (currentMode) {
        currentModeBadge.textContent = s.modes[currentMode].title;
    } else {
        currentModeBadge.textContent = currentLang === 'EN' ? 'Main Menu' : '游戏大厅';
    }
}

window.addEventListener('storage', event => {
    if (event.key !== localeStorageKey) return;
    const nextLang = localeToGameLang(event.newValue);
    if (nextLang === currentLang) return;
    currentLang = nextLang;
    updateUILanguage();
});

function showMenu() {
    isPlaying = false;
    currentMode = null;
    hideAllScreens();
    screenMenu.classList.add('active');
    updateUILanguage();
    requestAnimationFrame(resetViewportScroll);
}

function showStartScreen() {
    const s = uiStrings[currentLang].modes[currentMode];
    document.getElementById('start-title').textContent = s.title;
    document.getElementById('start-desc').textContent = s.desc;
    
    // Set icon based on mode
    const iconMap = { wordPop: '🎯', sonicCatch: '🎧', wordLink: '🔗', sentenceGap: '✍️', sentenceBuilder: '🧩', survival: '🐉' };
    document.getElementById('start-icon').textContent = iconMap[currentMode];
    
    currentModeBadge.textContent = s.title;
    overlayStart.classList.remove('hidden');
    overlayGameover.classList.add('hidden');
}

function hideAllScreens() {
    screenMenu.classList.remove('active');
    screenGameplay.classList.remove('active');
    screenSentence.classList.remove('active');
    overlayStart.classList.add('hidden');
    overlayGameover.classList.add('hidden');
}

function resetViewportScroll() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (appContainer) appContainer.scrollTop = 0;
}

function setGameLoading(isLoading) {
    document.getElementById('btn-start').disabled = isLoading;
    document.getElementById('btn-restart').disabled = isLoading;
    const strings = uiStrings[currentLang];
    document.getElementById('ui-btn-start').textContent = isLoading ? strings.loadingBtn : strings.startBtn;
    document.getElementById('ui-btn-restart').textContent = isLoading ? strings.loadingBtn : strings.restartBtn;
}

async function startGame() {
    score = 0;
    lives = 3;
    fallSpeed = currentMode === 'survival' ? 1.0 : 0.5;
    isPlaying = true;

    setGameLoading(true);
    try {
        await loadDataByLevel(); // Load data based on selected level before starting
    } finally {
        setGameLoading(false);
    }

    if (!isPlaying) return;
    hideAllScreens();

    if (currentMode === 'wordLink') resetWordLinkScheduler();
    if (currentMode === 'sentenceGap') resetSentenceGapScheduler();
    
    if (currentMode === 'sentenceBuilder') {
        screenSentence.classList.add('active');
        setupSentenceBuilder();
    } else {
        screenGameplay.classList.add('active');
        playArea.innerHTML = '';
        optionsGrid.innerHTML = '';
        playArea.classList.remove('word-link-area');
        playArea.classList.remove('sentence-gap-area');
        optionsGrid.classList.remove('hidden');
        gameInfoBar.classList.remove('hidden');
        
        if (currentMode === 'survival') {
            playerLifeEl.classList.remove('hidden');
            updateLivesUI();
        } else {
            playerLifeEl.classList.add('hidden');
        }

        if (currentMode === 'sonicCatch') {
            setupSonicCatch();
        } else if (currentMode === 'wordLink') {
            setupWordLink();
        } else if (currentMode === 'sentenceGap') {
            setupSentenceGap();
        } else {
            // Word Pop or Survival
            spawnFallingWord();
            requestAnimationFrame(gameLoop);
        }
    }

    requestAnimationFrame(resetViewportScroll);
}

function gameOver() {
    isPlaying = false;
    document.getElementById('final-score').textContent = score;
    overlayGameover.classList.remove('hidden');
    
    // Add to global score
    globalScore += score;
    globalScoreEl.textContent = globalScore;
}

function showFloatingText(element, text, color = 'var(--success)') {
    const rect = element.getBoundingClientRect();
    const floatingText = document.createElement('div');
    floatingText.className = 'floating-text';
    floatingText.textContent = text;
    floatingText.style.color = color;
    floatingText.style.left = (rect.left + rect.width / 2) + 'px';
    floatingText.style.top = rect.top + 'px';
    document.body.appendChild(floatingText);
    setTimeout(() => floatingText.remove(), 1000);
}

// ---------------------------------------------------------
// MODE 1 & 4: Word Pop / Survival
// ---------------------------------------------------------
let fallingEl = null;

function spawnFallingWord() {
    if (!isPlaying) return;
    
    if (activeVocabPool.length === 0) {
        activeVocabPool = shuffleArray(vocabDB);
    }
    currentItem = activeVocabPool.pop();
    
    playArea.innerHTML = '';
    fallingEl = document.createElement('div');
    fallingEl.className = 'word-bubble';
    fallingEl.textContent = currentItem.ko;
    
    currentY = -80;
    fallingEl.style.top = currentY + 'px';
    playArea.appendChild(fallingEl);
    
    generateVocabOptions(currentItem);
}

function gameLoop() {
    if (!isPlaying || (currentMode !== 'wordPop' && currentMode !== 'survival')) return;
    
    if (fallingEl) {
        currentY += fallSpeed;
        fallingEl.style.top = currentY + 'px';
        
        const gameAreaRect = playArea.getBoundingClientRect();
        const wordRect = fallingEl.getBoundingClientRect();
        
        if (wordRect.bottom >= gameAreaRect.bottom) {
            handleFallMiss();
        }
    }
    requestAnimationFrame(gameLoop);
}

function handleFallMiss() {
    fallingEl.classList.add('wrong-anim');
    
    if (currentMode === 'survival') {
        lives--;
        updateLivesUI();
        if (lives <= 0) {
            gameOver();
            return;
        }
        setTimeout(spawnFallingWord, 500);
    } else {
        gameOver();
    }
    fallingEl = null;
}

function updateLivesUI() {
    playerLifeEl.textContent = '❤️'.repeat(lives) + '🖤'.repeat(3 - lives);
}

// ---------------------------------------------------------
// MODE 2: Sonic Catch
// ---------------------------------------------------------
function setupSonicCatch() {
    playArea.innerHTML = '';
    const speakerBtn = document.createElement('div');
    speakerBtn.className = 'speaker-btn';
    speakerBtn.textContent = '🔊';
    playArea.appendChild(speakerBtn);

    speakerBtn.addEventListener('click', () => {
        if (!currentItem) return;
        speakerBtn.classList.add('playing');
        speakKorean(currentItem.ko, { mode: 'word' });
        setTimeout(() => speakerBtn.classList.remove('playing'), 1000);
    });

    nextSonicCatchRound();
}

function nextSonicCatchRound() {
    if (!isPlaying) return;
    
    if (activeVocabPool.length === 0) {
        activeVocabPool = shuffleArray(vocabDB);
    }
    currentItem = activeVocabPool.pop();
    
    generateVocabOptions(currentItem);
    
    // Auto play sound once
    setTimeout(() => {
        const speakerBtn = playArea.querySelector('.speaker-btn');
        if (speakerBtn) speakerBtn.click();
    }, 500);
}

let gameSpeechRunId = 0;
let gamePreferredKoreanVoice = null;
let gameKoreanVoicePromise = null;

function hasHangulText(value) {
    return /[가-힣]/.test(String(value || ''));
}

function normalizeSpeechText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function scoreGameKoreanVoice(voice) {
    const name = voice.name.toLowerCase();
    const lang = voice.lang?.toLowerCase() || '';
    const femaleHints = ['sora', 'yuna', 'sunhi', 'heami', 'nara', 'kyuri', 'jimin', 'ji-min', 'female', '여성'];
    const naturalHints = ['natural', 'neural', 'premium', 'enhanced', 'online', 'google', 'microsoft'];
    const roboticHints = ['compact', 'male', 'hyunsu', 'injoon', 'hoon', 'minjun', '남성'];
    const femaleScore = femaleHints.reduce((score, hint, index) => score + (name.includes(hint) ? 120 - index : 0), 0);
    const naturalScore = naturalHints.reduce((score, hint, index) => score + (name.includes(hint) ? 70 - index : 0), 0);
    const roboticPenalty = roboticHints.reduce((score, hint) => score + (name.includes(hint) ? 80 : 0), 0);
    const koKrScore = lang === 'ko-kr' ? 30 : 0;
    return femaleScore + naturalScore + koKrScore - roboticPenalty;
}

function pickGameKoreanVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices?.() || [];
    const koreanVoices = voices.filter(voice => voice.lang?.toLowerCase().startsWith('ko'));
    if (!koreanVoices.length) return null;

    const rankedVoices = koreanVoices
        .map(voice => ({ voice, score: scoreGameKoreanVoice(voice) }))
        .sort((a, b) => b.score - a.score);
    gamePreferredKoreanVoice = rankedVoices[0].score > 35
        ? rankedVoices[0].voice
        : koreanVoices[1] || rankedVoices[0].voice;
    return gamePreferredKoreanVoice;
}

function waitForGameKoreanVoice() {
    if (!('speechSynthesis' in window)) return Promise.resolve(null);
    const readyVoice = gamePreferredKoreanVoice || pickGameKoreanVoice();
    if (readyVoice) return Promise.resolve(readyVoice);
    if (gameKoreanVoicePromise) return gameKoreanVoicePromise;

    gameKoreanVoicePromise = new Promise(resolve => {
        const finish = () => {
            const voice = pickGameKoreanVoice();
            if (!voice) return;
            cleanup();
            resolve(voice);
        };
        const cleanup = () => {
            window.clearTimeout(timeoutId);
            window.speechSynthesis.removeEventListener?.('voiceschanged', finish);
        };
        const timeoutId = window.setTimeout(() => {
            cleanup();
            resolve(pickGameKoreanVoice());
        }, 1600);

        window.speechSynthesis.addEventListener?.('voiceschanged', finish);
        window.speechSynthesis.getVoices?.();
    }).finally(() => {
        gameKoreanVoicePromise = null;
    });

    return gameKoreanVoicePromise;
}

function splitGameKoreanSpeech(text, mode) {
    const normalized = normalizeSpeechText(text);
    if (!normalized || mode === 'word' || normalized.length < 24) return [normalized].filter(Boolean);

    const protectedText = normalized.replace(/([.?!])\s+/g, '$1|');
    const chunks = protectedText.split('|').flatMap(part => {
        if (part.length < 30) return [part];
        return part
            .replace(/(는데|은데|인데|지만|면서|으면|고)\s+/g, '$1|')
            .split('|');
    });

    return chunks.map(chunk => chunk.trim()).filter(Boolean);
}

async function speakKorean(text, options = {}) {
    if (!('speechSynthesis' in window)) return;
    const mode = options.mode || 'word';
    const normalizedText = normalizeSpeechText(text);
    if (!hasHangulText(normalizedText)) return;

    const runId = ++gameSpeechRunId;
    window.speechSynthesis.cancel();

    const voice = await waitForGameKoreanVoice();
    if (runId !== gameSpeechRunId || !voice) return;

    const chunks = splitGameKoreanSpeech(normalizedText, mode);
    const speakChunk = index => {
        if (runId !== gameSpeechRunId || index >= chunks.length) return;

        const utterance = new SpeechSynthesisUtterance(chunks[index]);
        utterance.lang = 'ko-KR';
        utterance.rate = mode === 'sentence' ? 0.78 : 0.82;
        utterance.pitch = mode === 'sentence' ? 0.92 : 0.98;
        utterance.volume = 1;
        utterance.voice = voice;
        utterance.onend = () => window.setTimeout(() => speakChunk(index + 1), mode === 'sentence' ? 90 : 0);
        window.speechSynthesis.speak(utterance);
    };

    speakChunk(0);
}

// ---------------------------------------------------------
// Shared Options Generator (Vocab)
// ---------------------------------------------------------
function generateVocabOptions(correctObj) {
    optionsGrid.innerHTML = '';
    const options = [correctObj];
    while(options.length < 4) {
        const rand = vocabDB[Math.floor(Math.random() * vocabDB.length)];
        if (!options.includes(rand)) options.push(rand);
    }
    options.sort(() => Math.random() - 0.5);
    
    const langKey = currentLang.toLowerCase();
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt[langKey];
        btn.onclick = () => handleVocabClick(opt, correctObj, btn);
        optionsGrid.appendChild(btn);
    });
}

function handleVocabClick(selected, correct, btn) {
    if (!isPlaying) return;
    
    const allBtns = optionsGrid.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    
    if (selected.ko === correct.ko) {
        // Correct
        btn.classList.add('correct');
        score += (currentMode === 'survival' ? 2 : 1);
        showFloatingText(btn, '+' + (currentMode === 'survival' ? 2 : 1));
        
        if (currentMode === 'wordPop' || currentMode === 'survival') {
            if (fallingEl) fallingEl.classList.add('correct-anim');
            fallSpeed += 0.1; // Speed up
            setTimeout(spawnFallingWord, 400);
        } else if (currentMode === 'sonicCatch') {
            setTimeout(nextSonicCatchRound, 1000);
        }
    } else {
        // Wrong
        btn.classList.add('wrong');
        if (currentMode === 'survival') {
            lives--;
            updateLivesUI();
            if (lives <= 0) gameOver();
            else setTimeout(spawnFallingWord, 500);
        } else {
            gameOver();
        }
    }
}

// ---------------------------------------------------------
// MODE 5: Word Link
// ---------------------------------------------------------
const WORD_LINK_GROUP_SIZE = 5;
const WORD_LINK_RECENT_MAX = 20;
const WORD_LINK_REVIEW_DELAY = 2;
const WORD_LINK_REVIEW_PER_GROUP = 2;
let wordLinkSelected = null;
let wordLinkRemaining = 0;
let wordLinkMatched = 0;
let wordLinkGroupIndex = 0;
let wordLinkCurrentGroupSize = WORD_LINK_GROUP_SIZE;
let wordLinkQueue = [];
let wordLinkRecentKeys = [];
let wordLinkReviewQueue = [];

function resetWordLinkScheduler() {
    wordLinkSelected = null;
    wordLinkRemaining = 0;
    wordLinkMatched = 0;
    wordLinkGroupIndex = 0;
    wordLinkCurrentGroupSize = Math.min(WORD_LINK_GROUP_SIZE, vocabDB.length);
    wordLinkQueue = shuffleArray(vocabDB);
    wordLinkRecentKeys = [];
    wordLinkReviewQueue = [];
}

function getWordLinkKey(item) {
    return item.ko;
}

function getWordLinkItemByKey(key) {
    return vocabDB.find(item => getWordLinkKey(item) === key);
}

function refillWordLinkQueue(excludedKeys = new Set()) {
    const freshItems = vocabDB.filter(item => !excludedKeys.has(getWordLinkKey(item)));
    wordLinkQueue = shuffleArray(freshItems.length > 0 ? freshItems : vocabDB);
}

function pullWordLinkItems(count, excludedKeys, avoidRecent = true) {
    const picked = [];
    const recentKeys = avoidRecent ? new Set(wordLinkRecentKeys) : new Set();

    while (picked.length < count && vocabDB.length > 0) {
        if (wordLinkQueue.length === 0) {
            refillWordLinkQueue(new Set([...excludedKeys, ...recentKeys]));
        }

        const blockedKeys = new Set([...excludedKeys, ...recentKeys]);
        let index = wordLinkQueue.findIndex(item => !blockedKeys.has(getWordLinkKey(item)));

        if (index === -1) {
            if (avoidRecent) break;

            refillWordLinkQueue(excludedKeys);
            index = wordLinkQueue.findIndex(item => !excludedKeys.has(getWordLinkKey(item)));
            if (index === -1) break;
        }

        const [item] = wordLinkQueue.splice(index, 1);
        const key = getWordLinkKey(item);
        picked.push(item);
        excludedKeys.add(key);
    }

    return picked;
}

function rememberWordLinkGroup(group) {
    const recentLimit = Math.min(WORD_LINK_RECENT_MAX, Math.max(0, vocabDB.length - wordLinkCurrentGroupSize));

    group.forEach(item => {
        const key = getWordLinkKey(item);
        wordLinkRecentKeys = wordLinkRecentKeys.filter(recentKey => recentKey !== key);
        wordLinkRecentKeys.push(key);
    });

    if (wordLinkRecentKeys.length > recentLimit) {
        wordLinkRecentKeys = wordLinkRecentKeys.slice(-recentLimit);
    }
}

function queueWordLinkReview(key) {
    const item = getWordLinkItemByKey(key);
    if (!item) return;

    wordLinkReviewQueue = wordLinkReviewQueue.filter(entry => getWordLinkKey(entry.item) !== key);
    wordLinkReviewQueue.push({
        item,
        availableAtGroup: wordLinkGroupIndex + WORD_LINK_REVIEW_DELAY
    });
}

function takeWordLinkGroup() {
    wordLinkCurrentGroupSize = Math.min(WORD_LINK_GROUP_SIZE, vocabDB.length);
    if (wordLinkCurrentGroupSize === 0) {
        return [];
    }

    const group = [];
    const selectedKeys = new Set();
    const dueReviews = shuffleArray(
        wordLinkReviewQueue.filter(entry => entry.availableAtGroup <= wordLinkGroupIndex)
    );

    dueReviews.forEach(entry => {
        if (group.length >= Math.min(WORD_LINK_REVIEW_PER_GROUP, wordLinkCurrentGroupSize)) return;

        const key = getWordLinkKey(entry.item);
        if (selectedKeys.has(key)) return;

        group.push(entry.item);
        selectedKeys.add(key);
    });

    if (selectedKeys.size > 0) {
        wordLinkReviewQueue = wordLinkReviewQueue.filter(entry => !selectedKeys.has(getWordLinkKey(entry.item)));
        wordLinkQueue = wordLinkQueue.filter(item => !selectedKeys.has(getWordLinkKey(item)));
    }

    group.push(...pullWordLinkItems(wordLinkCurrentGroupSize - group.length, selectedKeys, true));

    if (group.length < wordLinkCurrentGroupSize) {
        group.push(...pullWordLinkItems(wordLinkCurrentGroupSize - group.length, selectedKeys, false));
    }

    rememberWordLinkGroup(group);
    return group;
}

function setupWordLink() {
    playArea.innerHTML = '';
    optionsGrid.innerHTML = '';
    optionsGrid.classList.add('hidden');
    gameInfoBar.classList.add('hidden');
    playArea.classList.remove('sentence-gap-area');
    playArea.classList.add('word-link-area');

    wordLinkGroupIndex++;
    const group = takeWordLinkGroup();
    wordLinkRemaining = group.length;
    wordLinkMatched = 0;
    wordLinkSelected = null;

    const langKey = currentLang.toLowerCase();
    const board = document.createElement('div');
    board.className = 'word-link-board';
    board.innerHTML = `
        <div class="word-link-hud">
            <div class="word-link-round">
                <span class="word-link-label">${currentLang === 'EN' ? 'Group' : '第'} ${wordLinkGroupIndex}${currentLang === 'EN' ? '' : ' 组'}</span>
                <strong data-word-link-progress>0/${group.length}</strong>
            </div>
            <div class="word-link-status" aria-live="polite">${currentLang === 'EN' ? 'Select a Korean word, then its meaning.' : '先选韩语词，再选对应意思'}</div>
            <div class="word-link-round-score">+<span data-word-link-score>0</span></div>
        </div>
        <div class="word-link-stage">
            <svg class="word-link-lines" aria-hidden="true"></svg>
            <section class="word-link-panel">
                <div class="word-link-panel-label">한국어</div>
                <div class="word-link-column" data-side="left"></div>
            </section>
            <section class="word-link-panel">
                <div class="word-link-panel-label">${currentLang === 'EN' ? 'Meaning' : '意思'}</div>
                <div class="word-link-column" data-side="right"></div>
            </section>
        </div>
    `;

    const leftColumn = board.querySelector('[data-side="left"]');
    const rightColumn = board.querySelector('[data-side="right"]');
    const leftWords = shuffleArray(group);
    const rightWords = shuffleArray(group);

    leftWords.forEach(item => {
        leftColumn.appendChild(createWordLinkCard(item, 'left', item.ko));
    });

    rightWords.forEach(item => {
        rightColumn.appendChild(createWordLinkCard(item, 'right', item[langKey]));
    });

    playArea.appendChild(board);
    requestAnimationFrame(resetViewportScroll);
}

function createWordLinkCard(item, side, text) {
    const button = document.createElement('button');
    button.className = `word-link-card ${side === 'left' ? 'ko' : 'meaning'}`;
    button.type = 'button';
    button.textContent = text;
    button.dataset.ko = item.ko;
    button.dataset.side = side;
    button.onclick = () => handleWordLinkSelect(button);
    return button;
}

function handleWordLinkSelect(button) {
    if (!isPlaying || button.classList.contains('matched')) return;

    const side = button.dataset.side;
    const board = button.closest('.word-link-board');

    if (!wordLinkSelected || wordLinkSelected.dataset.side === side) {
        board.querySelectorAll(`.word-link-card[data-side="${side}"]`).forEach(card => card.classList.remove('selected'));
        button.classList.add('selected');
        wordLinkSelected = button;
        return;
    }

    const left = side === 'left' ? button : wordLinkSelected;
    const right = side === 'right' ? button : wordLinkSelected;

    if (left.dataset.ko === right.dataset.ko) {
        handleWordLinkCorrect(board, left, right);
    } else {
        handleWordLinkWrong(board, left, right);
    }
}

function handleWordLinkCorrect(board, left, right) {
    drawWordLinkLine(board, left, right);
    [left, right].forEach(card => {
        card.classList.remove('selected', 'wrong');
        card.classList.add('matched');
        card.disabled = true;
    });
    score += 1;
    globalScore += 1;
    globalScoreEl.textContent = globalScore;
    showFloatingText(right, '+1');
    wordLinkSelected = null;
    wordLinkRemaining--;
    wordLinkMatched++;
    updateWordLinkStatus(board, currentLang === 'EN' ? 'Matched!' : '匹配正确');
    updateWordLinkHud(board);

    setTimeout(() => {
        left.classList.add('removed');
        right.classList.add('removed');
    }, 140);

    setTimeout(() => {
        left.remove();
        right.remove();
    }, 300);

    if (wordLinkRemaining <= 0) {
        board.classList.add('complete');
        updateWordLinkStatus(board, currentLang === 'EN' ? 'Nice. Loading next group...' : '很好，准备下一组...');
        setTimeout(setupWordLink, 950);
    }
}

function handleWordLinkWrong(board, left, right) {
    [left, right].forEach(card => card.classList.add('wrong'));
    queueWordLinkReview(left.dataset.ko);
    updateWordLinkStatus(board, currentLang === 'EN' ? 'Try another meaning.' : '不对，换一个解释试试');

    setTimeout(() => {
        [left, right].forEach(card => card.classList.remove('selected', 'wrong'));
        wordLinkSelected = null;
    }, 520);
}

function updateWordLinkStatus(board, message) {
    const status = board.querySelector('.word-link-status');
    status.textContent = message;
}

function updateWordLinkHud(board) {
    const progress = board.querySelector('[data-word-link-progress]');
    const roundScore = board.querySelector('[data-word-link-score]');
    if (progress) progress.textContent = `${wordLinkMatched}/${wordLinkCurrentGroupSize}`;
    if (roundScore) roundScore.textContent = wordLinkMatched;
}

function drawWordLinkLine(board, left, right) {
    const stage = board.querySelector('.word-link-stage');
    const svg = board.querySelector('.word-link-lines');
    const boardRect = stage.getBoundingClientRect();
    const leftRect = left.getBoundingClientRect();
    const rightRect = right.getBoundingClientRect();
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', leftRect.right - boardRect.left);
    line.setAttribute('y1', leftRect.top + leftRect.height / 2 - boardRect.top);
    line.setAttribute('x2', rightRect.left - boardRect.left);
    line.setAttribute('y2', rightRect.top + rightRect.height / 2 - boardRect.top);
    line.setAttribute('class', 'word-link-line');
    svg.appendChild(line);
    setTimeout(() => line.remove(), 420);
}

// ---------------------------------------------------------
// MODE 6: Sentence Gap
// ---------------------------------------------------------
const SENTENCE_GAP_ROUND_SIZE = 10;
const SENTENCE_GAP_RECENT_MAX = 30;
let sentenceGapRound = [];
let sentenceGapIndex = 0;
let sentenceGapCorrect = 0;
let sentenceGapReviewItems = [];
let sentenceGapRecentKeys = [];
let sentenceGapMistakes = [];

function resetSentenceGapScheduler() {
    sentenceGapRound = [];
    sentenceGapIndex = 0;
    sentenceGapCorrect = 0;
    sentenceGapRecentKeys = [];
    sentenceGapMistakes = [];
}

function sentenceGapStrings() {
    return currentLang === 'EN'
        ? {
            question: 'Question',
            of: 'of',
            score: 'Score',
            prompt: 'Choose the Korean word that completes the sentence.',
            correct: 'Nice fit.',
            wrong: 'Not this one. Review the full sentence.',
            continue: 'Continue',
            finish: 'Round complete',
            loadingNext: 'Next sentence...',
            noData: 'Not enough example sentences for this level yet.'
        }
        : {
            question: '第',
            of: '题 / 共',
            score: '得分',
            prompt: '选择能补完整句子的韩语词。',
            correct: '补得漂亮。',
            wrong: '不是这个，看看完整句。',
            continue: '继续',
            finish: '本轮完成',
            loadingNext: '下一题...',
            noData: '这个等级的例句题目还不够。'
        };
}

function createSentenceGapRound() {
    const cloze = window.KLingoCloze;
    if (!cloze) return [];

    const reviewItems = sentenceGapReviewItems.splice(0, 3);
    const sourceVocab = currentLang === 'EN'
        ? vocabDB.filter(item => item.hasEnglishMeaning && item.hasEnglishExample)
        : vocabDB;
    const round = cloze.createClozeRound(sourceVocab, {
        count: SENTENCE_GAP_ROUND_SIZE,
        lang: currentLang,
        reviewItems,
        recentKeys: sentenceGapRecentKeys
    });

    round.forEach(question => {
        sentenceGapRecentKeys = sentenceGapRecentKeys.filter(key => key !== question.key);
        sentenceGapRecentKeys.push(question.key);
    });
    if (sentenceGapRecentKeys.length > SENTENCE_GAP_RECENT_MAX) {
        sentenceGapRecentKeys = sentenceGapRecentKeys.slice(-SENTENCE_GAP_RECENT_MAX);
    }

    return round;
}

function setupSentenceGap() {
    playArea.innerHTML = '';
    optionsGrid.innerHTML = '';
    optionsGrid.classList.add('hidden');
    gameInfoBar.classList.add('hidden');
    playArea.classList.remove('word-link-area');
    playArea.classList.add('sentence-gap-area');

    sentenceGapRound = createSentenceGapRound();
    sentenceGapIndex = 0;
    sentenceGapCorrect = 0;
    sentenceGapMistakes = [];

    if (!sentenceGapRound.length) {
        renderSentenceGapEmpty();
        return;
    }

    renderSentenceGapQuestion();
}

function renderSentenceGapEmpty() {
    const text = sentenceGapStrings();
    playArea.innerHTML = `
        <section class="sentence-gap-board empty">
            <div class="sentence-gap-empty-icon">✍️</div>
            <h2>${text.noData}</h2>
        </section>
    `;
}

function renderSentenceGapQuestion() {
    if (!isPlaying) return;
    if (sentenceGapIndex >= sentenceGapRound.length) {
        finishSentenceGapRound();
        return;
    }

    const text = sentenceGapStrings();
    const question = sentenceGapRound[sentenceGapIndex];
    const numberLabel = currentLang === 'EN'
        ? `${text.question} ${sentenceGapIndex + 1} ${text.of} ${sentenceGapRound.length}`
        : `${text.question} ${sentenceGapIndex + 1} ${text.of} ${sentenceGapRound.length}`;

    playArea.innerHTML = `
        <section class="sentence-gap-board">
            <div class="sentence-gap-hud">
                <div class="sentence-gap-pill">${escapeHtml(numberLabel)}</div>
                <div class="sentence-gap-status" data-gap-status>${escapeHtml(text.prompt)}</div>
                <div class="sentence-gap-pill">${escapeHtml(text.score)} ${sentenceGapCorrect}/${sentenceGapRound.length}</div>
            </div>
            <div class="sentence-gap-card">
                <div class="sentence-gap-card-top">
                    <div class="sentence-gap-source">${escapeHtml(formatSentenceGapSource(question))}</div>
                    <button class="sentence-gap-speak" type="button" data-gap-speak aria-label="${currentLang === 'EN' ? 'Play sentence' : '播放例句'}" title="${currentLang === 'EN' ? 'Play sentence' : '播放例句'}">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8 5v14l11-7z"></path>
                        </svg>
                    </button>
                </div>
                <p class="sentence-gap-ko">${highlightSentenceGapBlank(question.promptKo)}</p>
                <div class="sentence-gap-meaning">${escapeHtml(question.meaning)}</div>
            </div>
            <div class="sentence-gap-options">
                ${question.options.map((option, index) => `
                    <button class="sentence-gap-option" type="button" data-gap-option="${index}">
                        ${escapeHtml(option.text)}
                    </button>
                `).join('')}
            </div>
            <div class="sentence-gap-review hidden" data-gap-review>
                <div class="sentence-gap-answer">${escapeHtml(question.exampleKo)}</div>
                <div class="sentence-gap-translation">${escapeHtml(question.translation)}</div>
                <button class="sentence-gap-next" type="button" data-gap-next>${text.continue}</button>
            </div>
        </section>
    `;

    const board = playArea.querySelector('.sentence-gap-board');
    const speakButton = board.querySelector('[data-gap-speak]');
    if (speakButton) {
        speakButton.addEventListener('click', () => speakKorean(question.exampleKo, { mode: 'sentence' }));
    }
    board.querySelectorAll('[data-gap-option]').forEach(button => {
        button.addEventListener('click', () => handleSentenceGapAnswer(button));
    });
}

function formatSentenceGapSource(question) {
    const page = question.page ? `p.${question.page}` : '';
    return [page, question.source].filter(Boolean).join(' · ');
}

function highlightSentenceGapBlank(sentence) {
    const escaped = escapeHtml(sentence);
    return escaped.replace('___', '<span class="sentence-gap-blank">___</span>');
}

function handleSentenceGapAnswer(button) {
    if (!isPlaying) return;

    const question = sentenceGapRound[sentenceGapIndex];
    const option = question.options[Number(button.dataset.gapOption)];
    const board = button.closest('.sentence-gap-board');
    const status = board.querySelector('[data-gap-status]');
    const review = board.querySelector('[data-gap-review]');
    const next = board.querySelector('[data-gap-next]');
    const text = sentenceGapStrings();

    board.querySelectorAll('.sentence-gap-option').forEach(optionButton => {
        optionButton.disabled = true;
        const item = question.options[Number(optionButton.dataset.gapOption)];
        if (item.correct) optionButton.classList.add('correct');
    });

    if (option.correct) {
        sentenceGapCorrect++;
        score += 2;
        button.classList.add('correct');
        status.textContent = text.correct;
        review.classList.remove('hidden');
        if (next) next.classList.add('hidden');
        showFloatingText(button, '+2');
        setTimeout(nextSentenceGapQuestion, 1100);
        return;
    }

    button.classList.add('wrong');
    status.textContent = text.wrong;
    sentenceGapReviewItems = sentenceGapReviewItems.filter(item => item.key !== question.key);
    if (question.sourceCard) sentenceGapReviewItems.push(question.sourceCard);
    sentenceGapMistakes = sentenceGapMistakes.filter(item => item.key !== question.key);
    sentenceGapMistakes.push(question);
    review.classList.remove('hidden');
    next.addEventListener('click', nextSentenceGapQuestion, { once: true });
}

function nextSentenceGapQuestion() {
    sentenceGapIndex++;
    renderSentenceGapQuestion();
}

function finishSentenceGapRound() {
    const text = sentenceGapStrings();
    const accuracy = sentenceGapRound.length
        ? Math.round((sentenceGapCorrect / sentenceGapRound.length) * 100)
        : 0;
    isPlaying = false;
    globalScore += score;
    globalScoreEl.textContent = globalScore;
    playArea.innerHTML = `
        <section class="sentence-gap-board complete sentence-gap-summary">
            <div class="sentence-gap-empty-icon">✓</div>
            <h2>${escapeHtml(text.finish)}</h2>
            <div class="sentence-gap-summary-score">${sentenceGapCorrect}/${sentenceGapRound.length} · ${accuracy}% · +${score}</div>
            ${renderSentenceGapMistakes()}
            <div class="sentence-gap-actions">
                <button class="sentence-gap-next" type="button" data-gap-next-round>${escapeHtml(currentLang === 'EN' ? 'Next Round' : '下一轮')}</button>
                <button class="sentence-gap-next secondary" type="button" data-gap-menu>${escapeHtml(currentLang === 'EN' ? 'Back to Menu' : '返回大厅')}</button>
            </div>
        </section>
    `;
    playArea.querySelector('[data-gap-next-round]')?.addEventListener('click', () => {
        isPlaying = true;
        score = 0;
        setupSentenceGap();
    });
    playArea.querySelector('[data-gap-menu]')?.addEventListener('click', showMenu);
}

function renderSentenceGapMistakes() {
    if (!sentenceGapMistakes.length) {
        return `<p class="sentence-gap-summary-note">${escapeHtml(currentLang === 'EN' ? 'Clean round. No review items.' : '这一轮全对，没有错题。')}</p>`;
    }

    const title = currentLang === 'EN' ? 'Review next' : '下轮复习';
    return `
        <div class="sentence-gap-mistakes">
            <div class="sentence-gap-mistake-title">${escapeHtml(title)}</div>
            ${sentenceGapMistakes.slice(0, 5).map(item => `
                <div class="sentence-gap-mistake-row">
                    <strong>${escapeHtml(item.correctAnswer)}</strong>
                    <span>${escapeHtml(item.meaning || item.translation)}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// ---------------------------------------------------------
// MODE 3: Sentence Builder
// ---------------------------------------------------------
let sentenceParts = [];
let targetSentence = "";

function setupSentenceBuilder() {
    builderSlots.innerHTML = '';
    availableWords.innerHTML = '';
    
    if (activeSentencePool.length === 0) {
        activeSentencePool = shuffleArray(sentenceDB);
    }
    const obj = activeSentencePool.pop();
    
    sentenceHint.textContent = currentLang === 'EN' ? obj.en : obj.zh;
    targetSentence = obj.ko;
    sentenceParts = [...obj.parts];
    
    // Shuffle parts for available words
    const shuffled = [...sentenceParts].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(part => {
        const chip = document.createElement('div');
        chip.className = 'word-chip';
        chip.textContent = part;
        chip.onclick = () => moveChipToSlot(chip);
        availableWords.appendChild(chip);
    });
}

function moveChipToSlot(chip) {
    if (chip.parentNode === availableWords) {
        // Move to builder slots
        chip.classList.add('in-slot');
        builderSlots.appendChild(chip);
        chip.onclick = () => moveChipBack(chip);
    }
    checkSentence();
}

function moveChipBack(chip) {
    if (chip.parentNode === builderSlots) {
        chip.classList.remove('in-slot');
        availableWords.appendChild(chip);
        chip.onclick = () => moveChipToSlot(chip);
    }
}

function checkSentence() {
    const currentChips = Array.from(builderSlots.children);
    if (currentChips.length === sentenceParts.length) {
        const currentSentence = currentChips.map(c => c.textContent).join(' ');
        if (currentSentence === targetSentence) {
            // Correct
            score += 5; // 5 points for a sentence
            showFloatingText(builderSlots, '+5');
            setTimeout(setupSentenceBuilder, 1000);
        } else {
            // Wrong
            builderSlots.style.borderColor = 'var(--danger)';
            setTimeout(() => {
                builderSlots.style.borderColor = 'rgba(255,255,255,0.2)';
                // Return all chips
                currentChips.forEach(c => moveChipBack(c));
            }, 500);
        }
    }
}

// Init Game
document.getElementById('level-selector').addEventListener('change', loadDataByLevel);
loadDataByLevel();
updateUILanguage();

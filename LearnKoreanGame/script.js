let vocabDB = [];
let sentenceDB = [];
let activeVocabPool = [];
let activeSentencePool = [];

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function loadDataByLevel() {
    const level = document.getElementById('level-selector').value;
    vocabDB = kiipData.vocab[level] || kiipData.vocab['L1'];
    sentenceDB = kiipData.sentences[level] || kiipData.sentences['L1'];
    activeVocabPool = shuffleArray(vocabDB);
    activeSentencePool = shuffleArray(sentenceDB);
}

const uiStrings = {
    'EN': {
        scoreLabel: 'Total EXP', startBtn: 'Start Game', restartBtn: 'Play Again', menuBtn: 'Back to Menu',
        modes: {
            wordPop: { title: 'Word Pop', desc: 'Match falling words before they hit the bottom.' },
            sonicCatch: { title: 'Sonic Catch', desc: 'Listen to the pronunciation and select the correct meaning.' },
            sentenceBuilder: { title: 'Sentence Builder', desc: 'Rearrange the blocks to form the correct Korean sentence.' },
            survival: { title: 'Boss Survival', desc: 'Endless mode! Don\'t let the words drop. You have 3 lives.' }
        }
    },
    'ZH': {
        scoreLabel: '总经验', startBtn: '开始游戏', restartBtn: '再玩一次', menuBtn: '返回大厅',
        modes: {
            wordPop: { title: '词汇消消乐', desc: '在单词掉落到底部前，选出它的正确意思。' },
            sonicCatch: { title: '听音辨位', desc: '聆听韩语发音，选出正确的翻译。' },
            sentenceBuilder: { title: '句子接龙', desc: '将打乱的韩语词块拖拽排序，还原正确句型。' },
            survival: { title: '终极生存战', desc: '无尽挑战！漏掉单词会扣血，你有 3 条命。' }
        }
    }
};

let currentLang = 'EN';
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

// Screens
const screenMenu = document.getElementById('screen-menu');
const screenGameplay = document.getElementById('screen-gameplay');
const screenSentence = document.getElementById('screen-sentence');
const overlayStart = document.getElementById('overlay-start');
const overlayGameover = document.getElementById('overlay-gameover');

// Game UI Elements
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
    currentLangText.textContent = currentLang;
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

function showMenu() {
    isPlaying = false;
    currentMode = null;
    hideAllScreens();
    screenMenu.classList.add('active');
    updateUILanguage();
}

function showStartScreen() {
    const s = uiStrings[currentLang].modes[currentMode];
    document.getElementById('start-title').textContent = s.title;
    document.getElementById('start-desc').textContent = s.desc;
    
    // Set icon based on mode
    const iconMap = { wordPop: '🎯', sonicCatch: '🎧', sentenceBuilder: '🧩', survival: '🐉' };
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

function startGame() {
    score = 0;
    lives = 3;
    fallSpeed = currentMode === 'survival' ? 1.0 : 0.5;
    isPlaying = true;
    hideAllScreens();
    
    loadDataByLevel(); // Load data based on selected level before starting
    
    if (currentMode === 'sentenceBuilder') {
        screenSentence.classList.add('active');
        setupSentenceBuilder();
    } else {
        screenGameplay.classList.add('active');
        playArea.innerHTML = '';
        optionsGrid.innerHTML = '';
        
        if (currentMode === 'survival') {
            playerLifeEl.classList.remove('hidden');
            updateLivesUI();
        } else {
            playerLifeEl.classList.add('hidden');
        }

        if (currentMode === 'sonicCatch') {
            setupSonicCatch();
        } else {
            // Word Pop or Survival
            spawnFallingWord();
            requestAnimationFrame(gameLoop);
        }
    }
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
        speakKorean(currentItem.ko);
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

function speakKorean(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.9; // Slightly slower for learning
        window.speechSynthesis.speak(utterance);
    }
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

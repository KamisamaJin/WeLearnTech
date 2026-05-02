const initialBoard = [
    ['bj', 'bm', 'bx', 'bs', 'bk', 'bs', 'bx', 'bm', 'bj'],
    ['', '', '', '', '', '', '', '', ''],
    ['', 'bp', '', '', '', '', '', 'bp', ''],
    ['bz', '', 'bz', '', 'bz', '', 'bz', '', 'bz'],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['rz', '', 'rz', '', 'rz', '', 'rz', '', 'rz'],
    ['', 'rp', '', '', '', '', '', 'rp', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['rj', 'rm', 'rx', 'rs', 'rk', 'rs', 'rx', 'rm', 'rj']
];

const pieceLabels = {
    'bj': '车', 'bm': '马', 'bx': '象', 'bs': '士', 'bk': '将', 'bp': '炮', 'bz': '卒',
    'rj': '车', 'rm': '马', 'rx': '相', 'rs': '仕', 'rk': '帅', 'rp': '炮', 'rz': '兵'
};

const pieceValues = {
    'j': 900,
    'm': 400,
    'p': 450,
    'x': 200,
    's': 200,
    'z': 100,
    'k': 10000
};

let board = [];
let currentPlayer = 'r';
let selectedCell = null;
let validMovesForSelected = [];
let gameOver = false;
let gameMode = 'pve';

function initGame() {
    board = JSON.parse(JSON.stringify(initialBoard));
    currentPlayer = 'r';
    selectedCell = null;
    validMovesForSelected = [];
    gameOver = false;
    
    const modeSelect = document.getElementById('game-mode');
    if (modeSelect) {
        gameMode = modeSelect.value;
    }
    
    document.getElementById('game-over-modal').classList.remove('active');
    updateTurnIndicator();
    renderBoard();
}

function renderBoard() {
    const grid = document.getElementById('game-grid');
    grid.innerHTML = '';
    
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 9; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.r = r;
            cell.dataset.c = c;
            
            if (selectedCell && selectedCell.r === r && selectedCell.c === c) {
                cell.classList.add('selected-cell');
            }
            
            if (validMovesForSelected.some(m => m.r === r && m.c === c)) {
                cell.classList.add('valid-move');
            }
            
            const piece = board[r][c];
            if (piece) {
                const pieceDiv = document.createElement('div');
                pieceDiv.className = `piece ${piece[0] === 'r' ? 'red' : 'black'}`;
                pieceDiv.innerText = pieceLabels[piece];
                cell.appendChild(pieceDiv);
            }
            
            cell.addEventListener('click', () => handleCellClick(r, c));
            grid.appendChild(cell);
        }
    }
}

function handleCellClick(r, c) {
    if (gameOver) return;
    if (gameMode === 'pve' && currentPlayer === 'b') return; // Block input during AI turn

    const piece = board[r][c];
    
    if (validMovesForSelected.some(m => m.r === r && m.c === c)) {
        movePiece(selectedCell.r, selectedCell.c, r, c);
        return;
    }
    
    if (piece && piece[0] === currentPlayer) {
        selectedCell = {r, c};
        validMovesForSelected = getValidMoves(r, c);
        renderBoard();
        return;
    }
    
    selectedCell = null;
    validMovesForSelected = [];
    renderBoard();
}

function movePiece(fromR, fromC, toR, toC) {
    const targetPiece = board[toR][toC];
    board[toR][toC] = board[fromR][fromC];
    board[fromR][fromC] = '';
    
    selectedCell = null;
    validMovesForSelected = [];
    
    if (targetPiece && targetPiece[1] === 'k') {
        endGame(currentPlayer);
        return;
    }
    
    currentPlayer = currentPlayer === 'r' ? 'b' : 'r';
    updateTurnIndicator();
    
    if (isCheckmate(currentPlayer)) {
        endGame(currentPlayer === 'r' ? 'b' : 'r');
        return;
    }
    
    renderBoard();

    if (gameMode === 'pve' && currentPlayer === 'b' && !gameOver) {
        setTimeout(makeAIMove, 50); // slight delay to allow UI to render the user's move
    }
}

function rawGetValidMoves(r, c) {
    const piece = board[r][c];
    if (!piece) return [];
    
    const color = piece[0];
    const type = piece[1];
    const moves = [];

    const addIfValid = (nr, nc) => {
        if (nr >= 0 && nr < 10 && nc >= 0 && nc < 9) {
            const target = board[nr][nc];
            if (!target || target[0] !== color) {
                moves.push({r: nr, c: nc});
            }
            return !target;
        }
        return false;
    };

    if (type === 'j') {
        for (let i = r - 1; i >= 0; i--) if (!addIfValid(i, c)) break;
        for (let i = r + 1; i < 10; i++) if (!addIfValid(i, c)) break;
        for (let i = c - 1; i >= 0; i--) if (!addIfValid(r, i)) break;
        for (let i = c + 1; i < 9; i++) if (!addIfValid(r, i)) break;
    } 
    else if (type === 'p') {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let [dr, dc] of dirs) {
            let jump = false;
            let nr = r + dr, nc = c + dc;
            while (nr >= 0 && nr < 10 && nc >= 0 && nc < 9) {
                const target = board[nr][nc];
                if (!jump) {
                    if (!target) {
                        moves.push({r: nr, c: nc});
                    } else {
                        jump = true;
                    }
                } else {
                    if (target) {
                        if (target[0] !== color) {
                            moves.push({r: nr, c: nc});
                        }
                        break;
                    }
                }
                nr += dr;
                nc += dc;
            }
        }
    }
    else if (type === 'm') {
        const dirs = [
            [-2, -1, -1, 0], [-2, 1, -1, 0], [2, -1, 1, 0], [2, 1, 1, 0],
            [-1, -2, 0, -1], [1, -2, 0, -1], [-1, 2, 0, 1], [1, 2, 0, 1]
        ];
        for (let [dr, dc, br, bc] of dirs) {
            if (r + br >= 0 && r + br < 10 && c + bc >= 0 && c + bc < 9 && !board[r + br][c + bc]) {
                addIfValid(r + dr, c + dc);
            }
        }
    }
    else if (type === 'x') {
        const dirs = [[-2, -2, -1, -1], [-2, 2, -1, 1], [2, -2, 1, -1], [2, 2, 1, 1]];
        for (let [dr, dc, br, bc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (color === 'r' && nr < 5) continue;
            if (color === 'b' && nr > 4) continue;
            if (r + br >= 0 && r + br < 10 && c + bc >= 0 && c + bc < 9 && !board[r + br][c + bc]) {
                addIfValid(nr, nc);
            }
        }
    }
    else if (type === 's') {
        const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        for (let [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nc >= 3 && nc <= 5) {
                if (color === 'r' && nr >= 7 && nr <= 9) addIfValid(nr, nc);
                if (color === 'b' && nr >= 0 && nr <= 2) addIfValid(nr, nc);
            }
        }
    }
    else if (type === 'k') {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nc >= 3 && nc <= 5) {
                if (color === 'r' && nr >= 7 && nr <= 9) addIfValid(nr, nc);
                if (color === 'b' && nr >= 0 && nr <= 2) addIfValid(nr, nc);
            }
        }
        
        // Flying general (King captures King)
        if (color === 'r') {
            for (let i = r - 1; i >= 0; i--) {
                if (board[i][c]) {
                    if (board[i][c] === 'bk') moves.push({r: i, c: c});
                    break;
                }
            }
        } else {
            for (let i = r + 1; i < 10; i++) {
                if (board[i][c]) {
                    if (board[i][c] === 'rk') moves.push({r: i, c: c});
                    break;
                }
            }
        }
    }
    else if (type === 'z') {
        if (color === 'r') {
            addIfValid(r - 1, c);
            if (r < 5) {
                addIfValid(r, c - 1);
                addIfValid(r, c + 1);
            }
        } else {
            addIfValid(r + 1, c);
            if (r > 4) {
                addIfValid(r, c - 1);
                addIfValid(r, c + 1);
            }
        }
    }
    return moves;
}

function inCheck(color) {
    let kr, kc;
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === color + 'k') {
                kr = r; kc = c;
            }
        }
    }
    if (kr === undefined) return false;

    const oppColor = color === 'r' ? 'b' : 'r';
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 9; c++) {
            const p = board[r][c];
            if (p && p[0] === oppColor) {
                const moves = rawGetValidMoves(r, c);
                if (moves.some(m => m.r === kr && m.c === kc)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function getValidMoves(r, c) {
    const rawMoves = rawGetValidMoves(r, c);
    const color = board[r][c][0];
    
    return rawMoves.filter(move => {
        const targetPiece = board[move.r][move.c];
        board[move.r][move.c] = board[r][c];
        board[r][c] = '';
        
        const valid = !inCheck(color);
        
        board[r][c] = board[move.r][move.c];
        board[move.r][move.c] = targetPiece;
        
        return valid;
    });
}

function isCheckmate(color) {
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] && board[r][c][0] === color) {
                const moves = getValidMoves(r, c);
                if (moves.length > 0) {
                    return false;
                }
            }
        }
    }
    return true;
}

function updateTurnIndicator() {
    const indicator = document.getElementById('turn-indicator');
    if (currentPlayer === 'r') {
        indicator.innerText = '红方走';
        indicator.className = 'turn-indicator';
    } else {
        indicator.innerText = '黑方走';
        indicator.className = 'turn-indicator black-turn';
    }
}

function endGame(winnerColor) {
    gameOver = true;
    renderBoard();
    const modal = document.getElementById('game-over-modal');
    const text = document.getElementById('winner-text');
    text.innerText = winnerColor === 'r' ? '红方胜利！' : '黑方胜利！';
    modal.classList.add('active');
}

// AI Logic

function evaluateBoard() {
    let score = 0;
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 9; c++) {
            const piece = board[r][c];
            if (piece) {
                const color = piece[0];
                const type = piece[1];
                let val = pieceValues[type];
                
                // Positional bonuses
                if (type === 'z') {
                    if (color === 'r' && r < 5) val += 100;
                    if (color === 'b' && r > 4) val += 100;
                }
                if (type === 'm') {
                    // Centralize knight bonus
                    if (c >= 2 && c <= 6 && r >= 2 && r <= 7) val += 50;
                }
                if (type === 'j') {
                    // Forward chariot bonus
                    if (color === 'r' && r < 5) val += 50;
                    if (color === 'b' && r > 4) val += 50;
                }
                
                if (color === 'b') {
                    score += val;
                } else {
                    score -= val;
                }
            }
        }
    }
    return score;
}

function getAIMoves(color) {
    const moves = [];
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] && board[r][c][0] === color) {
                // Must use getValidMoves to prevent illegal moves causing loss immediately
                const pieceMoves = getValidMoves(r, c);
                for (let m of pieceMoves) {
                    moves.push({fromR: r, fromC: c, toR: m.r, toC: m.c});
                }
            }
        }
    }
    return moves;
}

function makeAIMove() {
    if (gameOver) return;
    
    // Check if AI is in checkmate
    const moves = getAIMoves('b');
    if (moves.length === 0) {
        endGame('r');
        return;
    }
    
    let bestMove = null;
    let bestValue = -Infinity;
    
    // Depth 3 is usually good enough to look ahead 1.5 moves (black, red, black)
    // and fast enough for JS. If it's too slow, reduce to 2.
    const depth = 3; 
    
    // Randomize slightly among equal best moves
    const candidateMoves = [];
    
    for (let move of moves) {
        const captured = board[move.toR][move.toC];
        board[move.toR][move.toC] = board[move.fromR][move.fromC];
        board[move.fromR][move.fromC] = '';
        
        const boardVal = minimax(depth - 1, -Infinity, Infinity, false);
        
        board[move.fromR][move.fromC] = board[move.toR][move.toC];
        board[move.toR][move.toC] = captured;
        
        if (boardVal > bestValue) {
            bestValue = boardVal;
            candidateMoves.length = 0;
            candidateMoves.push(move);
        } else if (boardVal === bestValue) {
            candidateMoves.push(move);
        }
    }
    
    if (candidateMoves.length > 0) {
        bestMove = candidateMoves[Math.floor(Math.random() * candidateMoves.length)];
    } else {
        bestMove = moves[0];
    }
    
    movePiece(bestMove.fromR, bestMove.fromC, bestMove.toR, bestMove.toC);
}

function minimax(depth, alpha, beta, isMaximizing) {
    // Check for king capture
    let bk = false, rk = false;
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === 'bk') bk = true;
            if (board[r][c] === 'rk') rk = true;
        }
    }
    if (!bk) return -20000 - depth; // Black lost
    if (!rk) return 20000 + depth;  // Black won
    
    if (depth === 0) {
        return evaluateBoard();
    }
    
    const color = isMaximizing ? 'b' : 'r';
    const moves = [];
    
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] && board[r][c][0] === color) {
                // Use rawGetValidMoves for speed in minimax
                const pieceMoves = rawGetValidMoves(r, c);
                for (let m of pieceMoves) {
                    moves.push({fromR: r, fromC: c, toR: m.r, toC: m.c});
                }
            }
        }
    }
    
    if (moves.length === 0) {
        return isMaximizing ? -20000 : 20000;
    }
    
    // Sort moves: Captures first (MVV-LVA style)
    moves.sort((a, b) => {
        const pieceA = board[a.toR][a.toC];
        const pieceB = board[b.toR][b.toC];
        const valA = pieceA ? pieceValues[pieceA[1]] : 0;
        const valB = pieceB ? pieceValues[pieceB[1]] : 0;
        return valB - valA;
    });

    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let move of moves) {
            const captured = board[move.toR][move.toC];
            board[move.toR][move.toC] = board[move.fromR][move.fromC];
            board[move.fromR][move.fromC] = '';
            
            const ev = minimax(depth - 1, alpha, beta, false);
            
            board[move.fromR][move.fromC] = board[move.toR][move.toC];
            board[move.toR][move.toC] = captured;
            
            maxEval = Math.max(maxEval, ev);
            alpha = Math.max(alpha, ev);
            if (beta <= alpha) break;
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let move of moves) {
            const captured = board[move.toR][move.toC];
            board[move.toR][move.toC] = board[move.fromR][move.fromC];
            board[move.fromR][move.fromC] = '';
            
            const ev = minimax(depth - 1, alpha, beta, true);
            
            board[move.fromR][move.fromC] = board[move.toR][move.toC];
            board[move.toR][move.toC] = captured;
            
            minEval = Math.min(minEval, ev);
            beta = Math.min(beta, ev);
            if (beta <= alpha) break;
        }
        return minEval;
    }
}

document.getElementById('restart-btn').addEventListener('click', initGame);
document.getElementById('modal-restart-btn').addEventListener('click', initGame);
document.getElementById('game-mode').addEventListener('change', (e) => {
    gameMode = e.target.value;
    initGame();
});

window.onload = initGame;

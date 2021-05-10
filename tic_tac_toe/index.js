let size = 5;
function generateBoard(board) {
  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      board[i][j] = "";
    }
  }
  return board;
}

function makeMove(s) {
  let i = Math.floor(Math.random() * s);
  let j = Math.floor(Math.random() * s);
  return { i, j };
}

let Board = generateBoard([]);
let players = {
  x: 1,
  o: 0,
};
let currentUser = players.x;

function updateBoard(board) {
  const move = makeMove(size);
  if (board[move.i][move.j] !== "") {
    updateBoard(board);
  } else {
    board[move.i][move.j] = currentUser;
  }
}

function sumOfArray(arr) {
  let sum = 0;
  for (let el in arr) {
    sum += el;
  }
  return sum;
}
/*
  [
    [0,1,1]
    [1,0,0]
    [0,1,1]
  ]

 */

function checkBoard(board) {
  let dioganalSum = 0;
  let reverceDioganalSum = 0;
  for (let i = 0; i < board.length; i++) {
    dioganalSum += board[i][i];
    reverceDioganalSum += board[i][board.length - 1 - i];

    if (size * currentUser === sumOfArray(board[i])) {
      return true;
    }
    let sum = 0;
    for (let j = 0; j < board.length; j++) {
      sum += board[j][i];
    }
    if (size * currentUser === sum) {
      return true;
    }
  }
  if (
    size * currentUser === dioganalSum ||
    size * currentUser === reverceDioganalSum
  ) {
    return true;
  }
  return false;
}

function isDraw(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "") return false;
    }
  }
  return true;
}

function runTicTacToe() {
  let finished = false;
  let winner = null;
  while (!finished) {
    updateBoard(Board);
    let isWinner = checkBoard(Board);
    if (isWinner) {
      winner = currentUser;
      finished = true;
    } else if (isDraw(Board)) {
      return { Board, winner: "Draw" };
    } else {
      currentUser = currentUser === players.x ? players.o : players.x;
    }
  }
  return { Board, winner };
}

const state = runTicTacToe();
console.log(state.Board);
console.log(state.winner);

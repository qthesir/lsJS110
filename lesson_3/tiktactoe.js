const readlineSync = require("readline-sync");
const { read } = require("xlsx");

// Step 1: Set up and display the board

// Display the board

// let board = {
//   1: " ", // top left
//   2: " ", // top center
//   3: " ", // top right
//   4: " ", // middle left
//   5: " ", // middle center
//   6: " ", // middle right
//   7: " ", // bottom left
//   8: " ", // bottom center
//   9: " ", // bottom right
// };

// Object is better here because its more readible for someone reading / maintaining this
// system

const INITIAL_MARKER = " "
const HUMAN_MARKER = "X"
const COMPUTER_MARKER = "O"

const prompt = (string) => {
  console.log(string);
};

const displayBoard = (board) => {
  console.log(" ");
  console.log("        |         |        ");
  console.log(`   ${board[1]}    |    ${board[2]}    |    ${board[3]}   `);
  console.log("        |         |        ");
  console.log("---------------------------");
  console.log("        |         |        ");
  console.log(`   ${board[4]}    |    ${board[5]}    |    ${board[6]}   `);
  console.log("        |         |        ");
  console.log("---------------------------");
  console.log("        |         |        ");
  console.log(`   ${board[7]}    |    ${board[8]}    |    ${board[9]}   `);
  console.log("        |         |        ");
  console.log(" ");

  return undefined;
};

const initializeBoard = () => {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
};

let board = initializeBoard();

displayBoard(board);

const userMarksSquare = (board) => {
  let openSquares = Object.keys(board).filter((key) => {
    return board[key] === " ";
  });
  prompt(`Choose your square: ${openSquares.join(", ")}`);
  let userInput = readlineSync.question().trim();

  while (isInvalidInput(userInput)) {
    prompt("Invalid input. Enter a number between 1 and 9: ");
    userInput = readlineSync.question();
  }

  board[userInput] = HUMAN_MARKER;

  return undefined;
};

const computerMarksSquare = (board) => {
  const computerInput = String(Math.ceil(Math.random() * 9));

  while (isInvalidInput(computerInput)) {
    computerInput = String(Math.ceil(Math.random() * 9));
    console.log("fallback", { computerInput });
  }

  board[computerInput] = COMPUTER_MARKER;

  return undefined;
};

const isInvalidInput = (input) => {
  if (input.length > 1) {
    return true;
  } else if (!(input >= "1" && input <= "9")) {
    return true;
  } else if (board[input] === HUMAN_MARKER || board[input] === COMPUTER_MARKER) {
    return true;
  }
};

userMarksSquare(board);

computerMarksSquare(board);

displayBoard(board);

userMarksSquare(board);

computerMarksSquare(board);

displayBoard(board);

const updateBoard = (input) => {}; // shared by computer and user functions to update board state

const isWinner = (gameState) => {};

const isTie = (gameState) => {};

const resetBoard = (gameState) => {};

// displayBoard(gameState);

// I need a function that displays the board depending on the
// state of the game. Hm... How do you do this?

/*
Notes & Reflection
Question here: Is it best practice to pass the variable by reference and mutate it that way?
Or is it best to mutate the variable thats in the outer scope directly? Without a framework
like React, how is state management done in general? 

THIS IS WHY ITS IMPORTANT TO LEARN THE FUNDAMENTALS. State management appears EVERYWHERE.

Anyway, one guess is that you have a function called "update board" or something that 
specifically updates the board. That would follow the react design pattern, where you
have useState and then one of the return values is a function that updates the state.

There also subtly introducing some OOP concepts here. Creating the board as an object,
initializing it with a function... This is all in preparation for making classes and all 
that stuff. Pretty excited to learn this mode of thinking. 
*/

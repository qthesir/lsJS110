const readlineSync = require("readline-sync");

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

const displayBoard = (board) => {
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

  return undefined;
};

const initializeBoard = () => {
  let board = {};

  for (let square = 0; square <= 9; square++) {
    board[String(square)] = " ";
  }

  return board;
};

let board = initializeBoard();

displayBoard(board);

const userMarksSquare = (input) => {};

const computerMarksSquare = (input) => {};

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

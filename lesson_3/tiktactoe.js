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

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WAYS_TO_WIN = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const NUMBER_OF_GAMES_TO_WIN_MATCH = 1;

// Valid option for this constant: player, computer, or choose
const WHO_GOES_FIRST = "choose";

const prompt = (string) => {
  console.log(string);
};

const displayBoard = (board) => {
  // console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

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

const joinOr = (openSquares, delimeter = ", ", joinWord = "or") => {
  switch (openSquares.length) {
    case 0:
      return "";
    case 1:
      return `${openSquares[0]}`;
    case 2:
      return openSquares.join(` ${joinWord} `);
    default:
      return `${openSquares
        .slice(0, openSquares.length - 1)
        .join(delimeter)}${delimeter}${joinWord} ${
        openSquares[openSquares.length - 1]
      }`;
  }
};

// console.log(joinOr([1, 2, 3])); // => "1, 2, or 3"
// console.log(joinOr([1, 2, 3], "; ")); // => "1; 2; or 3"
// console.log(joinOr([1, 2, 3], ", ", "and")); // => "1, 2, and 3"
// console.log(joinOr([])); // => ""
// console.log(joinOr([5])); // => "5"
// console.log(joinOr([1, 2])); // => "1 or 2"

const getOpenSquares = (board) => {
  return Object.keys(board).filter((key) => {
    return board[key] === INITIAL_MARKER;
  });
};
const userMarksSquare = (board) => {
  let openSquares = getOpenSquares(board);
  prompt(`Choose a square: ${joinOr(openSquares)}`);
  let userInput = readlineSync.question().trim();

  while (isInvalidInput(board, userInput)) {
    prompt(`Invalid input. Choose a square: ${joinOr(openSquares)}`);
    userInput = readlineSync.question();
  }

  board[userInput] = HUMAN_MARKER;

  return undefined;
};

// The conditions for an at risk row are:
// 1. There are 2/3 squares in a winning combination that are the opponents AND
// 2. There is at least 1 empty space
/*
In an array, this could simply look like: 'XX ' OR 'X X' OR ' XX'
If joining the board values at those squares together produces at least one of those results, then it is at risk. 

Then, for the getSquaresInAtRiskRow, you're identifying the row with the empty space
*/

const isOpportunity = (board, WAYS_TO_WIN) => {
  return !!findOpportunitySquare(board, WAYS_TO_WIN);
};

// The way that I've set this up... I will be checking for opportunity Os, attack positions, first, but only WITHIN a way to
// win... That is, I'm not getting the complete list of opportunities and what type of opportunity they are.
/* I suppose I could, as brute force, create a new object that contains the type of opportunity (attack, defense) and its 
winning move, and select the location that's attack before I do defense. I could also just iterate through the opportunities 
to win first, then iterate through the opportunities to lose.

To note: Ties are not updating either. This is suboptimal.

Ok, got it below. That was the easier change I could do. 

*/

const findOpportunitySquare = (board, WAYS_TO_WIN) => {
  for (let i = 0; i < WAYS_TO_WIN.length; i++) {
    let [sq1, sq2, sq3] = WAYS_TO_WIN[i];
    let combo = [board[sq1], board[sq2], board[sq3]].join("");

    // Opportunities to win (search first)
    if (combo === " OO") {
      return WAYS_TO_WIN[i][0];
    } else if (combo === "O O") {
      return WAYS_TO_WIN[i][1];
    } else if (combo === "OO ") {
      return WAYS_TO_WIN[i][2];
    }
  }

  for (let i = 0; i < WAYS_TO_WIN.length; i++) {
    let [sq1, sq2, sq3] = WAYS_TO_WIN[i];
    let combo = [board[sq1], board[sq2], board[sq3]].join("");

    // Opportunities to defend (search second)
    if (combo === " XX") {
      return WAYS_TO_WIN[i][0];
    } else if (combo === "X X") {
      return WAYS_TO_WIN[i][1];
    } else if (combo === "XX ") {
      return WAYS_TO_WIN[i][2];
    }
  }

  return null;
};

const computerMarksSquare = (board) => {
  let computerInput;
  if (isOpportunity(board, WAYS_TO_WIN)) {
    computerInput = findOpportunitySquare(board, WAYS_TO_WIN);
  } else if (getOpenSquares(board).includes("5")) {
    computerInput = 5;
  } else {
    computerInput = String(Math.ceil(Math.random() * 9));

    while (isInvalidInput(board, computerInput)) {
      computerInput = String(Math.ceil(Math.random() * 9));
    }
  }

  board[computerInput] = COMPUTER_MARKER;

  return undefined;
};

const isInvalidInput = (board, input) => {
  if (input.length > 1) {
    return true;
  } else if (!(input >= "1" && input <= "9")) {
    return true;
  } else if (
    board[input] === HUMAN_MARKER ||
    board[input] === COMPUTER_MARKER
  ) {
    return true;
  }
};

const isTie = (board) => {
  return Object.values(board).every(
    (square) => square === HUMAN_MARKER || square === COMPUTER_MARKER
  );
};

const isWinner = (board, WAYS_TO_WIN) => {
  return !!detectWinner(board, WAYS_TO_WIN);
};

const detectWinner = (board, WAYS_TO_WIN) => {
  for (let i = 0; i < WAYS_TO_WIN.length; i++) {
    let winningCombo = WAYS_TO_WIN[i];
    if (
      winningCombo.every((square) => board[square] === HUMAN_MARKER) ||
      winningCombo.every((square) => board[square] === COMPUTER_MARKER)
    ) {
      return board[winningCombo[0]];
    }
  }
  return null;
};

const playAgain = () => {
  prompt("Would you like to play again? Enter y for yes, n for no");
  let userResponse = readlineSync.question().trim().toLowerCase();
  while (true) {
    if (userResponse.includes("y") && userResponse.length <= 3) {
      return true;
    } else if (userResponse.includes("n") && userResponse.length <= 3) {
      return false;
    } else {
      prompt(
        "Invalid input. Would you like to play again? Enter y for yes, n for no"
      );
      userResponse = readlineSync.question().trim().toLowerCase();
    }
  }
};

const displayWinner = (winner, board) => {
  prompt("We have a winner!");
  displayBoard(board);
  if (winner === HUMAN_MARKER) {
    prompt("Congratulations, you've won!");
  } else {
    prompt("Computer wins. Try again next time!");
  }
};

const displayTie = (board) => {
  displayBoard(board);
  prompt("It's a tie!");
};

const checkGameForTieOrWinner = (board) => {
  if (isWinner(board, WAYS_TO_WIN)) {
    let winner = detectWinner(board, WAYS_TO_WIN);
    displayWinner(winner, board);
    return true;
  }

  if (isTie(board)) {
    displayTie(board);
    return true;
  }

  return false;
};

const updateNumberOfGamesWon = (board, numberOfGamesWon) => {
  if (isWinner(board, WAYS_TO_WIN)) {
    let winner = detectWinner(board, WAYS_TO_WIN);
    if (winner === HUMAN_MARKER) {
      numberOfGamesWon["humanWins"] += 1;
    } else if (winner === COMPUTER_MARKER) {
      numberOfGamesWon["computerWins"] += 1;
    } else if (isTie(board)) {
      numberOfGamesWon["ties"] += 1;
    }
  }
};

const displayNumberOfGamesWon = (numberOfGamesWon) => {
  prompt("-------------------------");
  prompt("Game Completed. Score: ");
  prompt(`Player Wins: ${numberOfGamesWon["humanWins"]}`);
  prompt(`Computer Wins: ${numberOfGamesWon["computerWins"]}`);
  prompt(`Ties: ${numberOfGamesWon["ties"]}`);
  prompt("-------------------------");
};

const playGame = (board) => {
  let firstTurn;

  if (WHO_GOES_FIRST === "choose") {
    prompt(
      'Choose whether you or the computer will play first. Type "player" for you and "computer" for the computer: '
    );
    let playerChoice = readlineSync.question();

    while (true) {
      if (playerChoice[0].toLowerCase().trim() === "p") {
        firstTurn = "player";
        break;
      } else if (playerChoice[0].toLowerCase().trim() === "c") {
        firstTurn = "computer";
        break;
      } else {
        prompt(
          'Invalid response. Choose whether you or the computer will play first. Type "player" for you and "computer" for the computer: '
        );
        playerChoice = readlineSync.question();
      }
    }
  } else {
    firstTurn = WHO_GOES_FIRST;
  }

  while (true) {
    if (firstTurn === "player") {
      displayBoard(board);
      userMarksSquare(board);
      if (checkGameForTieOrWinner(board)) {
        break;
      }

      computerMarksSquare(board);
      if (checkGameForTieOrWinner(board)) {
        break;
      }
    } else if (firstTurn === "computer") {
      computerMarksSquare(board);
      if (checkGameForTieOrWinner(board)) {
        break;
      }
      displayBoard(board);
      userMarksSquare(board);
      if (checkGameForTieOrWinner(board)) {
        break;
      }
    }
  }
};

while (true) {
  prompt("Welcome to tic-tac-toe!!!");
  prompt("Prepare yourself...");

  let numberOfGamesWon = {
    humanWins: 0,
    computerWins: 0,
    ties: 0,
  };

  while (true) {
    let board = initializeBoard();

    playGame(board);
    updateNumberOfGamesWon(board, numberOfGamesWon);
    displayNumberOfGamesWon(numberOfGamesWon);

    if (numberOfGamesWon["humanWins"] >= NUMBER_OF_GAMES_TO_WIN_MATCH) {
      prompt(
        `Player has won ${NUMBER_OF_GAMES_TO_WIN_MATCH} games and is the reigning champion!`
      );
      break;
    }

    if (numberOfGamesWon["computerWins"] >= NUMBER_OF_GAMES_TO_WIN_MATCH) {
      prompt(
        `Computer has won ${NUMBER_OF_GAMES_TO_WIN_MATCH} games and is the reigning champion!`
      );
      break;
    }
  }

  if (!playAgain()) {
    break;
  }
}

prompt("Thanks for playing Tic Tac Toe!");

// displayBoard(gameState);

// I need a function that displays the board depending on the
// state of the game. Hm... How do you do this?

/*
Ok, so now that I have the functions for displaying a board, having the user mark a 
square, and a function where the computer marks a square, how can I incorporate these
pieces into the main game loop? Or loop through the main game? 

What we probably want is a function that, when called, "plays the game". Its "playGame"
or something of this nature. There are some steps to initialize the game, which run in 
*/

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

On further reflection, I do think the LS implementation of detecting whether or 
not a square is better is more elegant and straightforward. Mine is maybe a 
little more readible, since its checking to see if the answer is invalid,
but there is no loop requirement for the computer chooses a square, which 
makes it more computationally efficient, I think. Maybe that is part of it. 

Another notable aspect of the LS solution: In the computer chooses a square,
they are taking the random index of the empty squares array, which contains 
 unmarked squares (i.e. [1,3,4,9]), and then using that to indicate which
 number to select, which is then used to reference the board object at the 
 correct number, which assigns the array element to the computer's market 
 ("O" in our case.) This took me a second to wrap my head around, but I 
 get it now. 

 Here is the code: 

 function computerChoosesSquare(board) {
  let emptySquares = Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });

  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares[randomIndex];
  board[square] = COMPUTER_MARKER;
}

THE NEED FOR TESTING

Ah, ok. Now I understand the need for a solid testing framework. I'd like to be able to test my function "isWinner" without running 
the entire program. This would involve invoking the function with the par-baked values that you would expect, for example where
I would expect the first winning scenario on the board (a board with squares 1, 2, and 3 with all Xs or 0s.


REFRESHER

Variable scoping and inheretance. I encountered an issue where the isInvalidInput function was throwing an error, saying
it could not find the board variable. I thought that, because board was declared within the while loop function scope, which is the
outer scope of playGame, which is the outer scope of userMarksSquare, which is the outer scope of isInvalidInput, that isInvalidInput 
would have access to the board variable in userMarksSquare's scope. The scoping, however, is dependent on where the function is 
defined - it only has access to the variables within the scope of its definition, not where it is called. Thus, given there is no
board variable declared in the global scope (where the isInvalidInput function is defined), it does not have access to board. 

EDGE CASE

The way I've set up the computer checker has an issue... If the board is full, then the computer will never find a valid input.
So the isInvalidInput needs to consider the case where the board is full. It could also end up taking an arbritrarily long period
of time. This is why LS used the solution they did, or perhaps that is part of the reason. 

mmmmh... No, actually. I do not think the LS solution would solve this in any case. The check for a winner needs to be done before
and after the computer and human take their turns, not just after the computer does. Because, if the human wins the game, for example,
the computer should not go again. The check should be after each person takes their turn. Including the board being full. 

The way that LS reasoned through the loop and detect winner functions is notable. They started at the top level, thinking about the
functions, and then also thought about how the functions could be defined in terms of other functions. Ultimately, this ended up 
with the system of "detectWinner" being the core functionality inside of "someoneWon" (or in my case isWinner). So, this is a decent
strategy. Start with top level, practical constructs, think about your program in terms of those practical constructs, and then 
figure out the low level stuff after that. 

I also like LS' implementation of detectWinner better than mine. Even though mine is more succinct, launch schools is a little more
clear and easy to read, although I am proud of the fact that mine is more succinct. 

Maybe I should incorporate, instead of the inner loop in the main loop, I should name this "playRound". Program has a round, 
round has playGame until the computer or player reach 5 victories, and playGame has turns until one of the players wins or 
its a tie. 

Objects would probably make this a lot more organized. 
*/

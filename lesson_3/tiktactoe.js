const readlineSync = require("readline-sync");
const { read } = require("xlsx");

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

const isOpportunity = (board, WAYS_TO_WIN) => {
  return !!findOpportunitySquare(board, WAYS_TO_WIN);
};

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

const chooseSquare = (board, currentPlayer) => {
  currentPlayer === "player"
    ? userMarksSquare(board)
    : computerMarksSquare(board);

  return undefined;
};

const alternatePlayer = (currentPlayer) => {
  return currentPlayer === "player" ? "computer" : "player";
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

const userSelectsCurrentPlayer = () => {
  prompt(
    'Choose whether you or the computer will play first. Type "player" for you and "computer" for the computer: '
  );
  let playerChoice = readlineSync.question();

  while (true) {
    if (playerChoice[0].toLowerCase().trim() === "p") {
      return "player";
    } else if (playerChoice[0].toLowerCase().trim() === "c") {
      return "computer";
    } else {
      prompt(
        'Invalid response. Choose whether you or the computer will play first. Type "player" for you and "computer" for the computer: '
      );
      playerChoice = readlineSync.question();
    }
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
  let currentPlayer;

  if (WHO_GOES_FIRST === "choose") {
    currentPlayer = userSelectsCurrentPlayer();
  } else {
    currentPlayer = WHO_GOES_FIRST;
  }

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (checkGameForTieOrWinner(board)) {
      break;
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

/*

IMPLEMENTING MINIMAX

Here's the pseudocode:

function minimax(node, depth, maximizingPlayer) is
    if depth = 0 or node is a terminal node then
        return the heuristic value of node
    if maximizingPlayer then
        value := −∞
        for each child of node do
            value := max(value, minimax(child, depth − 1, FALSE))
        return value
    else (* minimizing player *)
        value := +∞
        for each child of node do
            value := min(value, minimax(child, depth − 1, TRUE))
        return value

(* Initial call *)
minimax(origin, depth, TRUE)

Ok, well, how to implement this into the game? 

Do I need to call minimax for each individual move in the game? Or do I just need to call it once, and it will find the right move?

No... What makes sense based on what I've seen is that its evaluating the score of a particular move based on the value of all 
possible successive moves that could be taken by the player. So, I think, I need to run this on the current state of the board for each 
available move to the computer. 

So how would I expand this algorithm to deal with a game with 9 moves? 

Well, first, lets think about the scoring system. -1 for a position where O wins. +1 for a position where X wins. And 0 for where neither
win. This needs to be evaluated, so lets have a function for scoring.

*/

const getPositionScore = (board, WAYS_TO_WIN) => {
  switch (detectWinner(board, WAYS_TO_WIN)) {
    case 'X':
      return 1
    case 'O': 
      return -1 
    default:
      return 0
  }
}

const miniMax = (board, maximizingPlayer, WAYS_TO_WIN) => {
  let board = [...board]
  let value 
  let openSquares = getOpenSquares(board)

  if (!!detectWinner(board, WAYS_TO_WIN)) {
    return getPositionScore(board, WAYS_TO_WIN)
  }

  if (maximizingPlayer) {
    let value = -Infinity
    openSquares.forEach(square => {
      board[square] = 'X'
      value = Math.max(value, miniMax(board, false, WAYS_TO_WIN))
    })
    return value
  } else {
    let value = Infinity
    openSquares.forEach(square => {
      board[square] = 'O'
      value = Math.min(value, miniMax(board, false, WAYS_TO_WIN))
    })
    return value
  }



}

// for each child node, the children are going to be the available open squares left on the board. So, its going to be for each 
// square on the return value of getOpenSquares(). I also need to update the board, but not the global value of the board. I need 
// to create a copy to simulate. Hmmmmmm. 


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



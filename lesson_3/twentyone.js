const readlineSync = require("readline-sync");

// Helper f(x)s

// Deck identifiers: 1 is Ace, 11 is Jack, 12 is Queen, 13 is King
// Edge case: Ace can be either a 1 or an 11.

const CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const SUITS = ["spade", "club", "diamond", "heart"];
const NUMBER_OF_INITIAL_CARDS = 2;
const VALUE_OF_FACE_CARDS = 10;
const MAX_VALUE_OF_ACE = 11;
const MIN_VALUE_OF_ACE = 1;
const GOAL_POINTS = 21;
const DEALER_HIT_THRESHOLD = 17;
const NUMBER_OF_GAMES_TO_WIN_MATCH = 3;

const shuffleCards = (deck) => {
  for (let i = deck.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
  }
  return null;
};

const initializeDeck = () => {
  let deck = [];
  CARDS.forEach((card) => {
    SUITS.forEach((suit) => {
      deck.push({ value: card, suit: suit });
    });
  });

  shuffleCards(deck);

  return deck;
};

const prompt = (text) => {
  console.log(`=> ${text}`);
};

const displayHand = (playerHand, dealerHand, dealersTurn) => {
  if (!dealersTurn) {
    prompt(`Dealer has: ${dealerHand[0]["value"]} and Unknown`);
  } else if (dealersTurn) {
    prompt(`Dealer has: ${dealerHand.map((card) => card["value"]).join(", ")}`);
  }

  prompt(`You have: ${playerHand.map((card) => card["value"]).join(", ")}`);
};

const takeCardFromDeck = (deck) => {
  return deck.pop();
};

const dealCard = (deck) => {
  return takeCardFromDeck(deck);
};

const getPointsInHand = (hand) => {
  let totalWithoutAces = hand.reduce((total, card) => {
    if (typeof card.value === "number") {
      return total + card.value;
    } else if (
      card.value === "Jack" ||
      card.value === "Queen" ||
      card.value === "King"
    ) {
      return total + VALUE_OF_FACE_CARDS;
    } else if (card.value === "Ace") {
      return total;
    }
  }, 0);

  let total = totalWithoutAces;

  hand
    .filter((card) => card.value === "Ace")
    .forEach((_) => {
      if (total + MAX_VALUE_OF_ACE > GOAL_POINTS) {
        total = total + MIN_VALUE_OF_ACE;
      } else {
        total = total + MAX_VALUE_OF_ACE;
      }
    });

  return total;
};

const isBust = (score) => {
  return score > GOAL_POINTS;
};

// Main Functions

const dealCards = (playerHand, dealerHand, deck) => {
  for (let i = 0; i < NUMBER_OF_INITIAL_CARDS; i++) {
    playerHand[i] = dealCard(deck);
    dealerHand[i] = dealCard(deck);
  }
  return null;
};

const playerTurn = (playerHand, dealerHand, deck) => {
  prompt("");
  while (true) {
    displayHand(playerHand, dealerHand, false);
    prompt(" ");
    let playerChoice;

    while (true) {
      prompt("Type h for hit and s for stay");
      playerChoice = readlineSync.question();
      if (["h", "s"].includes(playerChoice)) {
        break;
      }
      prompt("That is not a valid choice.");
    }

    if (playerChoice === "h") {
      prompt("You chose to hit!");
      playerHand.push(dealCard(deck));
    }

    if (playerChoice === "s" || isBust(getPointsInHand(playerHand))) break;
  }
  return null;
};

const dealerTurn = (playerHand, dealerHand, deck) => {
  while (true) {
    prompt("");
    if (getPointsInHand(dealerHand) > DEALER_HIT_THRESHOLD) {
      break;
    }
    prompt("Dealer is taking another card...");
    dealerHand.push(dealCard(deck));
    displayHand(playerHand, dealerHand, true);
  }
};

const determineWinner = (playerScore, dealerScore) => {
  if (playerScore > GOAL_POINTS) {
    return "player busted";
  } else if (dealerScore > GOAL_POINTS) {
    return "dealer busted";
  } else if (playerScore === dealerScore) {
    return "tie";
  } else if (playerScore > dealerScore) {
    return "player";
  } else if (dealerScore > playerScore) {
    return "dealer";
  }
};

const displayWinner = (playerScore, dealerScore) => {
  switch (determineWinner(playerScore, dealerScore)) {
    case "player busted":
      prompt("");
      prompt("You busted! Dealer wins.");
      break;
    case "dealer busted":
      prompt("");
      prompt("Dealer busted! You win");
      break;
    case "player":
      prompt(" ");
      prompt(`You won!`);
      break;
    case "dealer":
      prompt(" ");
      prompt(`Dealer wins.`);
      break;
    case "tie":
      prompt(" ");
      prompt(`Its a tie!`);
      break;
  }

  return null;
};

const updateNumberOfGamesWon = (numberOfGamesWon, playerScore, dealerScore) => {
  switch (determineWinner(playerScore, dealerScore)) {
    case "player busted":
      numberOfGamesWon["dealer"] += 1;
      break;
    case "dealer busted":
      numberOfGamesWon["player"] += 1;
      break;
    case "player":
      numberOfGamesWon["player"] += 1;
      break;
    case "dealer":
      numberOfGamesWon["dealer"] += 1;
      break;
    case "tie":
      numberOfGamesWon["ties"] += 1;
      break;
  }

  return null;
};

const logFinalScore = (playerHand, dealerHand, playerScore, dealerScore) => {
  prompt("=====================================");
  prompt(
    `Dealer has ${dealerHand
      .map((card) => card.value)
      .join(", ")} for a total of: ${dealerScore}`
  );
  prompt(
    `Player has ${playerHand
      .map((card) => card.value)
      .join(", ")} for a total of: ${playerScore}`
  );
  prompt("=====================================");
};

const displayRoundScore = (numberOfGamesWon) => {
  prompt("----------------------------");
  prompt(`Player wins: ${numberOfGamesWon["player"]}`);
  prompt(`Dealer wins: ${numberOfGamesWon["dealer"]}`);
  prompt(`Ties: ${numberOfGamesWon["ties"]}`);
  prompt("----------------------------");
};

const displayGrandChampion = (numberOfGamesWon) => {
  if (numberOfGamesWon["player"] >= NUMBER_OF_GAMES_TO_WIN_MATCH) {
    prompt("Congratulations! You are the grand champion.");
  } else if (numberOfGamesWon["dealer"] >= NUMBER_OF_GAMES_TO_WIN_MATCH) {
    prompt("Dealer has won 3 games and is the grand champion.");
  }
};

const displayRoundEnd = (
  numberOfGamesWon,
  playerHand,
  dealerHand,
  playerScore,
  dealerScore
) => {
  prompt("");
  logFinalScore(playerHand, dealerHand, playerScore, dealerScore);
  displayWinner(playerScore, dealerScore);
  displayRoundScore(numberOfGamesWon);
  if (isMatchComplete) {
    displayGrandChampion(numberOfGamesWon);
  }
};

const isMatchComplete = (numberOfGamesWon) => {
  return (
    numberOfGamesWon["player"] >= NUMBER_OF_GAMES_TO_WIN_MATCH ||
    numberOfGamesWon["dealer"] >= NUMBER_OF_GAMES_TO_WIN_MATCH
  );
};

const playAgain = () => {
  prompt("Would you like to play again? Enter y for yes and n for no");
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

while (true) {
  let numberOfGamesWon = {
    player: 0,
    dealer: 0,
    ties: 0,
  };

  while (true) {
    let deck = initializeDeck();

    let playerHand = [];
    let dealerHand = [];

    dealCards(playerHand, dealerHand, deck);

    playerTurn(playerHand, dealerHand, deck);

    let playerScore = getPointsInHand(playerHand);
    let dealerScore = getPointsInHand(dealerHand);

    if (isBust(playerScore)) {
      updateNumberOfGamesWon(numberOfGamesWon, playerScore, dealerScore);
      displayRoundEnd(
        numberOfGamesWon,
        playerHand,
        dealerHand,
        playerScore,
        dealerScore
      );
      if (isMatchComplete(numberOfGamesWon)) break;
      continue;
    } else {
      prompt(`You stayed at ${playerScore}`);
    }

    dealerTurn(playerHand, dealerHand, deck);

    dealerScore = getPointsInHand(dealerHand);

    if (isBust(dealerScore)) {
      updateNumberOfGamesWon(numberOfGamesWon, playerScore, dealerScore);
      displayRoundEnd(
        numberOfGamesWon,
        playerHand,
        dealerHand,
        playerScore,
        dealerScore
      );
      if (isMatchComplete(numberOfGamesWon)) break;
      continue;
    } else {
      prompt(`Dealer stayed at ${dealerScore}`);
    }

    updateNumberOfGamesWon(numberOfGamesWon, playerScore, dealerScore);
    displayRoundEnd(
      numberOfGamesWon,
      playerHand,
      dealerHand,
      playerScore,
      dealerScore
    );
    if (isMatchComplete(numberOfGamesWon)) break;
  }

  if (!playAgain()) break;
}
console.log("--------------------");
console.log("Thanks for playing!");

// After reading the code of the LS solution, I'm realizing that I forgot about a key tool in my toolbelt:
// The continue statement. This is why I had to do these weird conditionals in order to avoid continuing the
// game after each iteration. The LS solution is just much easier to follow and read from a logical perspective:
/*
1. Player takes a turn, which happens until the player busts or stays 
2. Check condition of the game. If the game has ended, do the playAgain logic and use the continue statement to reset the loop if its true.
3. Dealer plays 
4. Check the condition of the game again. if it has ended, run the same logic.
5. Log the final score
6. Display the game result 

Thats it. Lot more easier to follow than my complicated if statements, which have to continually keep track of 
who busted and who didn't. This is a significant refactor, but I think it will be worth it for my learning. 

Starting to understand the concept of caching now... Saving a calculation for later use. But what does an 
intelligent caching system look like in a production system? In principle, you are storing the calculation in 
a variable... But is that actually how people "cache"? Is that all it is? 

Answering the question: What is different about how playAgain is used after the dealer or player busts, and at
the end of the loop? The difference is that when the player bust and dealer bust, we use the "continue" statement
to play again in order to skip the remainder of the code and start from the top of the loop. This is unnescessary 
at the end of the loop, because if the user chooses to play again, the loop will continue as there is no code
left to execute. 

LSbot had a good suggestion: I am repeating the same steps after the end of every round. Not code steps, but
I'm calling the same function. This is a good opportunity to abstract this and create a singular function that 
handles the end of every round. 
*/

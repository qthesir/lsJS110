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

// Shoot... I also have to weight the cards by the amount thats left, in order to make the deal reflective of
// the number of cards in the deck. Duh. Not just pick a random card, then decrement. The probability of the
// card being selected depends on how much of the card is left. May honestly be easier to just keep track of all
// cards in the deck.

const takeCardFromDeck = (deck) => {
  return deck.pop();
};

// I only want this function to do one thing... But its mutating 2 things
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
      if (total + MAX_VALUE_OF_ACE >= GOAL_POINTS) {
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

// Ok, thinking through the playerTurn... The player has two choices: Hit or stay, based on whats been displayed.
// They can hit as many times as they want until they bust. So their turn will continue until they stay or bust.
// The bust will also cause a special thing to happen... The player will immediately lose. The entire game will
// stop. So the bust check will have to be in an outer loop, checking for stay or hit.

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
      prompt(`Dealer wins. Try again next time!`);
      break;
    case "tie":
      prompt(" ");
      prompt(`Its a tie! Bet stays on the table.`);
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
  prompt("====================================");
};

const playAgain = () => {
  prompt("Would you like to play again? Enter y for yes and n for no");
  let playerResponse = readlineSync.question();

  if (playerResponse.includes("y")) {
    return true;
  } else if (playerResponse.includes("n")) {
    return false;
  }
};

// Ok, so I need to keep track of game state here. Before, I did it with a board. But now does it make
// sense to have an object that represents the player and the dealer? And what cards they have?

while (true) {
  let deck = initializeDeck();

  let playerHand = [];
  let dealerHand = [];

  dealCards(playerHand, dealerHand, deck);

  playerTurn(playerHand, dealerHand, deck);

  let playerScore = getPointsInHand(playerHand);
  let dealerScore = getPointsInHand(dealerHand);

  if (isBust(playerScore)) {
    prompt("");
    displayHand(playerHand, dealerHand, true);
    displayWinner(playerScore, dealerScore);
    if (playAgain()) {
      console.clear();
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerScore}`);
  }

  dealerTurn(playerHand, dealerHand, deck);

  dealerScore = getPointsInHand(dealerHand);

  if (isBust(dealerScore)) {
    prompt("");
    displayHand(playerHand, dealerHand, true);
    displayWinner(playerScore, dealerScore);
    if (playAgain()) {
      console.clear();
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stayed at ${dealerScore}`);
  }

  logFinalScore(playerHand, dealerHand, playerScore, dealerScore);
  displayWinner(playerScore, dealerScore);

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

*/

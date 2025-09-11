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

const initializeDeck = () => {
  let deck = [];
  CARDS.forEach((card) => {
    SUITS.forEach((suit) => {
      deck.push({ value: card, suit: suit });
    });
  });
  return deck;
};

const prompt = (text) => {
  console.log(text);
};

const displayHand = (playerHand, dealerHand) => {
  prompt(`Dealer has: ${dealerHand[0]["value"]} and Unknown`);
  prompt(`You have: ${playerHand.map((card) => card["value"]).join(" and ")}`);
};

// Shoot... I also have to weight the cards by the amount thats left, in order to make the deal reflective of
// the number of cards in the deck. Duh. Not just pick a random card, then decrement. The probability of the
// card being selected depends on how much of the card is left. May honestly be easier to just keep track of all
// cards in the deck.

const takeCardFromDeck = (randomIndex, deck) => {
  return deck.splice(randomIndex, 1)[0];
};

// I only want this function to do one thing... But its mutating 2 things
const dealCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);

  return takeCardFromDeck(randomIndex, deck);
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

  console.log({ totalWithoutAces });

  let total = totalWithoutAces;

  hand
    .filter((card) => card.value === "Ace")
    .forEach((_) => {
      if (totalWithoutAces + MAX_VALUE_OF_ACE > 21) {
        total = total + MIN_VALUE_OF_ACE;
      } else {
        total = total + MAX_VALUE_OF_ACE;
      }
    });
  console.log({ totalWithoutAces, total });

  return total;
};

const isBust = (hand) => {
  return getPointsInHand(hand) > 21;
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
  while (true) {
    prompt(" ");
    displayHand(playerHand, dealerHand);
    prompt(" ");
    prompt("Type h for hit and s for stay");
    let playerChoice = readlineSync.question();
    if (playerChoice === "h") {
      playerHand.push(dealCard(deck));
    }
    if (playerChoice === "s" || isBust(playerHand)) {
      break;
    }
  }
  return null;
};

const dealerTurn = () => {};

const playAgain = () => {};

// Ok, so I need to keep track of game state here. Before, I did it with a board. But now does it make
// sense to have an object that represents the player and the dealer? And what cards they have?

let deck = initializeDeck();

// console.log(deck);

let playerHand = [];
let dealerHand = [];

dealCards(playerHand, dealerHand, deck);

// console.log(deck);
// console.log(playerHand);
// console.log(dealerHand);

playerTurn(playerHand, dealerHand, deck);

if (isBust(playerHand)) {
  prompt("");
  displayHand(playerHand, dealerHand);
  prompt("You busted! Dealer wins.");
}



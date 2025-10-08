/*



*/

// Standard role-playing dice, with 20 faces,
// specified in terms of minimum and maximum face value.

let d20 = { min: 1, max: 20 };

function roll(die) {
  return Math.floor(Math.random() * (die.max - die.min + 1)) + die.min;
}

// Standard target roll tossing a 20-sided die,
// with optional bonus and penalty dice.
// Used to determine whether a character wanting to perform an action
// succeeds or fails, based on whether the sum of the dice is higher
// or lower than the relevant character trait.
// (See below for examples.)
function targetRoll(characterValue) {
  let result = roll(d20);

  console.log("--> " + result);

  switch (result) {
    case 1:
      automaticFail();
      break;
    case 20:
      automaticSuccess();
      break;
    default:
      void (result >= characterValue ? success() : fail());
  }
}

function success() {
  console.log("Your character succeeds.");
}

function fail() {
  console.log("Your character fails.");
}

function automaticSuccess() {
  console.log("Your character succeeds without effort. Glory!");
}

function automaticFail() {
  console.log("Meagre attempt. Your character fails miserably.");
}

// Example character.
let myCharacter = {
  name: "Jenkins",
  strength: 4,
  constitution: 6,
  education: 11,
  luck: 3,
  sanity: 9,
};

// Example rolls:

// Jenkins wants to break in a door with brute force,
// so he has to roll against his strength value.
targetRoll(myCharacter.strength);

// Jenkins found an ancient scroll and attempts to decipher it.
// He has to roll against his education, in order to determine
// whether he's able to read it.
targetRoll(myCharacter.education);

/*
The reason the code is returning success or failure twice when the dice roll is 1 or 20 is because
the switch statement cases 1 and 20 lack break statements. Therefore, when the player rolls a 1,
automaticFail() will be called in case 1, break through to case 20, where automaticSuccess() is called, and
then break through to the default statement, which is checking if the result is greater than the character
value. The fix here is simple: Add the break statements. The code is below:


As an aside, I did find it strange that character levels are inversely related to their probabiliy of 
winning. That is, a value of 4 is better than a value of 11. It works, but this is an odd game mechanic. 

*/
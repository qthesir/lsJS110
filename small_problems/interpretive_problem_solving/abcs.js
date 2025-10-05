/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters 
from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled 
using the set of blocks, false otherwise. You can consider the letters to be case-insensitive 
when you apply the rules.

*/

/*
PEDAC

Problem
Write a function that takes a word as an input, and returns true or false as an output, depending on whether
the word can be constructed with the spelling blocks. Each block has two letters per block, and can 
only be used once. If a letter in the word does not have a corresponding block, or that block is already
in use by another character in the word, return false. Otherwise, true. 

Examples
Requirements
- Take a string word as an input
- Return true if the word can be constructed by a subset of unique blocks in the overall set of blocks,
false otherwise
- A block is a pair of letters 
- The specific collection of blocks is as follows: 
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
- Each block can only be used once in a word 
  - That is, words that use both letters on a block will be invalid. 
- The evaluation of a valid word is not case sensitive. That is, the blocks are case agnostic and 
so are the letters in the word. 

Data Structures
Input: String word
Output: True or false, depending on whether the word can be constructed with a unique subset of 
the collection of blocks given
Intermediate: Will need to create a const nested array to hold the blocks (could also be an object,
or nested object, with an in-use property, but I think popping from the array makes more sense). Each
character in the string will need to be checked against the array of blocks to see if the block is in
the array. If it is, then take the block out, and continue. If it is not, then return false. 


Algorithm
High level
Accept a word string as an argument and initialize a collection of blocks. Iterate through each 
character in the word. If the character is on one of the blocks in the collection, remove the block 
from the collection and continue to the next character. If the character is not on a block, return false.
If the iteration completes without finding any missing blocks, return true. 

Step by step 
- Accept 'word' as an argument
- Declare a constant variable 'blocks' and set it equal to a nested array of blocks, all 
lowercase
- For each character in word:
  - Lowercase the character
  - Check if the lowercase character is in a block
  - If it is, remove the block from the list of blocks
  - If it is not, return false
- If the loop completes, return true 

Helper: Check if the lowercase block is in the block

Helper: Remove the block from the list of blocks
*/

const BLOCKS = [
  ["b", "o"],
  ["x", "k"],
  ["d", "q"],
  ["c", "p"],
  ["n", "a"],
  ["g", "t"],
  ["r", "e"],
  ["f", "s"],
  ["j", "w"],
  ["h", "u"],
  ["v", "i"],
  ["l", "y"],
  ["z", "m"],
];

const isBlockWord = (word) => {
  let blocks = [...BLOCKS];
  for (let i = 0; i < word.length; i++) {
    let lowerCaseLetter = word[i].toLowerCase();
    if (!blocks.flat().includes(lowerCaseLetter)) {
      return false;
    }
    blocks = blocks.filter((block) => !block.includes(lowerCaseLetter));
  }

  return true;
};

const isBlockWord2 = (word) => {
  let blocks = [...BLOCKS];
  for (let i = 0; i < word.length; i++) {
    let lowercaseLetter = word[i].toLowerCase();
    let removedBlock;
    for (let block in blocks) {
      console.log(blocks[block], lowercaseLetter);
      if (blocks[block].includes(lowercaseLetter)) {
        removedBlock = blocks[block].splice();
        break;
      }
      if (!removedBlock) {
        return false;
      }
    }
  }
  return true;
};

const isBlockWord3 = (word) => {
  let blocks = [...BLOCKS];
  let lowercaseWord = word.toLowerCase();
  for (let i = 0; i < lowercaseWord.length; i++) {
    let letter = lowercaseWord[i];
    let idx = blocks.findIndex((block) => block.includes(letter));
    if (idx === -1) return false;
    blocks.splice(idx, 1);
  }

  return true;
};

// Examples

console.log(isBlockWord3("BATCH")); // true
console.log(isBlockWord3("BUTCH")); // false
console.log(isBlockWord3("jest")); // true
console.log(isBlockWord3("floW")); // true
console.log(isBlockWord3("APPLE")); // false
console.log(isBlockWord3("apple")); // false
console.log(isBlockWord3("apPLE")); // false
console.log(isBlockWord3("Box")); // false

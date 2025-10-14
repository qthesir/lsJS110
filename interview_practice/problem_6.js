/*
PEDAC
Problem
Write a function that takes a string as an argument, and returns an object where the keys
represent the lowercase letters that appear in the string, and the values are a count of the 
number of times that letter appears in the string. 

Examples
Requirements 
- Accept a string as an argument
- Return an object where the keys represent the lowercase letters that appear in the string,
and the values represent the count of the number of time the lowercase letter appears in 
the string
- The object does not inclde any other characters other than lowercase letters
- Uppercase letters are not converted to lowercase letters in this case - the 
function is case insensitive. 
- Non-alphabetic characters are also not includes
- The criteria for inclusion is thus the following: Any lowercase alphanumeric 
letter. Case sensitive. 

Data Structures
Input:
Output:
Intermediate: I'm thinking I can construct the object using a similar for loop that 
I used in the last problem. For each character in the string, check to see if it
is a lowercase character. If it is a lowercase character, then add it to the object.
If it is not, do nothing.

Algorithm
The function accepts a string as an argument. Declare and initialize an empty object. 
For each character in the string, check if it is a lowercase alphabetic character. If 
it is, then initialize its value to 1 on the object, or increment by 1 if it already exists. 
When complete, return the object to the caller.

Step by step
- Accept a string as an argument
- SET 'outputHash' = {}
- For each character in the string:
  - Check if the character is a lowercase character
  - If it is, check to see if the character already exists on the object
    - If it does not, initialize the value to 1
    - If it does, increment the value by 1
- Return output hash to the caller 

*/

const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";

const countLetters = (string) => {
  let outputHash = {};
  let regex = /[a-z]/;
  string.split("").forEach((char) => {
    if (regex.test(char)) {
      outputHash[char] ? (outputHash[char] += 1) : (outputHash[char] = 1);
    }
  });
  console.log(outputHash);
  return outputHash;
};

const p = console.log;
const objeq = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

let expected = { w: 1, o: 2, e: 3, b: 1, g: 1, n: 1 };
p(objeq(countLetters("woebegone"), expected));

expected = { l: 1, o: 1, w: 1, e: 4, r: 2, c: 2, a: 2, s: 2, u: 1, p: 2 };
p(objeq(countLetters("lowercase/uppercase"), expected));

expected = { u: 1, o: 1, i: 1, s: 1 };
p(objeq(countLetters("W. E. B. Du Bois"), expected));

p(objeq(countLetters("x"), { x: 1 }));
p(objeq(countLetters(""), {}));
p(objeq(countLetters("!!!"), {}));

/*
Interesting note about regex here - if you're testing individual characters, 
don't use the /g flag on the regex, because once it returns true on a specific character,
it updates an index, and the next time it encounters that character, it will try to
evaluate, say, 'e', because its 'e', at index 2, which would return false. 

*/

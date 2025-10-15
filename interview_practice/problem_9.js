/*
Problem
Write a function that takes two arguments: a string, and a substring. It should return
the number of times the substring occurs in the string. 

Examples / Test Cases
Requirements 
- Accept two arguments: A string, and a substring
- Return the number of times the substring occurs in the string
- Overlapping strings don't count; each character can only be used once in a string
- If the string is empty, the function should return 0

Data Structures
Intermediate: I'm thinking I can use a similar approach to last time... Hmmm, but not exactly,
because I'll need to decrement by the length of the string. I could also do while
array.length is greater than the length of the input string, and a complete iteration has
passed... but that is more complicated. I will re-use my prior strategy.

I could also use regex here. That would make it even easier. 

Algorithm 
The function will accept a string and a substring as an input. It will break the 
string into an array of characters. For each character, starting with the 
last index, add the preceding character to a new string. If the string matches
the substring passed in as an input, increment a count by 1, remove the characters from 
the string, and increment the index by an amount equal to the length of the input substring.

Step-by-step
- Accept a string and a substring as an argument
- Define a regex pattern that identifies occurences of the substring
- Use the regex.match to find all of the substrings that match to pattern
- Return the length of the .match result

Step-by-step 
- Accept a string and a substring as an input
- Break the string into an array of characters
- SET newString = []
- SET countsubstrings = 0
- For each character in the string starting with index string.length + 1:
  - Add the character to the new string
  - Check to see if the new string concatenated equals the substring 
  - Empty new string
  -  If it does, remove the characters from the string array
  - Increment the index by the length of the substring
  - Increment countsubstrings by 1 
- Return countsubstrings

*/

const removeCharacters = (currentSubstring, stringArr) => {
  currentSubstring.forEach((char) => {
    stringArr.splice(stringArr.indexOf(char), 1);
  });
};

const countSubstrings4 = (string, substring) => {
  if (!substring) return 0;
  let currentSubstring = [];
  let countSubstrings = 0;
  let stringArr = string.split("");
  let i = 0;
  while (i < stringArr.length) {
    currentSubstring.push(stringArr[i]);
    if (currentSubstring.join("") === substring) {
      removeCharacters(currentSubstring, stringArr);
      currentSubstring = [];
      i = 0;
      countSubstrings += 1;
      continue;
    }
    for (let j = 1; j < stringArr.length; j++) {
      currentSubstring.push(stringArr[j]);
      if (currentSubstring.join("") === substring) {
        removeCharacters(currentSubstring, stringArr);
        currentSubstring = [];
        i = 0;
        countSubstrings += 1;
        break;
      }
    }
    currentSubstring = [];
    i++;
  }
  return countSubstrings;
};

const countSubstrings2 = (string, substring) => {
  let currentSubstring = [];
  let countSubstrings = 0;
  let stringArr = string.split("");
  for (let i = stringArr.length - 1; i >= 0; i--) {
    currentSubstring.push(stringArr[i]);
    if (currentSubstring.reverse().join("") === substring) {
      removeCharacters(currentSubstring, stringArr);
      currentSubstring = [];
      i = i - substring.length - 1;
      countSubstrings += 1;
    }
  }
  console.log(countSubstrings);
  return countSubstrings;
};

const countSubstrings3 = (string, substring) => {
  let regex = new RegExp(substring, "g");
  substringOccurences = string.match(regex);
  console.log(substringOccurences);
  return substringOccurences?.length || 0;
};

const countSubstrings5 = (string, substring) => {
  let noSubstringFound = true;
  let strArray = string.split("");
  let substringCount = 0;
  do {
    noSubstringFound = true;

    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] === substring) {
        substringCount++;
        noSubstringFound = false;
        strArray.splice(i, 1);
        break;
      }
      let substringBuilder = [strArray[i]];
      for (let j = i + 1; j < strArray.length; j++) {
        substringBuilder.push(strArray[j]);
        if (substring === substringBuilder.join("")) {
          substringCount++;
          noSubstringFound = false;
          removeCharacters(substringBuilder, strArray);
          break;
        }
      }
    }
  } while (!noSubstringFound);

  return substringCount;
};

const countSubstrings6 = (str, sub) => {
  let substringCount = str.split(sub).length - 1;
  console.log(str.split(sub));
  console.log(substringCount);
  return substringCount;
};

const countSubstrings = (str, sub) => {
  let m = sub.length;
  let subCount = 0;
  for (let i = 0; i <= str.length - m; i++) {
    if (str.slice(i, i + m) === sub) {
      subCount += 1;
      i += m - 1;
    }
  }
  return subCount;
};

const p = console.log;
p(countSubstrings("babab", "bab") === 1);
p(countSubstrings("babab", "ba") === 2);
p(countSubstrings("babab", "b") === 3);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("", "x") === 0);
p(countSubstrings("bbbaabbbbaab", "baab") === 2);
p(countSubstrings("bbbaabbbbaab", "bbaab") === 2);
p(countSubstrings("bbbaabbbbaabb", "bbbaabb") === 1);

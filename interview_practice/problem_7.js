/*
Problem
Write a function that counts the number of uniquely occuring pairs in an 
array of numbers.

Examples 
Requirements
- Accpet an array of numbers as an argument
- Return the number of unique pairs that appears in the array
- Pairs should only count once; that is, if two numbers are used as a pair, those
numbers cannot be considered for future pairs
- If the array is empty or contains only 1 value, the function should return 1

Data Structures
Intermediate: In order to ensure I'm only counting pairs once, I can remove the 
numbers which I've counted as pairs from the array each time I identify a pair. 
In order to do this properly, I can use a couple methods: The first method I could
use is while (true), and if there is a complete iteration through the array without 
an identified pair, then break. Second method, is that I could count down from the 
top index. I'm not sure if counting down from the top index would work... I guess, in
the event a pair were identified, it would reference the current index which would 
be undefined, but it would still work. it is definitely conceptually simpler and less risky. 

Algorithm
The function takes an array of numbers as an argument. For each number, starting at the 
rightmost index, it checks to see if the element at that index is equal to any of the 
elements at the preceding indices. If it is, a count should be incremented by 1,
elements at both indices should be removed from the array, and the index should be 
decremented by an extra digit (to account for the two missing values in the array). 
When the iteration completes, return the value to the caller.

Step by step 
- Accept an array of numbers as an argument
- SET count = 0
- For each number, starting at numArray.length - 1:
  - For each number preceding the current number:
    - If number === current number:
      - Count += 1 
      - Remove numer and current number from the array
      - decrement i by 2 instead of 1
      - break out of the current loop
Return count

*/

const pairs = (numArray) => {
  let count = 0;
  for (let i = numArray.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (numArray[i] === numArray[j]) {
        count += 1;
        numArray.splice(i, 1);
        numArray.splice(j, 1);
        i--;
        break;
      }
    }
  }
  return count;
};

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);

// Write a program that solicits six numbers from the user and logs a message that describes
// whether the sixth number appears among the first five numbers.

/* 
Examples: 

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

*/

/*
PEDAC 
Problem

Based on the first 5 numbers input by the user, identify whether or not the 6th number input by the
user occurs at least once in the first 5 numbers. 

Input: 6 numbers
Ouput: Indicates whether the 6th number occurs in the first 5 numbers 

Explicit Requirements:
- The program needs to prompt the user to enter 6 numbers
- The program only accepts numbers
- The program is checking to see if the 6th number appears in the first 5 numbers.
- The 6th number only needs to occur once for the program to tell the user that the number "does" 
appear. 
- 

Implicit Requirements:
- Once the user enters all 6 numbers, the program will run and return "The number X does / does not 
appear in [list of first 5 numbers]." depending on whether or not the 6th number is present in the 
first 5. 
- The program only accepts whole integers (based on the examples)
- The interaction with the user will take place in the console. 
- 

Questions
- Should there be some additional indication to the user that the number 18 appears? 
- Will the program accept negative values?
- Will the program accept 0 values?
- Will the program accept infinity? How will infinity be handled - presumably like any ordinary 
number?

Mental Model 
The program will ask the user to input 6 numbers. It will check if the 6th number appears in the 
previous 5 numbers. If it does, it will tell the user that the 6th number is in the previous 5. If it
does not, the program will tell the user that it does, in fact, appear. 

Examples / Test Cases
See the above

Data Structures
The first 5 numbers input by the user could be input into an array. Like so:

[25, 15, 30, 17, 18]

Whereas the sixth number could be taken as a standalone value. 

Algorithm:
1. Set numArray to an empty array
2. Prompt the user to input the first number
3. Add the number to the numArray
4. Repeat for each of the 5 initial numbers the user is prompted to enter
5. Prompt the user to enter the 6th number. Save this number as searchValue
6. See if the 6th number appears in the first 5 numbers
7. Print a statement to the user indicating that the 6th number does or does not appear in the first
5, depending on the result. 
*/

// Coding with Intent

const rlsync = require("readline-sync");

function searchForNumber() {
  let numArray = [];

  let num1 = Number(rlsync.question(`Enter the 1st number: `));
  numArray.push(num1);

  let num2 = Number(rlsync.question(`Enter the 2nd number: `));
  numArray.push(num2);

  let num3 = Number(rlsync.question(`Enter the 3rd number: `));
  numArray.push(num3);

  let num4 = Number(rlsync.question(`Enter the 4th number: `));
  numArray.push(num4);

  let num5 = Number(rlsync.question(`Enter the 5th number: `));
  numArray.push(num5);

  let num6 = Number(rlsync.question("Enter the last number: "));
  let searchValue = num6;

  if (numArray.includes(searchValue)) {
    console.log(`The number ${num6} appears in ${numArray}.`);
  } else {
    console.log(`The number ${num6} does not appear in ${numArray}.`);
  }
}

searchForNumber();

// Mistake I made here: You haveee to coherece the return value to a number. I mean, in this case, you
// did not really have to do that, but you should do that if you're doing numerical logic, or else
// you could run into issues. If I had, for example, added the two numbers together, I would have
// gotten a string concatenation instead of addition.

// Further Exploration

/* What if the problem was looking for a number that satisfies some condition 
(e.g., a number greater than 25), instead of a specific number? Would the current solution 
still work? Why or why not? Think about this first before scrolling down.
*/

/*
Ok, so, thinking about this practically... How would you implement this? How would you pass in a 
condition to a function (maybe revisit the lesson on selection and transformation) and then 
adequately portray that to the user? Certainly, a condition could be passed in... But how would you 
rephrase that to the user? 

Ok, so this is another variant of a generic function... Perhaps I could pass a callback function? 
Or a callback conditional.

You could give the user an option to select the comparison operator they want. 

Or, you could use another array method, called .some(), which passes in a specific generic condition. 
*/

function searchForNumber2() {
  let numArray = [];

  let num1 = Number(rlsync.question(`Enter the 1st number: `));
  numArray.push(num1);

  let num2 = Number(rlsync.question(`Enter the 2nd number: `));
  numArray.push(num2);

  let num3 = Number(rlsync.question(`Enter the 3rd number: `));
  numArray.push(num3);

  let num4 = Number(rlsync.question(`Enter the 4th number: `));
  numArray.push(num4);

  let num5 = Number(rlsync.question(`Enter the 5th number: `));
  numArray.push(num5);

  let num6 = Number(rlsync.question("Enter the last number: "));
  let searchValue = num6;

  if (numArray.some((num) => num > searchValue)) {
    console.log(`There is a number greater than ${num6} in ${numArray}.`);
  } else {
    console.log(`There is not a number greater than ${num6} in ${numArray}.`);
  }
}

searchForNumber2();

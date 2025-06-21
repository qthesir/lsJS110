/*
Write a function that takes a string as an argument and returns true if all 
parentheses in the string are properly balanced, false otherwise. To be 
properly balanced, parentheses must occur in matching '(' and ')' pairs.
*/

/*
PEDAC

Problem

Input: A string value

Output: Outputs true if the parenthesis are properly balanced, and false if they 
are not

Explicit Assumptions
- Accept a string as an argument.
- Return true if parenthesis are balanced, false if they are not.
- To be properly balanced, parenthesis must appear in matching pairs. 

Implicit Assumptions
- The function does not accept values other than strings
- "Balanced" parenthesis, based on the test cases, mean that a ( parenthesis
corresponds with another ) later in the sequence. 
- Parenthesis facing the wrong direction, ") hey! (" in the test cases, should
return false. They need to be the appropriate pair. 
- Per the above, ORDER MATTERS, not just the pair. 

Mental Model
The program accepts a string as an argument. It iterates through the string, 
looking to see if every parenthesis' have an appropriate matching pair. If 
the parenthesis do not have a matching pair, return false. 

Data Structures 
It makes sense to split this into an array, so that array operations can be performed 

Algorithm
- Accept a string as an argument
- Turn the string into an array
- create a new variable "pair" and set it equal to []
- Iterate through the array with two points
  - The first pointer finds "(", removes it from the array and adds it to pair
  - The second pointer looks for ")" after "(" is found. If it finds it, it removes it from the array and 
  adds it to pair.
  - If the pair is complete, set pair to [] and restart the loop
  - If there are no more "(", exit the loop 
- If the last pair is not empty, return false
- If, after iterating through the array, there are any remaining parenthesis, then return false.
- Return true
*/

// Code with intent

const isBalanced = (string) => {
  let stringArr = string.split("");
  let pair = [];
  while (stringArr.includes("(")) {
    pair = createPair2(stringArr);
    isCompletePair(pair) ? (pair = []) : pair;
  }
  if (pair.length !== 0 || stringArr.includes(")")) {
    return false;
  }

  return true;
};

const createPair = (stringArr) => {
  let pair = [];
  let indexOfLeftParenthesis = stringArr.indexOf("(");
  if (indexOfLeftParenthesis !== -1) {
    pair[0] = stringArr.splice(indexOfLeftParenthesis, 1)[0];
    if (stringArr.indexOf(")", indexOfLeftParenthesis) !== -1) {
      pair[1] = stringArr.splice(
        stringArr.indexOf(")", indexOfLeftParenthesis),
        1
      )[0];
    }
  }
  return pair;
};

const createPair2 = (stringArr) => {
  let pair = [];
  let indexOfLeftParenthesis = stringArr.indexOf("(");
  let indexOfRightParenthesis = stringArr.indexOf(")", indexOfLeftParenthesis);
  if (indexOfLeftParenthesis === -1) {
    pair = [];
  } else if (indexOfRightParenthesis === -1) {
    pair = [stringArr.splice(indexOfLeftParenthesis, 1)[0]];
  } else {
    pair = [
      stringArr.splice(indexOfRightParenthesis, 1)[0],
      stringArr.splice(indexOfLeftParenthesis, 1)[0],
    ].reverse();
  }
  return pair;
};

const isCompletePair = (pair) => {
  return pair[0] === "(" && pair[1] === ")";
};

// Examples

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/*
Notes and reflection
Hmmm... Could use the pairing rule to sort this out. Each "(" should have a 
corresponding ")", making a pair. If there are any parenthesis which do not have
a paired value, then it should return false.

No, that wont quite work either. The reason it wont is because order matters. 
") hey! (" is technically a pair of parenthesis, they are in the improper order.

You could go through and construct pairs such that ['(',')'] is the only 
true value, popping off each other pair you run into. If you get to the end of the array, and
your current pair equals false, then you return false for the whole program. 

So, maybe this is how it works: You have two pointers. The first pointer looks for a "(". Once
"(" is found, then you have another pointer that, from that point, looks for a  ")". They are put
into a pair array and poped off of the original. If one does not have a pair by the end of the sequence, 
then the program returns false. 

There is an edge case where you may have a straggling ")" at the end of the array. In this case, 
you could, after the pairs have gone through and popped off, do a check to see if the array includes 
any stragglers (array.includes(')')). If it does, then you return false. If it does not, return true. 

ANOTHER potential way of doing this is to strip all of the values out except parenthesis. Although that
would be a whole other operation, using .filter. It would make it cleaner but its kind of unnescessary 
with the steps that I've outlined above. 

I can use .indexOf() to find the index of the first "(". If there are no more, exit the loop.

I'm not happy with the create pair function. Its just... Unsatisfactory. For multiple reasons. First,
its complicated and hard to read. Second, it has a return value AND side effect. It should ideally only
have 1 of those things. So, I need to figure out how to separate the creating of the pairs, and removing
the values. 

But its like... this is the pointer strategy. You're doing a pointer to '(' and removing it. Then, from
the point that you just removed, you're looking for the ')' and removing it. 

I think its just identifying that second pointer after removing the first one is pretty difficult. You 
could, however, identify the indices, and THEN use array destructuring to take them both out at once. 

I'm going to try that approach.

Holy moly... I overcomplicated the absolute shit out of this. haha. What an L. 

With the LS solution, they thought of "balancing" the parenthesis like an accounting problem. If there
are equal numbers of ( and ), then the solution is correct. Fuck. This is god damn genius. 

Checking if the parenthesis is negative is how you get the edge case of there being balanced parenthesis
but a ) occurs before as (, which is considered false. 

Do further exploration later. 
*/

function isBalancedLS(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
}

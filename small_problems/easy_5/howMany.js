/*
Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences. Consider the words 
case sensitive e.g. ("suv" !== "SUV").
*/

/*
PEDAC

Problem

Input: Array of elements

Output: Sequential console output of the count of each element in the array

Explicit Assumptions
- The element count is case sensitive - that is, SUV and suv will count as different elements. 1 suv and 1 SUV
- The function will count the number of elements the array
- The return values will be logged to the console.

Implicit Assumptions
- The program accepts a single array
- Return values will be logged to the console sequentially, with the format element => count, with one mapping
per line. 
- The output sequence does not matter - appears to be in the order that the elements appeared

Questions
- Can the program accept array elements other than strings?

Mental Model
The program accepts an array of elements as an argument. It iterates through the array, incrementing the number
of each element that it encounters. The elements and the frequency that they appear are logged sequentially to 
the console. 

Examples / Test Cases

Data Structures 
THe program will accept an array as an input. I'm planning on using an object to keep track of the mapping of
the element to its count / number of times it appears. The object wont be directly printed to the 
console, the program will have to iterate through the object and log each of its key: value pairs to the console.

Algorithm
- Take the array of elements as an input
- Create an output object elementCount = {}
- Check if each element in the input array exists in elementCount. 
  - If it doesn't exist, create a new key and set its value equal to one
  - If it does exist, increment the value by 1
- Iterate through each key / value pair in elementCount
  - Log to the console in the following format: `{key} => {value}`
- Return undefined

*/

// Code with intent
const countOccurrences = (array) => {
  let elementCount = {};
  array.forEach((element) => {
    elementCount[element]
      ? (elementCount[element] += 1)
      : (elementCount[element] = 1);
  });

  let elementCountArray = Object.entries(elementCount);
  for (let i = 0; i < elementCountArray.length; i++) {
    console.log(`${elementCountArray[i][0]} => ${elementCountArray[i][1]}`);
  }

  return undefined;
};

const countOccurrences2 = (array) => {
  let elementCount = {};
  array.forEach((element) => {
    let lowerCaseElement = element.toLowerCase();
    elementCount[lowerCaseElement]
      ? (elementCount[lowerCaseElement] += 1)
      : (elementCount[lowerCaseElement] = 1);
  });

  logElements(elementCount);

  return undefined;
};

const logElements = (obj) => {
  for (key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
};

// Example:

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);
countOccurrences2(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

/*
Notes / Reflection

Think I'm going to use an object here... If I do obj[array.value] at each value, I can count the objects.
Then I can do like obj[array.value] += 1 || obj[array.value] = 0. Have to have a value there initially, if I 
try to add 1 to undefined, I'll get an issue. I can also use the ? operator (whatever thats called cant remember)
A ternary operator is the name of that thing. 

Should have used for... in syntax instead. I had kind of forgetten this syntax. The for...in and for...of. This
is more elegant, and avoids needing to do object.entries. It is also less code. This would be a better way to do it.

The solution also uses a second function in the solution, logsOccurences, which makes it easier to read.
I should have done this... I have stopped thinking about how to make the function more modular. Need to add that
back to my habits. 

Remember the single responsibility principle. Each function should have a single responsibility. The first 
function for recording the occurences, and the second function for logging them. 
*/

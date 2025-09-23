/*
Write a function that takes a grocery list in a two-dimensional array and returns a 
one-dimensional array. Each element in the grocery list contains a fruit name and a 
number that represents the desired quantity of that fruit. The output array is such 
that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return 
an array that contains 3 apples, 1 orange, and 2 bananas.
*/

/*
PEDAC
Problem
The problem is asking us to build a function, buyFruit, that takes an array of nested arrays as an input. The
nested arrays have two elements: the first element is the name of the fruit, and the second is the quantity of that
fruit, expressed as an integer. The function should transform the input array into an output array that 
contains the names of the fruit in the input array at the frequency indicated by the quantity of fruit. 

Examples / Test Cases
Requirements
- Accept a two-dimensional array as an input
- Each sub-array of the input array contains two elements: The first element a string, and the second element 
an integer
- Output a list of strings with the names of the first element of the input array appearing the number of times
indicated by the second element in the input array.
- The input array must adhere to this structure. Other arrays will not be accepted.

Data Structures
Input: A two dimensional array, with each sub-array containing two elements: a string and an integer
Output: A one dimensional array with the names of the first elements appearing the number of times indicated by
the second element
Intermediate: Here, we will probably use flatmap on the first array (or map.flat), with each element being
expanded to the multiple of strings indicated by the sub-array. 

Algorithm
Mental Model
The function will accept a two-dimensional array as an input. Each sub-array of the input will contain
two elements: The first element the name of the fruit to be purchased, and the second an integer that represents
the number of fruit. For each sub-array in the input array, create another array that contains the name of 
the fruit to be purchased repeated the number of times indicated by the number of fruit, and add it to a new 
array. Flatten the new array into a one dimensional array and return it to the caller. 

Step By Step
Main algorithm
- Accept a groceryList two dimensional array as an input
- Declare a new array individualItems and initialize it to an empty array
- For each sub-array in grocery list:
  - Create a new array with the name of the fruit in each element, repeated the number of times indicated by the 
  sub-array quantity
  - Add the new array to the individualItems
- Flatten individualItems and return it to the caller 

Helper: Create a new array with the name of the fruit in each element, repeated the number of times 
indicated by the sub-array quantity
- Accept a grocery list sub-array as an input
- Declare a new array fruitItems and initialize it to an empty array
- Add the name of the fruit to the array
- Repeat step 3 the same number of times as the quanity of fruit 
- Return the array to the caller 

*/

// Code with intent

const buyFruit = (groceryList) => {
  return groceryList.flatMap((grocery) => {
    return `,${grocery[0]}`.repeat(grocery[1]).split(",").slice(1);
  });
};

const buyFruit2 = (groceryList) => {
  let individualItems = groceryList.map((grocery) => {
    let individualItem = [];
    let i = 0;
    while (i < grocery[1]) {
      individualItem.push(grocery[0]);
      i++;
    }
    return individualItem;
  });

  return individualItems.flat();
};

const buyFruit3 = (groceryList) => {
  return groceryList.flatMap((grocery) => {
    const fruitName = grocery[0];
    const quantity = grocery[1];
    return Array(quantity).fill(fruitName);
  });
};

const buyFruit4 = (groceryList) => {
  return groceryList
    .map((grocery) => {
      const fruitName = grocery[0];
      const quantity = grocery[1];
      return Array(quantity).fill(fruitName);
    })
    .reduce((individualItemsArray, groceries) =>
      individualItemsArray.concat(groceries)
    );
};

// Example:

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);

console.log(
  buyFruit2([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);

console.log(
  buyFruit3([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);

console.log(
  buyFruit4([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);

// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/*
Notes and reflection
Could be a good opportunity for flatmap here...

I like my solution, because its concise, and even posted it! But the ls solution, frankly, is a bit 
more readable. It has a "repeat" helper function that returns an array of repeated values, and 
then uses .reduce to flatten them but concatenating each array 
*/

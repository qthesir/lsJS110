// Practice Problem 1
/*
How would you order the following array of number strings by descending numeric value (largest number 
value to smallest)?
*/

// let arr = ["10", "11", "9", "7", "8"];

// arr.sort((a, b) => {
//   if (Number(a) < Number(b)) {
//     return 1;
//   } else if (Number(a) > Number(b)) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

//console.log(arr);

//console.log(arr.sort((a, b) => Number(b) - Number(a)));

/*
Notes & reflection

Agh! These are string values. The subtraction works fine because they are coherced
to numbers but the comparison is comparing unicode values which is why they are 
weird / off. 
*/

// Practice Problem 2

/* 
How would you order the following array of objects based on the year of publication of each book,
from the earliest to the latest?
*/

let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

// option 1

books.sort((a, b) => {
  const publicationYearA = Number(a.published);
  const publicationYearB = Number(b.published);

  return publicationYearA - publicationYearB;
});

// option 2

books.sort((a, b) => {
  return Number(a.published - b.published);
});

// console.log(books);

// Practice Problem 3

// For each of these collection objects, demonstrate how you would access the letter g.

// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];

// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];

// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];

// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };

// console.log(arr1[2][1][3]);
// console.log(arr2[1]["third"][0]);
// console.log(arr3[2]["third"][0][0]);
// console.log(obj1.b[1]);
// console.log(Object.keys(obj2.third)[0]);

// Practice Problem 4

// For each of these collection objects, demonstrate how you would change the value from 3 to 4

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };

arr1[1][1] = 4;

arr2[2] = 4;

obj1.first[2][0] = 4;

obj2.a.a[2] = 4;

// console.log({ arr1, arr2: arr2 });
// console.log(obj1);
// console.log(obj2);

// Practice Problem 5

// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

// Compute and display the total age of the male members of the family.

const totalAge = (munstersObject) => {
  return Object.values(munstersObject).reduce((acc, cv) => {
    if (cv["gender"] === "male") {
      acc += cv["age"];
    }
    return acc;
  }, 0);
};

const totalAge2 = (munstersObject) => {
  let totalAge = 0;

  for (let munster in munstersObject) {
    if (munstersObject[munster]["gender"] === "male") {
      totalAge += munstersObject[munster]["age"];
    }
  }

  return totalAge;
};

// console.log(totalAge(munsters));
// console.log(totalAge2(munsters));

// Problem 6

/*
One of the most frequently used real-world string operations is that of "string substitution," 
where we take a hard-coded string and modify it with various parameters from our program.
Given this previously seen family object, print the name, age, and gender of each family member:
*/

const printMunsters = (munstersObject) => {
  let name;
  let age;
  let gender;

  for (let munster in munstersObject) {
    name = munster;
    age = munstersObject[name]["age"];
    gender = munstersObject[name]["gender"];

    console.log(`${name} is a ${age}-year-old ${gender}`);
  }

  return undefined;
};

const printMunsters2 = (munstersObject) => {
  Object.entries(munstersObject).forEach((munster) => {
    const name = munster[0];
    const age = munster[1]["age"];
    const gender = munster[1]["gender"];

    console.log(`${name} is a ${age}-year-old ${gender}`);
  });
};

// printMunsters(munsters);
// printMunsters2(munsters);

// Practice Problem 7

// Given the following code, what will the final values of a and b be? Try to answer without running
// the code.

// let a = 2;
// let b = [5, 8];
// let arr = [a, b];

// arr[0] += 2;
// arr[1][0] -= a;

// console.log({ a, b });

/*
a is going to be equal to 2
b is going to be equal to [3,8]

a is a number type, while b is an object. When arr is constructed, a is passed by value, and b is passed
by reference, meaning arr is holding a reference of b in its array. When you mutate arr at index 0, 
this does not mutate a, but changes the value of the first element of arr 1. There is no reference to a, it
is the actual value of a. When you reference the array at index 1, however, this is indexing the array 
reference to b. So, when you mutate index 0 at the array at the 1st index of arr, you are also mutating
b, because both the array in arr at index 1 and the variable b are pointing to the same object in memory. 
Therefore, b is going to equal [3,8], as the value of a, 2, is subtracted from it. 
*/

// Practice Problem 8

// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't
// use a for or while loop.

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

const vowels = ["a", "e", "i", "o", "u"];

Object.values(obj).forEach((array) => {
  array.forEach((string) => {
    string.split("").forEach((char) => {
      if (vowels.includes(char)) {
        // console.log(char);
      }
    });
  });
});

// Practice Problem 9

/*
Given the following data structure, return a new array with the same structure, but with the values in 
each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/

let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

// sortedSubArrays = arr.map((array) => {
//   if (typeof array[0] === "Number") {
//     return [...array].sort((a, b) => a - b);
//   } else if (typeof array[0] === "string") {
//     return [...array].sort();
//   } else {
//     throw new Error('unrecognized type in array elements')
//   }
// });

sortedSubArraysAscending = arr.map((subArray) => {
  return [...subArray].sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
});

sortedSubArraysDescending = arr.map((subArray) => {
  return [...subArray].sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
});

// console.log(sortedSubArraysAscending);
// console.log(sortedSubArraysDescending);
// console.log(arr);

// Practice Problem 11

// Given the following data structure, use the map method to return a new array identical in structure
// to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr4 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

const arr2IncrementedBy1 = arr4.map((object) => {
  return Object.fromEntries(
    Object.entries(object).map((entry) => {
      let incrementedEntry = [...entry];
      incrementedEntry[1] += 1;
      return incrementedEntry;
    })
  );
});

const arr2IncrementedBy1_2 = arr4.map((object) => {
  let newObj = { ...object };
  Object.keys(newObj).forEach((key) => (newObj[key] += 1));
  return newObj;
});

// console.log(arr2IncrementedBy1);
// console.log(arr2IncrementedBy1_2);
// console.log(arr4);

// Practice Problem 12

// Create a deep copy of the following nested array

const arr5 = [
  ["b", "c", "a"],
  ["blue", "black", "green"],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let deepCopyArr5 = JSON.parse(JSON.stringify(arr5));

// console.log(deepCopyArr5);
// console.log(deepCopyArr5 === arr5);

// Practice Problem 13

const truthiness = {
  falsy: [null, undefined, "", false, NaN, 0],
  truthy: ["everything else..."],
};

let deepCopyTruthinessJson = JSON.parse(JSON.stringify(truthiness));

const deepCopy = (obj) => {
  let newObj = { ...obj };
  Object.keys(newObj).forEach((key) => (newObj[key] = [...newObj[key]]));
  return newObj;
};

let deepCopyTruthinessCustom = deepCopy(truthiness);

// console.log(truthiness);
// console.log(deepCopyTruthinessJson);
// console.log(deepCopyTruthinessCustom);
// deepCopyTruthinessCustom.truthy = ["nothing else"];
// console.log(truthiness);
// console.log(deepCopyTruthinessCustom);

// Not going to work. The json stringify doesn't recognize undefined or NaN. It just returns null.

// Practice Problem 14

/*
Given the following data structure, use a combination of methods, including filter, to return a new array 
identical in structure to the original, but containing only the numbers that are multiples of 3.
*/

let arr6 = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr6.map((subArr) => {
  return subArr.filter((element) => element % 3 === 0);
});

// console.log(newArr);

// Practice Problem 15

// Given the following data structure, sort the array so that the sub-arrays are ordered basded on the
// sum of the odd numbers that they contain

let arr7 = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

let sortedArr7 = arr7.sort((a, b) => {
  let sumOfOddElementsA = 0;
  let sumOfOddElementsB = 0;

  for (let element of a) {
    element % 2 !== 0 ? (sumOfOddElementsA += element) : sumOfOddElementsA;
  }

  for (let element of b) {
    element % 2 !== 0 ? (sumOfOddElementsB += element) : sumOfOddElementsB;
  }

  return sumOfOddElementsA - sumOfOddElementsB;
});

let sortedArr8 = arr7.sort((a, b) => {
  let sumOfOddElementsA = a
    .filter((ele) => ele % 2 !== 0)
    .reduce((acc, cv) => {
      return acc + cv;
    }, 0);
  let sumOfOddElementsB = b
    .filter((ele) => ele % 2 !== 0)
    .reduce((acc, cv) => {
      return acc + cv;
    });

  return sumOfOddElementsA - sumOfOddElementsB;
});

// console.log(sortedArr7);
// console.log(sortedArr8);

// Practice Problem 16

/*
Given the following data structure write some code to return an array containing the colors of the 
fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be 
capitalized.
*/

let obj3 = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

// Ok, so here, we're looking to say: if the object is a fruit, then return its color. If it is a
// vegetable, then return its size. Capitalize the colors. Uppercase the size.

const transformObj = (obj) => {
  return Object.values(obj).reduce((acc, value) => {
    acc.push(
      value["type"] === "fruit"
        ? value["colors"].map((color) => capitalize(color))
        : value["size"].toUpperCase()
    );
    return acc;
  }, []);
};

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

// console.log(transformObj(obj3));

/* Remember: Compartmentalize functionality into helper functions. No magic numbers. Declare constants / 
immutables at the top of your program. All these things. 
*/

// Practice Problem 17

/*
Given the following data structure, write some code to return an array which contains only the 
objects where all the numbers are even.
*/

let arr8 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

const transformArrToEven = (array) => {
  return array
    .filter((obj) => {
      return Object.values(obj).every((value) => {
        return value.every((element) => element % 2 === 0);
      });
    })
    .reduce((acc, cv) => {
      acc.push({ ...cv });
      return acc;
    }, []);
};

// console.log(transformArrToEven(arr8));

// Practice Problem 18

/*
Given the following data structure, write some code that defines an object where the key is the first 
item in each subarray, and the value is the second.
*/

let arr9 = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

const transformArrToObject = (arr) => {
  return arr.reduce((newObj, entry) => {
    newObj[entry[0]] = entry[1];
    return newObj;
  }, {});
};

// console.log(Object.fromEntries(arr9));

// console.log(transformArrToObject(arr9));
// console.log(transformedArr);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// Practice Problem 19

/*
Remember The Munsters from earlier questions? For this problem, you are tasked with creating a deep copy of the 
munsters object, whose nested objects cannot be altered.
*/

let munsters2 = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

let deepCopyOfMunsters = Object.fromEntries(
  Object.entries(munsters2).map((munster) => {
    return [munster[0], Object.freeze({ ...munster[1] })];
  })
);

let deepCopyOfMunsters2 = Object.entries(munsters2).reduce((acc, cv) => {
  acc[cv[0]] = Object.freeze({ ...cv[1] });
  return acc;
}, {});

deepCopyOfMunsters.herman.age = "f";
console.log(munsters2);
console.log(deepCopyOfMunsters);
console.log(deepCopyOfMunsters2);

// Practice Problem 20

/*
A UUID is a type of identifier often used to uniquely identify items, even when some of those items were 
created on a different server or by a different application. That is, without any synchronization, 
two or more computer systems can create new items and label them with a UUID with no significant 
risk of stepping on each other's toes. It accomplishes this feat through massive randomization. 
The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. 
The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as 
a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 
'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.
*/

UUID_ALLOWABLE_CHARACTERS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
UUID_NUMBER_OF_CHARACTERS = 32;

const getUUID = () => {
  // let uuidValues = [];
  // for (let i = 0; i < UUID_NUMBER_OF_CHARACTERS; i++) {
  //   const newCharIndex = Math.floor(
  //     Math.random() * UUID_ALLOWABLE_CHARACTERS.length
  //   );
  //   const newChar = UUID_ALLOWABLE_CHARACTERS[newCharIndex];
  //   uuidValues.push(newChar);
  // }
  uuidValues = [...Array(UUID_NUMBER_OF_CHARACTERS)].map((ele) => {
    const newCharIndex = Math.floor(
      Math.random() * UUID_ALLOWABLE_CHARACTERS.length
    );
    const newChar = UUID_ALLOWABLE_CHARACTERS[newCharIndex];
    return newChar;
  });

  return createUUIDString(uuidValues);
};

const createUUIDString = (uuidValues) => {
  const segment1 = uuidValues.slice(0, 8).join("");
  const segment2 = uuidValues.slice(8, 12).join("");
  const segment3 = uuidValues.slice(12, 16).join("");
  const segment4 = uuidValues.slice(16, 20).join("");
  const segment5 = uuidValues.slice(20, 32).join("");
  return (
    segment1 + "-" + segment2 + "-" + segment3 + "-" + segment4 + "-" + segment5
  );
};

console.log(getUUID());

/*
Notes

Ok... This actually seems relatively straightforward. Randomly select the character identifier (cant 
remember the name of it) or just randomly select an index from a pre-defined array of the allowable 
characters. Either one will do. Add this to an array up to 32 characters. Then, concat the first 8, with
the next 4, with the next 4... etc with a hyphen. Then return the value to the user. 

Launch school solution, as usual, is very elegant. Instead of creating the array and then concatenating,
it included an additional "sections" array that the problem iterated through at the top level. At the end
of each section, it added the hyphen. It constructed the string basically in the same loop as it was
determining the characters.
*/

// Problem 21

/*
Identify the higher-order functions and callbacks in this code.
*/

function scream(message, helper) {
  const shout = () => message.toUpperCase();

  return helper(shout());
}

const exclamate = str => str + "!!!";

const foo = ["heLp", "Boo", "arGH", "Oh no"];
const FOO = foo.map(word => scream(word, exclamate));

/*
Helper is a callback function, while scream is a higher order function that takes the helper 
callback as an argument. Shout, defined within scream, appears to be passed to helper - 
but it's actually not. Shout is being called and the returned value is being passed to helper. Thus, 
helper is not a higher ord3er function, just a callback. 

Exclamate, which is called by scream, assumes the value of the helper parameter in the scream 
function. Thus, exclamate is a callback function as well passed as an argument to scream. Map, 
which is being called on the foo array, is a higher order function, or built in array method that takes
a callback function as an argument. 

*/  
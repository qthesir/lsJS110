/*

You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light 
that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every 
switch. 
All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, 
you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the 
beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until 
you have made count passes.

Write a program that takes one argument—the total number of switches—and returns an array of the 
lights that are on after count passes.

*/

/*
PEDAC

Problem
The problem is asking us to create a function that takes a single argument, switches, and starts with 
all of those switches in the off position. Then, the program flips every switch. Then, every second switch. 
And every third switch... and so on, until the every "count" switch is equal to the number of switches 
passed into the argument. Once the halting condition is met, the program should return an array of which 
lights were on.

Examples / Test Cases
Requirements
- Accept an integer that represents the number of switches as an argument
- The program must flip every switch, then flip every second switch, then every third... until 'count' 
equals the number of switches passed in as an argument. We can call this the "flip switches" procedure. 
- Return an array that contains the indices of the switches that are in the "on" position after the 
program iterates through its "flip switches" procedure
- The switch array to output starts with 1, rather than 0 

Data Structures
Input: Integer of switches 
Output: Array of switches
Intermediate: I'm thinking about using an array of boolean values, upon which the flip switch procedure will
operate. The array of boolean values will be the length of the number of switches. Once the flip switches 
procedure has completed, I can put the indices of the array elements that are equal to true and add 1 to 
them in order to get the output array. 

Algorithm
Mental Model
Accept the number of switches as an argument. Create an array of bools initialized to false. Run the flip
switch procedure on the array of bools. When the flip switch procedure terminates, create a new array of 
all the indices in the bool array equal to true, adding 1 to each index. Return this array to the caller. 

Step-by-step
- Accept "switches" as an argument
- Declare an initiliaze an array of length "switches", whose elements have an initial value of false
- Run the flip switch procedure on the array of switches
- Create a new array of all the indices in the array of switches equal to 2
- Return the new array to the caller

Helper: Flip Switch Procedure - flipSwitches
- Accept the switch array as an argument
- Set a counter "count" to 0
- For each element in the switch array:
  - Mutate the array by flipping every "count" switch in the array
  - Increment count by 1
- Return undefined
(For the above, it is more explicit for me to mention the count number, but in the program, I can
  just use the current index of the array)

Helper: Flip every 'count' switch - flip
- Accept the switch array and count as an argument
- For each element in the switch array:
  - If the index of the element % count is equal to 0:
    - Mutate the array by setting the element equal to the inverse of its current boolean value
- Return undefined

Helper: Create output array - 
- Accept the array of switches as an argument
- Create a new array
- For each element in the array of switches:
  - If the element is true
    - Add the index of the element + 1 to the new array
- Return the output array 

(can just map here)

*/

// Code with intent

const flipAll = (lightsArray, count) => {
  lightsArray.forEach((_, index) => {
    if ((index + 1) % count === 0) lightsArray[index] = !lightsArray[index];
  });
  return undefined;
};

const flipSwitches = (lightsArray) => {
  lightsArray.forEach((_, index) => {
    flipAll(lightsArray, index + 1);
  });
  return undefined;
};

const lightsOn = (switches) => {
  let lightsArray = Array(switches).fill(false);
  flipSwitches(lightsArray);
  return lightsArray.reduce((acc, cv, index) => {
    if (cv) {
      acc.push(index + 1);
    }
    return acc;
  }, []);
};

const lightsOn2 = (switches) => {
  let lightObj = {};
  for (let i = 0; i < switches; i++) {
    lightObj[i + 1] = false;
  }

  let count = 0;
  while (count <= switches) {
    Object.keys(lightObj).forEach((light) => {
      if (light % count === 0) {
        lightObj[light] = !lightObj[light];
      }
    });
    count++;
  }

  return Object.keys(lightObj).filter((light) => lightObj[light] === true);
};

console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/*
It could have been more straightforward, frankly, to have used an object here.

*/

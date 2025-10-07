/*
Write a function that displays an 8-pointed star in an NxN grid, where N is 
an odd integer that is supplied as an argument to the function. The smallest 
such star you need to handle is a 7x7 grid (i.e., when N is 7).

*/

/*
PEDAC

Problem
The problem is asking us to print an 8-pointed star to the console that takes up the space of an NxN grid, where N 
is an integer supplied as an argument to the function.

Examples / Test Cases
Requirements
- Accept an odd integer greater than 7 as an argument, call it N
- Log an 8-pointed star to the console to an NxN grid according to the argument N passed into the function
- The middle row of the star will be N stars wide
- The middle row consists entirely of stars 
- The top and bottom triangles contain (N-1) / 2 layers of stars
- Each row in the top and bottom triangles (the non-middle rows) contain 3 stars, centered relative to the middle row
- For each one row distance from the middle row, there is an additional space between each of the 3 stars.
The first row has no space between the 3 stars, the second row has the stars placed 1 space apart, the third row has stars 
places 2 spaces apart, and so on
- The triangles on either side of the middle row are inverted versions of one another. Mirror images 

Data Structures
Input: An odd integer N greater than 7
Output: None
Side effect: Logs an 8-pointed star to the console with an NxN grid, with N as the input integer
Intermediate: What I can do here is first generate the middle row, which is just a string of stars repeated N times. I can then
generate either the top or bottom star, where I can make the number of spaces between each star increment by the 0 index of a for or
while loop. To make the top / bottom star, I just need to invert. Then I put the top, middle, and bottom sections together and log it all
to the console

Algorithm 
High Level
Accept an integer N as an argument. Create the top rows (top triangle) of the star and the middle row of the star, based on the value of 
N. Invert the top row to get the bottom row. Log the top rows, middle row, and bottom rows to the console, in that order.

Step by Step
- Accept an integer N as an argument
- Create the middle row of the star by creating a string of N stars
- Create the top triangle rows of the star
- Invert the top triangle rows to get the bottom rows of the star
- Combine the top rows, middle row, and bottoms rows to the same array
- Log each row to the console
- Return undefined

Helper: Create Top Triangle
- Accept N as an argument
- Declare "topRows" and initialize it to an empty array
- Set the index of the 1st star to be N / 2 rounded down.
- Set the index of the second star to be N / 2 rounded up
- Set the index of the third star to be N / 2 rounded up + 1
- Declare "count" and set it to 1
- While count < (N-1) / 2:
  - Create an array N spaces wide
  - Set the first, second, and third stars to their respective indices
  - Add the array to topRows
  - Increment the index of the third star by 1
  - Decrement the index of the 1st star by 1
- Return topRows 

*/

const getBottomRows = (N) => {
  let bottomRows = [];
  let middleStarIndex = Math.floor(N / 2);
  let firstStarIndex = middleStarIndex - 1;
  let thirdStarIndex = middleStarIndex + 1;

  while (thirdStarIndex < N) {
    let newRow = Array.from({ length: N }, (_, index) => {
      if (
        firstStarIndex === index ||
        middleStarIndex === index ||
        thirdStarIndex === index
      ) {
        return "*";
      } else {
        return " ";
      }
    });

    bottomRows.push(newRow.join(""));

    firstStarIndex--;
    thirdStarIndex++;
  }

  return bottomRows;
};

const star = (N) => {
  let middleRow = ["*".repeat(N)];
  let bottomRows = getBottomRows(N);
  let topRows = [...bottomRows].reverse();

  let allRows = topRows.concat(middleRow).concat(bottomRows);

  allRows.forEach((row) => console.log(row));
};

star(7);
//   logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

/*
You have a number of building blocks that can be used to build a valid structure. There are certain rules about 
what determines the validity of a structure:

-The building blocks are cubes
-The structure is built in layers
-The top layer is a single block
-A block in an upper layer must be supported by four blocks in a lower layer
-A block in a lower layer can support more than one block in an upper layer
-You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over
after building the tallest possible valid structure.

You are provided with the problem description above. Your tasks for this step are:

- To make notes of your mental model for the problem, including explicit and implicit rules
- Write a list of questions for things that aren't clear about the problem from the description provided
*/

// Step 1: Understand the Problem

/*
Input: Number of cubes
Output: Cubes left over after building the tallest structure

Explicit rules:
- Building blocks are cubes 
- The structure is built in layers
- The top layer is 1 block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- You cannot leave gaps between blocks
- User inputs number of cubes
- Calculate number of blocks left over after building the tallest structure

Implicit Assumptions: 
- Each layer must have 4x the number of blocks as the above it below it, with the exception of the first (base case) 
layer. Or, the other way around, each layer must have 1/4 the number of blocks as the layer below it.
- Actually, that above statement is not necessarily true, since a block can support more than one block in the 
upper layer. Shoot...
- The structure is 3D, since the blocks are cubes. 
- Blocks are cubes
  - Blocks are six-sided, have square faces, and equal lengths on all sides

Questions:
- Are the layers 2D or 3D? Does it matter?
  - Going to guess they are in 3D, since the blocks are cubes. 
- What does it mean to have a gap between a block? How does this affect the output? 
- Are layers multiple rows? Or just one row? 
- What do they mean by "four blocks are supported in the lower layer?" What does it mean to support a block?
Does the block have to be touching the other blocks? Is there a minimum distance away from the block it has to 
be? 

Mental Model
The program accepts a number of cubes. It calculates the most optimal arrangement of blocks in terms of the height
(by blocks) of the structure, according to the rules. Then, it calculates the number of blocks that are not in the 
structure and returns that value to the user. 

Key takeaways from the answer key: I guess my questions were already considered answered. At least, most of them. 
I think I should have tried harder to figure out what the problem was asking from what I had. I also can put 
the implicit and explicit assumptions in natural language. Like, the implicit discussion was a conversation, 
explaining what is implied by the rules and what that means. 

*/

// Examples and Test Cases

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

// With reference to your initial mental model and questions from Step 1, make some notes about the test cases.
// Do the test cases confirm or refute different elements of your original analysis and mental mode?
// Do they answer any of the questions that you had, or do they perhaps raise further questions?

/*
Test cases 0 through 6 clearly demonstrate that at least the first layer is supposed to have one, and 
a tower with two layers is supposed to have 5. It also, by extension, suggests that 3 layers are supposed to have 
14. This confirms the assumption that layers are squares of their number. 

But we are still making assumptions about the arrangement of the blocks the writer intended to convey. I guess,
if it is mathematically impossible for there to be any other arrangement, then the arrangement outlined must be the
only one.

One other question this answers is whether or not there can be "extra" blocks in each layer. In this case,
no block is wasted - it is in the optimal arrangement to support another block. 
*/

// Data Structures

/*
The function will take an integer as an input and output an integer for the leftover blocks. In order to 
calculate the number of blocks, you could simply check if the next layer (layer # ^2) is greater than the 
remaining blocks. If it is not, that is your leftover. So, no need for an array or object to solve the problem. 
*/

// Algorithm

/*
1. Keep track of the number of layers. Initialize this value to 1. 
2. Keep track of the number of remaining blocks. Set this to the number of blocks passed into the function.
3. If the number of blocks is greater than or euqal than the square of the layer, subtract the square of the 
layer from the number of blocks. Otherwise, return the remaining blocks. 
4. Increment the layer and repeat until the remaining blocks are returned

*/

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

function calculateLeftoverBlocks(totalBlocks) {
  let layer = 1;
  let remainingBlocks = totalBlocks;
  while (layer ** 2 <= remainingBlocks) {
    remainingBlocks -= layer ** 2;
    layer += 1;
    console.log({remainingBlocks}, {layer})
  }

  return remainingBlocks;
}

// Neat trick! If I put the {} around a layer in the console.log, it shows the variable name and its value. 
// This is super useful. Called disambiguating I guess. 
/*
AM I TAKING A DECLARATIVE OR IMPERATIVE APPROACH???

Write a function that displays a four-pointed diamond in an nxn grid, where n is an 
odd integer supplied as an argument to the function. You may assume that the 
argument will always be an odd integer.

*/

/*
PEDAC
Problem
The problem is asking us to write a function that accepts an odd integer as an argument. The console should 
log a diamond using '*' that has the same number of layers as the integer argument. The first layer should be
1 '*', the second '***', incrementing by 2 '*s' until it reaches the centermost layer, which is the maximum length,
and then reducing its length by two until all layers have been displayed. 

Examples / Test Cases
Requirements
- Accept an odd integer as an argument, which we could call "n"
- Log n layers of *s in a diamond shape in the console
- The first and last layers should be 1 * long
- Each successive layer after the first * layer should be incremented by 2 *s until it reaches the center. Then, 
each layer should be decremented by 2 *s until it reaches n layers.
- The center layer should be the longest layer
- The center layer is always the same length as n
- If 1 * is accepted, the center layer is 1 *. This is the only output for this case 
- Each layer will be centered relative to the layer in the center. 
- In other words, the total width of the diamond is the width of n *s, or the width of the center layer, and the remainder of 
the layers should be centered relative to this width. 

Data Structure
Input: An odd integer n
Side effect: Log n layers of * in the shape of a diamond to the console
Output: None
Intermediate: Given that the centermost layer of stars dictates the width, and the centermost layer is equal to the integer 
n, every layer will have a width of n. Each layer of *s will have to be central to that width. This fact, I think, is central 
to one approach to solving a problem, where you create an initial string of n width, and then insert stars at the center of that string. 

I've come up with a formula that I think will work: 

- If floor(inputLayers / 2) > n, y = 2n - 1
- If floor(inputLayers / 2) < n, y = 2(inputLayer - n) + 1
- If floor(inputLayers / 2) === n, y = inputLayer

Ok, so the above formula will determine the number of stars. Thats one step. Then, I have to create a row, which should take the 
width of the row (which is the inputLayers) and the number of stars. (it may also be worth considering taking in a row and manipulating
it. I.e., I could add 2 stars to the row until its full, then start remove stars. But that is a different approach.)

In order to create a row, there are a few options: I could simply do (inputLayers - numStars) / 2 and use the repeat to 
make the correct number of spaces, concat that with * repeated for numStars, and concat with another (inputLayers - numStars). Alternatively,
I could do some array backflips at the center element, center 3 elements, and so on, and then concat those all together to form the row.
This seems more complicated, however. 

Finally, I will need to log the row to the console. 

To take inventory, I have 3 functions so far: diamond, getStars, createLayer, and printRow

Algorithm
The program will accept an odd integer numLayers as an input. For each layer, the program will first calculate the number 
of stars based on the current layer, create a new layer based on the number of stars, and log it to the console. When the loop completes, 
it will return undefined.

Step by Step
- Accept an odd integer numLayers as an input. 
- Declare a counter variable currentLayer and initialize it to 1
- While currentLayer =< numLayers:
  - Calculate the number of stars (getStars)
  - Based on the number of stars, create a new layer (createLayer)
  - Log the new layer to the console
  - Increment currentLayer by 1
- Return undefined

Helper: getStars
- Accept numLayers and the currentLayer as an argument
- If Math.floor(numLayers / 2) >= currentLayer:
  return 2 * currentLayer - 1
- If Math.floor(numLayers / 2) < currentLayer:
  return 2 * (numLayers - currentLayer) + 1

Helper: getLayer
- Initialize numLayers and numStars as parameters
- Create 3 parts of the layer:
  - Generate (numLayers - numStars / 2) spaces
  - Generate numStars stars
  - Generate (numLayers - numStars / 2) spaces 
- Concat the 3 parts in sequence
- Return the resulting string to the caller

Helper: getPadding
Optional helper if I want to abstract the padding, since it is used twice

*/

// Code with intent

const getLayer = (numLayers, numStars) => {
  let padding = " ".repeat((numLayers - numStars) / 2);
  if (numStars === 1) {
    return padding + "*";
  }
  let hollowSpace = " ".repeat(numStars - 2);
  return padding + "*" + hollowSpace + "*";
};

const getStars = (numLayers, currentLayer) => {
  return Math.floor(numLayers / 2) >= currentLayer
    ? 2 * currentLayer - 1
    : 2 * (numLayers - currentLayer) + 1;
};

const diamond = (numLayers) => {
  let currentLayer = 1;
  while (currentLayer <= numLayers) {
    let numStars = getStars(numLayers, currentLayer);
    let layer = getLayer(numLayers, numStars);
    console.log(layer);
    currentLayer++;
  }
  return undefined;
};

diamond(1);
// logs
// *

diamond(3);
// logs
// *
//***
// *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

/*
I need to forget how long this is going to take me, and simply enjoy the process. There is no rush to the end. This is a 
marathon.

I am enjoying this. Just let it ride. 

Good lesson here: When you are dealing with too much complexity, BREAK THE PROBLEM DOWN INTO SMALLER PROBLEMS. I suppose I did
this, but not explicitly... It was a by product of my exploration of the problem. If I did it more explicitly, I probably would have
solved the problem faster. This is definitely something I should do for the next interpretive problem...


*/

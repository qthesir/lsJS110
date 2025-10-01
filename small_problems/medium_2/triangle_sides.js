/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must 
be greater than the length of the longest side, and every side must have a 
length greater than 0. If either of these conditions is not satisfied, the 
triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as 
arguments and returns one of the following four strings representing the 
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

*/

/*
PEDAC
Problem
The function should take the 3 lengths of a triangle as an argument, and determine whether
or not the triangle is equilateral, isosceles, scalene, or invald. After determining
the classification of the triangle, it should return the classification as an output.

Examples / Test Cases
Requirements
- Accept 3 floating point numbers as arguments: side1, side2, side3
- Output the classification of the triangle as a string
- The classification can be one of 4 values: 'equilateral', 'isosceles', 'scalene', or 
'invalid'.
- Equilateral triangles are triangles with all sides equal length
- Isosceles triangles are triangles with two sides of equal length
- Scalene triangles are triangles where all sides have different lengths
- A valid triangle is a triangle whose lengths are 0 or greater, and whose sum of short
sides are greater than its longest side. If these requirements are not met, the triangle
is Invalid. 


Data Structures
Input: 3 floating point values
Output: One of four classifications strings: 'equilateral', 'isosceles', 'scalene', 
'invalid'
Intermediary: It may be useful to put the arguments into an array to perform logical
operations from there. 


Algorithm
Mental Model
Take the 3 sides of a triangle as an argument. Check to see if the triangle is 
equilateral, invalid, or scalene, and return the classification accordingly. If it
is neither of those 3 options, return isosceles. 

Step by step
- Accept 3 sides of a triangle as an argument
- Check to see if the triangle is invalid
  - If it is, return 'invalid'
- Check to see if the triangle is equilateral
  - If it is, return 'equilateral'
- Check to see if the triangle is scalene 
  - If it is, return 'scalene'
- Otherwise, return 'isosceles'

Helper: Determining an invalid triangle
- Accept the 3 sides of the triangle as an argument
- Put the 3 sides into an array
- Check if any of the values are less than 0 (array method) 
  - If they are, return true
- Sort the array in descending order
- Check if the element at index 0 is greater than or equal to the sum of elements at 
index 1 and 2 
  - If it is, return true
- Return false

*/

// Code with intent

const isValidTriangle = (sidesArray) => {
  if (sidesArray.some((side) => side <= 0)) return false;
  sidesArray.sort((a, b) => b - a);
  if (sidesArray[0] >= sidesArray[1] + sidesArray[2]) return false;
  return true;
};

const triangle = (side1, side2, side3) => {
  if (!isValidTriangle([side1, side2, side3])) return "invalid";
  if (side1 === side2 && side2 === side3) return "equilateral";
  if (side1 !== side2 && side2 !== side3 && side1 !== side3) return "scalene";
  return "isosceles";
};

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"

/*
Notes and reflection

I'm trying to figure out the most efficient way to break this down logically...

It seems like checking for isosceles is the most difficult operation. You would 
need to check the combination of all the different sides.

That being said, you need to check a combination for all the different sides 
anyway to see if it is not a valid triangle. Mmmh... after thinking about that
for a second, its actually the case that you can just take the largest value, and
see if it is greater than the other two values. That is easier than determining 
an isosceles triangle, which, again, requires finding the combination
*/

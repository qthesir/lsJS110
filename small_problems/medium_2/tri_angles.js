/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
and every angle must be greater than 0. If either of these conditions is not 
satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns 
one of the following four strings representing the triangle's classification: 'right', 
'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about 
floating point errors. You may also assume that the arguments are in degrees.

*/

/*
Problem
The problem is asking us to write a function that accepts three angles of a triangle 
as arguments, then check whether the a triangle that has those 3 angles is acute, right,
obtuse or invalid. The function should then return the proper classification. 

Examples / Test Cases
Requirements
- Accept three integer angles as an argument
- Return the proper classification of the triangle as an output
- Triangle classifications can be the following:
- Right: Where one angle is 90 degrees
- Acute: Where all angles are less than 90 degrees
- Obtuse: Where one angle is greater than 90 degrees
- Invalid: Any angle is less than 0 and/or angles do not sum to 180
- The classification returned should be a string type

Data Structures
Input: Three integer angles
Output: String classification
Intermediate: As in the previous problem, in order to check to see if any of the angles
are less than 0, I will use an array. This might also be useful to classify 
triangles, since I can use "some" or "every"

Algorithm 
- Accept 3 integer angles as arguments
- Check to see if the triangle is valid
- If it is valid, determine the classification and return the value
- If it is not valid, return 'invalid'

Determine the classification
- If one angle is equal to 90 degrees, return 'right'
- If one angle is greater than 90 degrees, return 'obtuse'
- Otherwise, return 'acute'  

Check to see if the angle is valid
- If any angle is less than 0 or the sum of all angles is not equal to 180,
return false.
- Return true

*/

// Code with intent

// Examples

const isValidTriangle = (angles) => {
  const allAnglesPositive = angles.every((angle) => angle > 0);
  const sumOfAngles = angles.reduce((total, angle) => total + angle);
  return allAnglesPositive && sumOfAngles === 180;
};

const testRightTriangle = (angle) => {
  return angle === 90;
};

const testObtuseTriangle = (angle) => {
  return angle > 90;
};

const getTriangleClassification = (angles) => {
  if (angles.some(testRightTriangle)) return "right";
  if (angles.some(testObtuseTriangle)) return "obtuse";
  return "acute";
};

const triangle = (angle1, angle2, angle3) => {
  let angles = [angle1, angle2, angle3];
  if (isValidTriangle(angles)) {
    return getTriangleClassification(angles);
  } else {
    return "invalid";
  }
};

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"

/*
Interesting the way they used the callback function here. I had totally forgotten about
that... that you could define the callback outside of the function. Duh. And it
implies that the first argument is the angle, second is index, third is array, 
and so on. 
*/

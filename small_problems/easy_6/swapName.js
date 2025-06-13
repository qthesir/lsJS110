/*
Write a function that takes a string argument consisting of a first name, a space, and a last name, 
and returns a new string consisting of the last name, a comma, a space, and the first name.
*/

/*
PEDAC

Problem

Input: A string with First Name, a space, and a Last Name

Output: A string with the Last name, a comma, and a space, followed by the first name

Explicit Assumptions
- The function explicitly takes a string in a specific format: First Name + " " + Last Name
- It returns a value in the following format: Last Name + ", " + First Name

Implicit Assumptions
- The function only accepts string types

Mental Model
The function accepts a First Name and Last Name string separated by a space. It extracts the First Name and
Last Name from the string. It then uses those values to create the new string with Last Name and First Name
separated by a comma and returns the value to the user.

Examples / Test Cases

Data Structures
The program will input a string and likely use an array as an intermediary to handle the first name 
and last name.

Algorithm
- Accept name as an input
- Split the array into first and last name using the space as a delimeter 
- Concatenate the last name with ", " and first name
- Return the result to the user

For one or more middle names 
- Accept name as an input
- Split the input into an array
- Set the last array element to lastName
- Concatenate the other array elements separated by a space (join) to firstAndMiddleNames
- Concatenate lastName with ", " and first name
- Return the result to the user 


*/

// Code with intent

const swapName = (name) => {
  let [firstName, lastName] = name.split(" ");
  return `${lastName}, ${firstName}`;
};

const swapName2 = (name) => {
  let nameArray = name.split(" ");
  let lastName = nameArray.pop();
  let firstAndMiddleNames = nameArray.join(' ');
  return `${lastName}, ${firstAndMiddleNames}`;
};

// Examples

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
console.log(swapName2("Karl Oskar Henriksson Ragvals")); // "Ragvals, Karl Oskar Henriksson"

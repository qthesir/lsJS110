/*
Write a function that returns true if the string passed as an argument is a palindrome, 
or false otherwise. A palindrome reads the same forwards and backwards. For this problem, 
the case matters and all characters matter.
*/



/*
PEDAC
Problem

If the argument is a palindrome, return true. Case matters and all characters matter. A palindrome is
a word that reads the same backwards and forwards. 

Input: String (e.g. "madam")
Output: true if the string is a pallindrome and false if it is not. 

Explicit Requirements
- The function returns true if the string is a pallindrome, and false if it is not a pallindrome
- A pallindrome is a word that reads the same backwards as it does forwards. That is, if you reverse
the characters in the word, the characters will be in identical position to the word without 
the characters reversed. 
- Case matters
- Spaces matter
- All characters in the string matter in the pallindrome. 
- Numerical string characters can also be included

Implicit Requirements
- Only strings are accepted as an argument

Mental Model

The program takes a string as an argument. It reverses the string, and checks if that string is 
equal to the original string. If it is equal to the original string, then the program returns true.
If it is not, then it returns false. 

Examples / Test Cases

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

Data Structure
In order to reverse the characters more effectively, an Array could be used as an intermediary to 
perform the reversal. It would then have to be converted back into a string, however, to perform the
equality comparison, or rather it should be, since its trickier and more ambiguous to perform an equality
comparison on an Array.

'madam' => ['m', 'a', 'd', 'a', 'm']

Algorithm

1. Accepts a string as an argument
2. Convert the string into an array
3. Reverse the array 
4. Convert the array back into a string in a variable reversedString
5. Check to see if the original string is equal to the reversedString
6. Return the result of the equality comparison

*/

function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("")
  return reversedStr === str
}

// Examples:

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


/*
Lets take a secon to reflect on this... Does this solution actually address what the problem was asking?

I think that, yes, this was pretty thorough. However, I could add some guard clauses in there to ensure
that the input is a string. 
*/
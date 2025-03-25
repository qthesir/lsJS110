/*
Write a function that returns true if its integer argument is palindromic, or false otherwise. 
A palindromic number reads the same forwards and backwards.

*/ 

// Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

/*
PEDAC 

Input: Numerical Value 
Output: True if palindrome, false if not

Explicit Requirements
- The function returns true if the argument is a palindrome and false if it is not
- A palindrome, in this case, is a number which has the same digits in the same places if it is reversed
- The function accepts only numerical values; not string values or objects

Implicit Requirements
- The number, when reversed, should have the same value in terms of quantity. 

Mental Model

The program takes a numerical value. It converts that numerical value to a string and reverses its order.
It then converts it back to a number. Finally, it compares the original value to the reversed value,
and returns the result to the caller. 

Examples / Test Cases

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

*/ 
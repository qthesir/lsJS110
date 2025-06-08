/*
Write a function that takes a positive integer as an argument and returns 
that number with its digits reversed.
*/

// Example

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

/*
PEDAC

Problem

Input: Positive integer

Output: Reversed version of the integer

Explicit Requirements
- The program accepts positive integers as inputs
- The program will return the same number as the input but reversed 

Implicit Requirements
- The type of the returned reversed output should be a number type
- Leading zeros in the result get dropped if the number has zeros on the end

Mental Model 
The program will accept a positive integer as an input. It will identify each digit in the input and
sort them in reversed order. It will then return the result as an integer. 

Examples / Test Cases

Data Structures
This would be easy to turn into a string, then array, reverse the order, and concatenate back into a string,
and then convert the string to a number. However, I am wondering if this problem could be solved with
pure arithmetic. It would be quite hard. I can separate out the individual digits, but then their place
(10s, 100s, etc) would have to be captured and the order inverted. This would be very tricky indeed. 
*/
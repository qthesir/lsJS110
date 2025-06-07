/* 
As seen in the previous exercise, the time of day can be represented as the 
number of minutes before or after midnight. If the number of minutes is positive, 
the time is after midnight. If the number of minutes is negative, the time is 
before midnight.

Write two functions that each take a time of day in 24 hour format, and return 
the number of minutes before and after midnight, respectively. Both functions 
should return a value in the range 0..1439.

You may not use javascript's Date class methods.

*/

/*
PEDAC

Problem

Input: The time in "hh:mm" formatted as a string

Output: The number of minutes before or after midnight

Explicit Requirements
- There should be two functions: One function for before midnight, 
once function for after midnight
- The functions will both take the same input: the time in hh:mm formatted
as a string
- The time is in 24 hour format
- Ignore daylight savings and standard time irregularities


Implicit Requirements 
- hh must be in the range of 00-24 (inclusive)
- mm must be in the range of 00-60 (inclusive)
- mm and hh, if less than 10, must include leading zeros
- 24:00 and 00:00 are treated the same: As midnight

Mental Model
The program takes a time as an input. It calculates the number of minutes before or
after midnight are represented by that time, depending on the function called. It then
returns the minutes from midnight to the user. 

Examples / Test Cases

Data Structures
The program will accept a string as an input, and then have to convert those strings to a number type in
order to perform operations. It will return a number type as the number of minutes. 

Algorithm

Minutes After Midnight
- Take time in "hh:mm" format
- Convert to number type
- Multiply hours by 60 and add minutes
- Return minutes to caller 

Minutes Before Midnight
- Take time in "hh:mm" format
- Convert to number type
- Subtract hours from 24 and minutes from 60 
- Multiply hours by 60 and add minutes to get final minutes 
- Return minutes to the caller 

Helpers

Convert to Number
- Split into hh and mm, using : as a delimiter 
- Remove leading 0s 
- Convert to number type
- Deal with 24 hour edge case 

*/

// Code With Intent

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = 1440;

const afterMidnight = (timeOfDay) => {
  let [hours, minutes] = convertTimeToNumbers(timeOfDay);

  if (hours === 24) {
    hours = 0;
  }

  let minutesAfterMidnight = hours * MINUTES_PER_HOUR + minutes;

  return minutesAfterMidnight;
};

const beforeMidnight = (timeOfDay) => {
  let [hours, minutes] = convertTimeToNumbers(timeOfDay);

  if (hours === 0) {
    hours = 24;
  }

  let minutesAfterMidnight = hours * MINUTES_PER_HOUR + minutes;
  let minutesBeforeMidnight = MINUTES_PER_DAY - minutesAfterMidnight;

  return minutesBeforeMidnight;
};

const convertTimeToNumbers = (timeOfDay) => {
  let [hours, minutes] = timeOfDay.split(":").map((num) => Number(num));

  return [hours, minutes];
};

// Examples:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

/*
According to the solution, and by my own examination, I could have simply used the afterMidnight function
to provide the value that gets inverted in the beforeMidnight function.

Although, what I'm still perplexed by is the 24 hour edge case scenario. I suppose using the modulo
resolves that, although indirectly, because if the value equals exactly 1440, then it will evaluate to 
0, which is the correct value. Then, you take the downstream edge case by checking to see if the inversion
is equal to minutes per day, which means the return value of afterMidnight was 0, in which case, you would 
need to adjust the value of beforeMidnight to 0 as well and not 1440 minutes. 

DRY principle: Don't repeat yourself. If you use code multiple times, abstract it into its own function. 

*/

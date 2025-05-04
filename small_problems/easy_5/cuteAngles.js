/*
Write a function that takes a floating point number representing an angle between 
0 and 360 degrees and returns a string representing that angle in degrees, minutes, 
and seconds. You should use a degree symbol (˚) to represent degrees, a single quote 
(') to represent minutes, and a double quote (") to represent seconds. There are 
60 minutes in a degree, and 60 seconds in a minute.

*/

/*
PEDAC

Problem 

Input: Floating point number representing an angle between 0 and 360 degrees

Output: A representation of that number in degrees, minutes, and seconds

Explicit Assumptions
- A degree symbol ˚ will represent number of degrees
- A ' will represent minutes
- A '' will represent seconds
- The input value will be between 0 and 360
- There are 60 minutes in 1 degree
- There are 60 seconds in 1 minute



Implicit Assumptions
- The input value will be floating point. 
- Degrees, seconds, and minutes in the output are represented as integers,
not floating point values.

Mental Model
The program will take a floating point value representing the number of degrees. The numbers before the 
decimal point will be the number of degrees. The value after the decimal will be 
multiplied by 60, and that number rounded down will be the number of minutes. The numbers after the decimal
in the figure multiplied by 60 to make the minutes will be multiplied by 60, rounded down to make the seconds.
The three values will be concatenated by string interpolation and returned to the user. 


Examples / Test Cases

// Examples 

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Data Structures
Based on my mental model, this will be mostly arithmetic, performing operations on numbers until the 
output is concatenated into the degrees, minutes, and seconds format.

Algorithm
- Calculate the value
  - Take the number "num" as an input
  - Degrees = num rounded down
  - num = (num - Degrees) * 60 
  - Minutes = num rounded down
  - num = (num - Minutes) * 60
  - Seconds = num rouded down 
- Format the output
  - if Minutes < 10
    Minutes = "0" + String(Minutes)
  - if Seconds < 10 
    Seconds = "0" + String(Seconds)
  - Create the output with string interpolation
- Return value to the user 

*/

// Code with intent
function dms(num) {
  let [degrees, minutes, seconds] = calculateValues(num);

  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  let output = `${degrees}°${minutes}'${seconds}"`;

  return output;
}

function calculateValues(num) {
  let degrees = Math.floor(num);
  num = (num - degrees) * 60;
  let minutes = Math.floor(num);
  num = (num - minutes) * 60;
  let seconds = Math.floor(num);
  return [degrees, minutes, seconds];
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"

// Further Exploration

function dms2(num) {
  let convertedDegrees = convertToDegrees(num);
  let [degrees, minutes, seconds] = calculateValues2(convertedDegrees);

  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  let output = `${degrees}°${minutes}'${seconds}"`;

  return output;
}

function calculateValues2(num) {
  let degrees = Math.floor(num);
  num = (num - degrees) * 60;
  let minutes = Math.floor(num);
  num = (num - minutes) * 60;
  let seconds = Math.floor(num);
  return [degrees, minutes, seconds];
}

function convertToDegrees(num) {
  let degrees = (num / 360 - Math.floor(num / 360)) * 360;
  if (degrees < 0) {
    return 360 + degrees
  }
  return degrees
}

console.log(dms2(-1)); // 359°00'00"
console.log(dms2(400)); // 40°00'00"
console.log(dms2(-40)); // 320°00'00"
console.log(dms2(-420)); // 300°00'00"
console.log(dms2(332.334))

/*
Thinking through this... You could divide the number by 360 and get its increment. if its 360 thats 1,
which would mean the absolute value would be ok to use. If its 700, then thats a little less than 2, say 
1.95. You could remove the Math.floor of the number, and just use the floating point and multiply that by
360. That would work for positive numbers. For negative numbers, hmmm... well, if you took the same approach,
you would have the invert the value, since you're moving backwords, counting down from 360 to 0. So you 
could just do 360 - (.98 * 360) to get the solution. 

Algorithm
- num / 360
- num - Math.floor(num)
- Degrees = 360 * num
- if num < 0:
  Degrees = 360 + Degrees
- Return degrees

*/
/* 
Notes

So you have the whole number before the decimal. This is the number of degrees. Then, you have to 
break down the fraction into seconds and minutes. How can you do the conversion first, to seconds? 
Well, you would take the fraction, and multiply it by 60. 

These are floating point values. LS mentioned something about needing to be careful with floating points...
I'm seeing this with the .6 * 60. When I do this in the node console, I'm getting 36. But the expected output
is 35' 59''. This will also tell me how it wants me to view precision.... I guess it wants me to round down.
Getting this output is making this interesting. How do I deal with floating points with higher precision?

Now that I'm looking at it, I think Launch School actually screwed up the 3rd example. .6 multiplied by 60
is 36 on the dot. Its the floating point math that messes that up. So... I think that we're good. It would
appear that we are rounding down here. 

Nope, LS didn't mess up. That's the output. It should NOT be the output, but it is unfortunately. 

The LS solution used a function "padZeroes" to 
*/

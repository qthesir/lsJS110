/*
The time of day can be represented as the number of minutes before or after 
midnight. If the number of minutes is positive, the time is after midnight. If 
the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns 
the time of day in 24 hour format (hh:mm). Your function should work with any 
integer input.

You may not use javascript's Date class methods.
*/

// The above should log true. Disregard daylight savings and standard time

/*
PEDAC

Problem

Input: A positive or negative integer value, representing number of minutes before or after
midnight.

Output: The time in 24 hour format according to the number of minutes in the input

Explicit Requirements
- The program takes a positive or negative integer
- The input represents the number of minutes before midnight if negative 
- The input represents the number of minutes after midnight if positive
- The program returns the time of day in 24 hour format, according to the input number of 
minutes 
- The format should be (hh:mm)
- The program should work with any integer input

Implicit Requirements
- The program accepts 0 as an input
- (hh:mm): hh is the hour and mm is minutes 
- Midnight is represented as 00:00
- If the abs value of the number of minutes is greater than 24 hours or 1440 minutes, start the clock 
over again. This represents a hidden "day" variable that needs to be accounted for. 

Mental Model
The program takes the number of minutes as an input. It then adds then adds the number of minutes
to midnight (00:00) and returns the value to the user in hh:mm format.

Examples / Test Cases
For cases > 24 hours

For cases where minutes is negative

Data Structures
The program will take a number type as an inpput and output a string formatted to hours and minutes. 

Algorithm
1. Take minutes as an input
2. Calculate the minutes (mm)
3. Calculate the hours (hh)
4. Format the output to a string "hh:mm"
5. Return the output

Calculate the Number of Minutes
1. Take the original minutes value as an input
2. Get the number of minutes in 60 minute cycle: outMinutes = minutes % 60
3. Account for negative values: outMinutes = (60+outMinutes) % 60
4. Return outMinutes

Calculate the Number of Hours
1. Take original minutes and outMinutes as an input
2. Get the total number of hours: outHours = (minutes - outMinutes) / 60
3. Get the number of minutes in a 24 hour cycle: outHours = outHours % 24
4. Account for negative values: outHours = (24 + outHours) % 24 

Format Output
1. Take minutesInCycle and hoursInCycle as inputs
2. If minutesInCycle < 10, add a 0
3. If hoursInCycle < 10, add a 0
4. Return to caller with : interpolated
*/

// Code with intent

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const MILLISECONDS_PER_MINUTE = 60000;
const DAY_NUMBER_TO_WEEKDAY = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

// No date class 
const timeOfDay = (minutesFromMidnight) => {
  let minutesInCycle = calculateNumberOfMinutes(minutesFromMidnight);
  let hoursInCycle = calculateNumberOfHours(
    minutesFromMidnight,
    minutesInCycle
  );
  let dayInCycle = calculateDay(
    minutesFromMidnight,
    hoursInCycle,
    minutesInCycle
  );

  return formatOutput(minutesInCycle, hoursInCycle, dayInCycle);
};

const calculateNumberOfMinutes = (minutesFromMidnight) => {
  let minutesInCycle = minutesFromMidnight % MINUTES_PER_HOUR;

  // Adjust for negative values
  let minutesInCycleAdjusted =
    (MINUTES_PER_HOUR + minutesInCycle) % MINUTES_PER_HOUR;

  return minutesInCycleAdjusted;
};

const calculateNumberOfHours = (minutesFromMidnight, minutesInCycle) => {
  let totalHours = (minutesFromMidnight - minutesInCycle) / MINUTES_PER_HOUR;
  let hoursInCycle = totalHours % HOURS_PER_DAY;

  // Adjust for negative values
  let hoursInCycleAdjusted = (hoursInCycle + HOURS_PER_DAY) % HOURS_PER_DAY;

  return hoursInCycleAdjusted;
};

const calculateDay = (minutesFromMidnight, hoursInCycle, minutesInCycle) => {
  let totalHours = (minutesFromMidnight - minutesInCycle) / MINUTES_PER_HOUR;
  let totalDays = (totalHours - hoursInCycle) / HOURS_PER_DAY;
  let daysInCycle = totalDays % DAYS_PER_WEEK;

  let daysInCycleAdjusted = (daysInCycle + DAYS_PER_WEEK) % DAYS_PER_WEEK;

  return daysInCycleAdjusted;
};

const formatOutput = (minutesInCycle, hoursInCycle, dayInCycle) => {
  // Convert to string
  minutesInCycle = String(minutesInCycle);
  hoursInCycle = String(hoursInCycle);
  dayInCycle = DAY_NUMBER_TO_WEEKDAY[dayInCycle];

  if (minutesInCycle < 10) {
    minutesInCycle = "0" + minutesInCycle;
  }

  if (hoursInCycle < 10) {
    hoursInCycle = "0" + hoursInCycle;
  }

  return `${dayInCycle} ${hoursInCycle}:${minutesInCycle}`;
};


// Using javascript date class 
const timeOfDayWithDateClass = (minutesFromMidnight) => {
  let midnight = new Date("June 29, 2025, 00:00:00");
  let millisecondsFromMidnight = minutesFromMidnight * MILLISECONDS_PER_MINUTE;
  let newTime = new Date(midnight.getTime() + millisecondsFromMidnight);

  let dayOfTheWeek = DAY_NUMBER_TO_WEEKDAY[newTime.getDay()];
  let hours = newTime.getHours();
  let minutes = newTime.getMinutes();

  return `${dayOfTheWeek} ${leadingZeros(hours)}:${leadingZeros(minutes)}`;
};

const leadingZeros = (number) => {
  return number < 10 ? "0" + String(number) : String(number);
};

// Examples

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

console.log(timeOfDay(-4231));

console.log(timeOfDayWithDateClass(-4231));

/*
How will this work in practice?

See the notes on notepad. 

Launch school took an interesting, arguably more elegant approach to solving the problem. As opposed to 
accounting for the negative value downstream, in the numbers and hours calculation, as I have, the 
launch school solution accounted for it upstream, at the minutes from midnight level. This means 1 
operation is replacing the 2 that are happening where that value is used.

Another efficiency the solution used is using math.floor for the minutes per hour instead of 
subtracting the remaining minutes from it, although that perhaps wouldn't have made much of a difference.
Stil a one liner.

The LS solution also took care of the day upstream, along with negative,
by taking the modulo of minutes per day. 

Finally, the constants. I forgot about the "magic numbers" deal. If you don't define important constants
in your function, then the reader will never know what they are. I totally forgot about this. You are also
writing programs for other people to read, and for yourself in the future. +

My solution may actually have been more elegant because the algorithm is reusable. I could create 
one function that calculates all 3 dates, and takes the hour, minute, or day as a parameter to decide on
what to caluclate. 

One of the solutions added referencee time as a constant, which I think is a good idea. My reference time
is just a hardcoded string. Not ideal. 
*/

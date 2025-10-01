/*
Some people believe that Fridays that fall on the 13th day of the month are unlucky days.
Write a function that takes a year as an argument and returns the number of Friday the 
13ths in that year. You may assume that the year is greater than 1752, which is when 
the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the 
same calendar will remain in use for the foreseeable future.
*/

/*
PEDAC

Problem
The problem wants us to find the number of friday the 13ths in a given calendar year

Examples 
Requirements
- Accept an integer year as an input
- Return the count of the number of friday the 13ths that year as an output
- The input will be greater than 1752. 
- The same calendar in use by 1752 is assumed to be used in future years

Data Structures
Input: integer year > 1752
Output: Count of friday the 13ths that year
Intermediate: Hm... I may use a date type here, as otherwise, it would be difficult 
to determine upon which day the year starts. I can start with, as Claire suggested,
a brute force approach, and check every single day of the year to see when the 'day' 
field equals 13 AND the 'day of the week' field equals friday. Need to play with the date
object. 

Ah... think I have a solution here. You can start by creating a date object with the 
January 1st of the calendar year passed in as an argument. Then, you can use the 
"setHours" method on the date object, and add 24 hours to the current hour of the date

Nope, not setHOurs. We want setTime

Algorithm 
High level description 
The function will take the year as an input. It will then turn that year into a
date object that starts at January 1st of that year at time stamp 0. It will then
increment the year by 24 hours 365 times, checking to see if the day of the week
is equal to friday and the date is equal to 13. If the condition is true, then 
the function will increment a count by 1. When the program completes, it will return
the count to the user.

Step by step
- Accept year as an argument
- Turn the year into a javaScript date object
- Set count = 0 
- While (year on the date object is equal to the year parameter) {
    - check if the date object's day of the week is equal to friday AND the day of the 
    month is equal to 13
    - If it is, increment count by 1
    - Add 24 hours to the date object
- Return count


*/

// Code with intent

const DAYS_TO_INCREMENT = 1
const INDEX_OF_FRIDAY = 5;
const DAY_OF_MONTH = 13;

const fridayThe13ths = (year) => {
  let currentDate = new Date(year, 0, 1);
  let count = 0;
  while (currentDate.getFullYear() === year) {
    if (
      currentDate.getDay() === INDEX_OF_FRIDAY &&
      currentDate.getDate() === DAY_OF_MONTH
    ) {
      count += 1;
    }

    currentDate.setDate(currentDate.getDate() + DAYS_TO_INCREMENT);
  }

  return count;
};

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2

/*
Notes and reflection

LS solution is interesting - instead of brute forcing it like I did, it leveraged
the built in properties of the date object to get every date of the year that landed
on the 13th of the month. There is only 1 13th of each month, and thus, you can just 
do new Date(year, month, 13) and create an array of date objects. Then, you can use a 
for loop to iterate over each date, use .getDay and check to see if the day is equal to 
5. 

Also, shouldn't have used the setTime millisecond method to increment the date. It was 
better to use the setDate method, get the date, then increment by 1, and let the date
object deal with the daylight savings and all that jazz. I could cause an issue with 
that method otherwise. 
*/

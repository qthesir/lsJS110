/*
There are a lot of exciting classes offered in our region. We wrote a small script that checks 
which ones are still upcoming and compatible with our calendar. We must be available to attend 
all sessions of a particular class in order to sign up for it. We can always arrange that on 
weekends, but for weekdays we have to check whether our calendar is free.

Although the code below runs, something is wrong with it. Why is everything except for the Back 
To The Future Movie Night in the list of compatible classes?
*/

function toDate(string) {
  return new Date(string + "T00:00:00");
}

const TODAY = toDate("2018-08-05");

function padZeros(value) {
  return value < 10 ? "0" + String(value) : String(value);
}

function toString(date) {
  return `${date.getFullYear()}-${padZeros(date.getMonth() + 1)}-${padZeros(
    date.getDate()
  )}`;
}

function toString2(date) {
  return date.toISOString().slice(0, 10);
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

let myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
};

let offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    let dateStr = toString2(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  let compatibleClasses = [];

  Object.keys(classes).forEach((className) => {
    let classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]

/*
Seem to be multiple issues here - first is with the toString from the date function, which does not 
seem to work - it needs to add leading 0s to values less than 1 and the year, I believe, is a measure from a certain point
in time rather than the actual year. The second issue is the logic in the isAvailable function. Its returning 
true when the calendar object returns undefined, which is causing classes where it cant find the date to 
be added to the compatibleClasses array. 

The fix here was a bit trickier than earlier exercises. To fix the date issue, you can use one of two approaches: Adjust the 
month to the correct day, change .getDay() (this is day of the week) to .getDate(), and pad the zeros for the month 
and the date (the return values do not automatically pad zeros for months and dates less than 10). Alternatively, you
could use the method .toISOString() on the javaScript date object, and get the values from index 0 to 10. This would
produce the format necessary to properly reference the classes object. 

In the "isAvailable" function, the fix is simply to remove the bang, and check to see if the length of the return value
of the object reference is equal to 0, like so: calendar[dateStr]?.length === 0;. By using the ?, the optional chaining
operator, calling .length will return undefined if the value returned by calendar[dateStr] is undefined instead of 
throwing an error. That way, the value returned will be false if the length of the array is 0, or if there is
activities on the calendar for those dates. 

Ah, this was faulty logic - in actuality, the isAvailable function was working as intended before. The only reason my 
adjustment worked here is because the two valid classes, Mikes Hikes and PowerBoating 101, either fell on dates that were
empty, or were on the weekend. Had there been another class on a date that was not in the schedule at all, the object
property lookup would have returned undefined, which would have evaluated to false - not the intent. 

The reason the code is not properly filtering out the offered classes is because of the toString() function. When
get compatible events is called, the function iterates over the individual classes offered, first converting the dates to the
date format so that checking if its in the past and checking if its a weekday are easier to handle. In the for loop, the 
function first checks if the class date is in the past. If its in the past, the return statement skips to the top of the 
function (it does nothing since this is .forEach()). This works as intended, which is why "Back to The Future Movie Night"
is the only class filtered out correctly. For all the other classes, the second if statement is run. This if statement first
filters out any class days that are weekends, since those are available by default. For the remainder of the times, 
the isAvailable callback function is passed to the every method. In order for the every method to return true, and thus for the
function to add the class to the list, isAvailable must return true for every available time. The is available function
first turns the date back to a string, in order to perform an object property reference of the date as the object property 
is the date in string format. If the date is not an object key, the object property reference returns undefined, which is
falsy. The bang operator makes it truthy. Thus, if the object property reference returns undefined (when the date cannot
be found in the calendar), the function will return true. If the property does return a value, the || operator causes it
to short circuit to the second operation, which checks to see if the calendar is empty for that date. If it is empty,
then the isAvailable function will also return true. If it is not empty, then it returns false.

However, the toString(date) function is not returning the intended string value. Thus, the !calendar[dateStr] object
property reference is always going to return undefined, and thus, isAvailable will always return true. This is 
why the list is not filtering any classes except for back to the future. in the toString function, there are 
issues with the year, month, and day. .getYear returns the years since 1900, not the full year. .getMonth returns
an index of the month, and thus needs to add 1. .getDay returns the day of the week, not the day of the month. So you 
end up with a string format that does not match the format the function expects.

To fix the date issue, you can use one of two approaches: Adjust the 
month to the correct day, change .getDay() (this is day of the week) to .getDate(), and pad the zeros for the month 
and the date (the return values do not automatically pad zeros for months and dates less than 10). Alternatively, you
could use the method .toISOString() on the javaScript date object, and get the values from index 0 to 10. This would
produce the format necessary to properly reference the classes object. 
*/

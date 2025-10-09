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
    let dateStr = toString(date);
    console.log(dateStr);
    return calendar[dateStr]?.length === 0;
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

The fix here was a bit trickier than earlier exercises. To fix the date issue, you can use 1 of two approaches: Adjust the 
month to the correct day, change .getDay() (this is day of the week) to .getDate(), and pad the zeros for the month 
and the date.
*/

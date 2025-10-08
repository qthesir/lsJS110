/*

*/

let memberDirectory = {
  "Jane Doe": "323-8293",
  "Margaret Asbury": "989-1111",
  "Callum Beech": "533-9090",
  "Juanita Eastman": "424-1919",
};

function isValidName(name) {
  return /^[a-z]+ [a-z]+$/i.test(name);
}

function isValidPhone(phone) {
  return /^\d{3}-\d{4}$/.test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log("Invalid member information.");
  }
}

addMember("Laura Carlisle", "444-2223");
addMember("Rachel Garcia", "232-1191");
addMember("Earl 5mith", "331-9191"); // Invalid
addMember("Earl S5ith", "332-9191"); // Invalid
addMember("Earl-Smith", "332-9191"); // Invalid
addMember("EarlSmith", "332-9191"); // Invalid
addMember("EarlSmith", "3329191"); // Invalid
addMember(" EarlSmith", "802-332-9191"); // Invalid

console.log(memberDirectory);

/*
The issue appears to be with the isValidName function. The term \w+ will return
true if the regex pattern matches any "word character". Word characters include uppercase,
lowercase, digits, and underscores. Given the requirement is to only allow alphabetic 
characters in the name, then this regex pattern will not work, as it will 
match with non-alphabetic characters, which is why the 3rd test case is returning "true".

To solve this, I've changed the \w+ to \[a-z]+, and added the i tag at the end of the
regex sequence. This ensures that the code is only testing for alphabetic characters,
case insensitive. 

Here is the code: 

*/

function copyUser(account) {
  let clone = {};

  for (let property in account) {
    clone[property] = account[property];
  }

  return clone;
}

const user = {
  name: "Joey",
  position: "Teaching Assistant",
  courses: ["JS101", "JS109", "JS120", "JS129"],
};

const newUser = copyUser(user);
newUser.name = "Antonina";
newUser.courses.push("JS130");

console.log(newUser.courses); // Should log [ 'JS101', 'JS109', 'JS120', 'JS129', 'JS130' ]
console.log(user.courses); // Should log [ 'JS101', 'JS109', 'JS120', 'JS129']


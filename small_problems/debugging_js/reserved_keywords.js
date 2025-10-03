/*
We have been asked to implement a function that determines whether or not a given word 
is a reserved keyword. We wrote the isReserved function below along with some test cases, 
but we aren't seeing the expected result. Why not? Fix the code so that it behaves 
as intended.
*/

const RESERVED_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

console.log(RESERVED_KEYWORDS.indexOf("switch"));
function isReserved(name) {
  return RESERVED_KEYWORDS.some((reserved) => {
    return name === reserved;
  });
}

function isReserved2(name) {
  for (let keyword of RESERVED_KEYWORDS) {
    if (keyword === name) return true;
  }
  return false;
}

function isReserved3(name) {
  return RESERVED_KEYWORDS.includes(name);
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true

console.log(isReserved2("monkey")); // false
console.log(isReserved2("patch")); // false
console.log(isReserved2("switch")); // should be: true

console.log(isReserved3("monkey")); // false
console.log(isReserved3("patch")); // false
console.log(isReserved3("switch")); // should be: true
/*
In addition to learning some useful debugging tricks, like setting a conditional 
break point in a loop based on the value of a variable 
I did sb('reserved_keywords.js', 18, index === 32) in order to stop it at the 18th line 
when the index reached 32, which was equal to 'switch', so that I could inspect the 
variables name and reserved at that point. In hindsight I could have just set the 
variable to stop to the debugger when reserved equalled switch... Anyway, in the process
of doing this, I found the bug (my debugging was unnescessary but good practice).

The name === reserved does, in fact, correctly evaluate to true once the "switch" 
keyword is reached in the statement. But this return statement is being applied in the
scope of the callback function passed into the .forEach method call, not the 
outer scope of the isReserved function. Returning true, in this case, has no effect,
as .forEach always returns undefined. Therefore, the function will complete the
.forEach loop, and evaluate "return false" regardless if the condition within the 
.forEach loop is met.

Here are a couple options that would resolve the bug and give the function the intended
return values:

*/

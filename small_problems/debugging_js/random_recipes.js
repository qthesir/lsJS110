/*
One bored and hungry evening we decided to randomly generate recipes. 
We can't wait to see the first suggestions, but JavaScript raises a TypeError, 
telling us that dishName.join is not a function. What is wrong?
*/

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = [
  "rice",
  "green bell pepper",
  "mushrooms",
  "carrot",
  "kebab",
  "spinach",
  "soy bean sprouts",
  "mashed potatoes",
  "corn",
  "cucumber",
  "peas",
];

let spices = [
  "peri peri",
  "cinnamon",
  "nutmeg",
  "cardamom",
  "ground ginger",
  "poppy seed",
  "cumin",
];

let extras = ["peanuts", "sesame seeds", "egg", "wasabi", "soy sauce"];

// Name

let adjective = ["Delicious", "Hot", "Exotic", "Creative", "Festive", "Dark"];
let firstNoun = ["Power", "After Work", "Holiday", "Disco", "Late Night"];
let secondNoun = ["Mix", "Delight", "Bowl", "Chunk", "Surprise", "Bliss"];

// Generate!

let dishName = random(adjective)
  .concat(random(firstNoun))
  .concat(random(secondNoun));
let dish = [
  ...random(ingredients, 3),
  ...random(spices, 2),
  ...random(extras, 1),
];

console.log("How about: " + dishName.join(" "));
console.log("You need: " + dish.join(", "));

/*
The problem, without even inspecting the random function (which I should inspect), is 
that the program is attempting to call .join, an array method, on a string. .join is 
not a string method. 

When you use the '+' operator on two arrays, it concatenates the arrays together into a 
string, removing the brackets and separating the individual elements by a comma.
Therefore, the program is attempting to call .join, an array method, on a string. 
.join is not a string method, hence the ".join is not a function" TypeError. 
It is necessary to explicitly create an array, and you can use the spreader syntax 
to distribute the values into a single array, like so:

*/

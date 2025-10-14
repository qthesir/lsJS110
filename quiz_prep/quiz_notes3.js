let fruitVarieties = ["Apple", "Strawberries", "Watermelon"];
let computerBrands = ["MacIntosh"];

fruitVarieties["Apple"] = ["Granny Smith", "Gala", "MacIntosh"];

console.log(fruitVarieties);
console.log(fruitVarieties['Apple'][2] === computerBrands[0]);

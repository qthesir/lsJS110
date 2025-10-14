function valueOrNoValue(obj, property) {
  return obj[property] !== undefined ? obj[property] : "no value"
}

let quantity = { apple: 25, orange: 0, banana: 13 };

console.log(valueOrNoValue(quantity, "apple")); // 25
console.log(valueOrNoValue(quantity, "banana")); // 13
console.log(valueOrNoValue(quantity, "plum")); // no value

console.log(valueOrNoValue(quantity, "orange")); // no value

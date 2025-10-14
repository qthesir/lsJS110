const isEmpty = (value) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else {
    return Object.keys(value).length === 0;
  }
};

// test cases

console.log(isEmpty({})); // true
console.log(isEmpty({ name: "Janice" })); // false

console.log(isEmpty("")); // true
console.log(isEmpty("Janice")); // false

let arr = [];
arr["foo"] = "bar";
arr[-1] = "boo";

let sparseArr = [];
sparseArr.length = 3;

console.log(isEmpty([])); // true
console.log(Object.keys(arr));
console.log(arr.length);
console.log(isEmpty(arr)); // true
console.log(isEmpty(["Janice"])); // false
console.log(Object.keys(sparseArr));
console.log(sparseArr.length)
console.log(isEmpty(sparseArr)); // false

function hide(arr, value) {
  return arr.map((ele) => (ele === value ? "*" : ele));
}

let oldData = ["launch", "code", "secret", "secret", "over"];
let newData = hide(oldData, "secret");
console.log(newData); // ['launch','code','*','*','over' ]
console.log(oldData === newData); // false

let oldData2 = ["shhh", "its", "a", "secret"];
let newData2 = hide(oldData2, "shhh");
console.log(newData2); // ['*','its','a','secret' ]
console.log(oldData2 === newData2); // false

/*
The problem is asking us to write a function that 
*/

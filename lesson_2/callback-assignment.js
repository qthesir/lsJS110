// Example 6

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

/*
The goal of the above function is to select the objects within the array where ALL of the 
key, value pairs meet the following condition: The key matches the first letter of the value.

The .filter method is called on a nested array, where there are two objects nested in 1 array. The filter
method takes a callback function and will return each element in the array (in this case, the objects) where
the condition defined in the callback returns true. The callback function is evaluating each object in 
the array and returns true or false (boolean) depending on whether the object meets those conditions. 
Within the callback function, the Object.keys static method returns the keys of the object being 
evaluated in an array. On the array of keys returned, the .every array method is called, which
accepts a callback function and will return true if every element in the array returns true based on 
the conditions defined within the callback function, and false if they do not. The callback function
is checking to see if the first element of each string value in the object (returned by object[key][0])
is equal to the key with strict equality. object[key] returns the value of the object and [0] indexes 
the first element. 

In the above array, only the second object, { c: 'cat', d: 'dog'} meets this condition, and thus that 
is what is returned when the .filter method is applied.

*/

// Example 7

[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});

// => [ [ 27 ], [ 'apple' ] ]

/*

*/ 

// Example 9

[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

/*

*/ 

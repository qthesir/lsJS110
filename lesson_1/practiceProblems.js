// Problem 1

[1, 2, 3].filter((num) => "hi");

/*
What is the return value of the filter method call above? Why?

Ok, so what is the filter function actually doing? It's checking for the truthiness of the callback 
function's return  value, not the value itself. In this case, regardless of the value of num, 
the return value is always going to be 'hi' (return implied by the one-liner syntax) and 
'hi' is truthy. Therefore, the return value of the above method call is going to be a copy of the 
original array.
*/

// Problem 2

[1, 2, 3].map((num) => {
  num * num;
});

/*
What is the return value of map in the above code? Why?

The return value is going to be an array with values [1, 4, 9], or the square of the input values. 
The .map method makes a copy of the original array and applies a transformation, dictated by the 
callback function passed into the method, to each element in the array, and returns the copy. In this 
case, the transformation applied is the element multiplied by itself. 

Whoops, looks like I got that wrong. The reason I got it wrong is because the function is not in 
one-liner format, and there is no return statement, so the callback is going to return undefined
for each of the elements in the new array. The return value of map will actually be:
[ undefined, undefined, undefined ]
*/

// Problem 3

[1, 2, 3].map((num) => num * num);

/* 
The following code differs slightly from the above code. What is the return value of map in this 
case? Why?

The above code will return the same value as I indicated in my original (wrong) answer to the above 
problem: the square of each element, or [1, 4, 9]. The .map method is applying a transformation,
dictated by the callback function, to each of the elements in the original array, and returns the 
new array. 

Important to note that the syntax also considers the curly braces around the function body. If those
are absent, AND the code is on one line, the return statement is implied. 

*/

// Problem 4

["ant", "bear", "caterpillar"].pop().length;

/*
What is the return value of the above statement? Why?

The return value is going to be the length of the string 'caterpillar', which is 11. The .pop() method
mutates the array its applied to by removing the element at the end of the array, and returns the value
of that element. Thus, the .length property will be called on the last element of the array, 
which is caterpillar, which has a length of 11 characters. 

Another term for mutate, in reference to array methods, is whether or not the array method is 
"destructive". The pop() method is a destructive method, is another way I could have phrased it. 
*/

// Problem 5

[1, 2, 3].every((num) => {
  return (num = num * 2);
});

/*
What is the callback's return value in the above code? Also, what is the return value of every 
in this code?

The return value of the callback is going to be the return value of the statement num = num * 2, which
is the value of num * 2, which will be 2, 4, 6 for each element of the array [1,2,3], respectively. 
All of those values are truthy, which means the .every method will return true. If 0 were one of the 
array elements, it would be false, since .every only returns true if every value of the callback 
function is truthy. 

Slight correction on my language here: num = num * 2 is an expression, not a statement, and 
to say it has a return value isn't exactly precise - the value is a result of the evaluation by the 
javascript engine, which is why we say "evaluates to". Perhaps I could have said "evaluation value" 
to be more precise? 
*/

// Problem 6

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

/*
How does Array.prototype.fill work? Is it destructive? How can we find out?

We can check the MDN documentation. According to the doc, this is a destructive array, since it is 
described as a mutating method. The array method replaces the indicated elements with a static (single) 
value. It takes the following parameters: (value, start, end). Value is the value that will fill 
the array, start is the starting index, and end is the ending index. If no ending index is given, 
the value will replace elements from the starting index up until the end of the array. 
If only a value is given, the value will replace every element in the array. 

In this particular instance, the arr.fill() method will replace all the elements from index 1 to 5 
with the value of 1. Since 5 is given as the ending index, and there are only 4 indices in the array
of the above problem, and the element at index 0 is 1, every value in the return array will be 1. 

We can also verify whether the method is destructive by testing to see if the original value, arr,
was changed. 
*/

// Problem 7

["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
What is the return value of map in the above code? Why?

The return value is going to be [undefined, 'bear']. The array method map is applying a transformation,
dictated by the callback function passed into the method, to every element in the array. In this case,
the callback function is returning the element if the length property of that element has a value 
greater than 3. Otherwise, there is no explicit return statement, and the function will return the 
value "undefined". Since 'ant' does not have a length greater than 3 and 'bear' does, the return value
will be undefined for ant, and 'bear' for bear.  

Should have mentioned that the method is returning an array. This is implied, but just to be explicit.

"When a function doesn't explicitly return something, it implicitly returns undefined". This is pretty
good. 
*/

// Problem 8

// Take a look at the following array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are the keys and
// the values are the positions in the array:

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

/*
The goal here is to create a new object; not to modify the existing array. Therefore, if we are not 
performing any sort of transformation on the array, nor selecting, only iterating, this feels like
a good use case for the native JavaScript array iterator, .forEach. 

Success! 
*/

let flintstonesObj = {};

flintstones.forEach((ele, idx) => {
  flintstonesObj[ele] = idx;
});

console.log(flintstonesObj); // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// Problem 9

// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let totalAge = 0;

console.log(Object.values(ages));
Object.values(ages).forEach((age) => (totalAge += age));

console.log(totalAge);

// One note here: I initially set totalAge to just totalAge, not equal to 0. This was giving me an
// error where the value of totalAge was NaN, which makes sense, because a variable is initialized
// to undefined if not explicitly given a value, and undefined + 32 or any number is NaN, and NaN
// plus any number is NaN, which is why the return value was NaN.

// Another possible solution:

console.log(Object.values(ages).reduce((acc, val) => acc + val, 0));

// The advantage of using the reduce method is that you don't have to initialize another variable
// in order to solve the problem. You can solve it in one line.

// Problem 10

// Pick out the minimum age from our current Munster family object:

let ages2 = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

/*
In this case, we'd be using a selection method, which would be the filter method, to find out 
which age is the lowest. There probably is also a built in array iterator "min," perhaps from the Math
library, but lets try this first. 

Actually, on second thought, this isn't really a selection method. You are not selecting something 
that defines a specific criteria. You're really iterating through the array and looking for a specific 
value, so forEach seems more appropriate.

The math.min works with the spreader syntax. I'm trying to figure out how exactly I might use the filter
method to solve this problem, but I'm coming up a bit stumped. How would you have the value return 
true for the minimum value? Because you're not returning an array, you're returning a single value,
and the conditional in forEach is going to evaluate to true multiple times. 

You could potentially use reduce though. 
*/

let minNum = Infinity;
Object.values(ages2).forEach((num) => {
  if (num < minNum) {
    minNum = num;
  }
});
console.log(minNum);
console.log(Math.min(...Object.values(ages2)));

console.log(
  Object.values(ages2).reduce((acc, cv) => {
    if (cv < acc) {
      return cv;
    }
    return acc;
  }, Infinity)
);

// Problem 11

// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

/*
Lets think about this for a second. First step is probably going to be to split the string into an 
array. Then, I can iterate through that array, and use the current letter as an object key. For each
letter, I can add 1 to the array value, hopefully with += 1. 


Implied Assumptions
- Capital letters are separate from lowercase, and counted differently. 
- Spaces are not counted. Skip spaces
*/

let letterFrequency = {};
statement.split("").forEach((letter) => {
  if (letter !== " ") {
    if (letterFrequency[letter] === undefined) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter] += 1;
    }
  }
});
console.log(letterFrequency);

// Noticing a pattern with these forEach iterators. I could easily replicate this with an accumulator.
// That is, the object {} would be the beginning of the accumulator.
// 1 issue here is that each of the letters needs to be initialized to a number initially. The logic
// is a little complicated and difficult to read here. Might have been better to potentially use a 
// full for loop, for the sake of being able to use the continue statement.

console.log(statement.split("").reduce((acc, cv) => {
  if (cv !== " ") {
    if(acc[cv] === undefined) {
      acc[cv] = 1
    } else {
      acc[cv] += 1
    }
  }
  return acc
}, {}))

// Couple of notes here. The LS solution is really elegant, see: 

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);

/*
Reflection:

First off, I could have probably simplified getting rid of the white space by just using the filter 
first, instead of looking for a fancy way to do it in a chain. Don't know how or why I missed this tbh.

Using the "or" || logical operator and the short-circuiting behavior here was pretty slick, I think.
So, if the result[char] is undefined, its going to be a falsy value, so the or statement will look at 
the second value, which is 0, and evaluate to that instead, since that is the last value evaluated. 
If there is a value already in result[char], it will be greater than 1 and therefore a truthy value,
meaning that the result[char] will be evaluated and the result will not change. This is a clever,
simple way to get around my nested if statements, which are kind of confusing to read. In this case,
there literally are no if statements.

Also, per the solution, good to note that this can be solved without transforming the string into an
array. This can be done with only a for loop, iterating over each character of the string, checking 
for spaces etc. 
*/ 

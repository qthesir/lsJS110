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

// Practice Problem 8 

// Take a look at the following array: 

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are the keys and 
// the values are the positions in the array:

{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

/*
The goal here is to create a new object; not to modify the existing array. Therefore, if we are not 
performing any sort of transformation on the array, nor selecting, this feels like
a good use case for the native JavaScript array iterator, .forEach. 
*/ 



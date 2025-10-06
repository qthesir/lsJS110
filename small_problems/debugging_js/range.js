/*
Check our code below. Why do the example invocations fail with an error saying Maximum 
call stack size exceeded? Can you fix the code, so it runs without error and 
satisfies the requirements?

*/

function range(start, end) {
  let range = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));

/*
Ok, there's multiple things going on here. The principle issue is that range is 
being declared twice - the second range declaration overwrites the first, because
they have the same name. Thus, the range function that is invoked in the console.logs 
is being called recursively without a halting condition - the parameter 0 and end
are being passed into the same range function, where the end is ignored, and 0
becomes end, and then it continues to call itself until the maximum call stack size
is exceeded. 

If you remove the recursive call, you are left with the original range function, which is
not reflecting the requirements. Inlcuding both a start and end parameter works as intended,
but if you only include the 'end' argument, the end parameter is set to -1, and the for loop
halting condition evaluates to false immediately and the function returns an empty array. 

The simplest fix would be to swap the start and end variables and set start equal to 0 
as a default, but this would change the way the function is called and would fail the test
cases. 

It needs to be able to take start and end parameters, in that order, but default
to the only parameter given if the user provides only 1 argument. Here is the fix:

*/

/*
Further exploration: 

There are two reasons why the following is not a working solution. Can you spot them?

First, start is being set before end, so when you set start = 0, then end = start,
end will always equal 0 if end is not present. The second reason... I am not sure.
Potentially something to do with the undefined aspect of this? 
Ah... Because it would also treat 0 as falsy, but 0 is a valid argument. Could do
end === undefined. 

As for why a range2 and range 1 wouldn't work... Well, it could, if you had 3 range
functions, or range1 and range2, but otherwise there is no way to tell whether 
you should use the function with 1 or 2 arguments. 
*/

function range2(start, end) {
  let range = [];
  if (!end) {
    start = 0;
    end = start;
  }
  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

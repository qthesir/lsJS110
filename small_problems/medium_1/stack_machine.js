/*
See stack machine lesson in LS for a description. Too long to paste here. 
*/

// Examples
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

/*
PEDAC 

Problem
The problem wants us to create a function called "minilang" that takes a string of commands, with each command
separated by a single space. A command could be an operation or a value. The commands dictate whether a value is 
pushed onto the stack, removed from the stack, added to the register, or some operation is performed on the values
in the stack and register. Print displays the value in the register in the console. 

Examples / Test Cases 
Requirements 
- The program will accept a string value, with a list of commands, with each command separated by a single space
- The available commands are as follows:
  - n : Place a value, n, in the register. Do not modify the stack.
  - PUSH : Push the register value onto the stack. Leave the value in the register.
  - ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  - SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  - MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  - DIV : Pop a value from the stack and divide the register value by the popped stack value, 
    storing the integer result back in the register.
  - REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, 
    storing the integer remainder of the division back in the register.
  - POP : Remove the topmost item from the stack and place it in the register.
  - PRINT : Print the register value.
- n can be a positive or negative integer 
- All operations are integer operations 
- The program will use a stack and a register
- A 'stack' is defined as a list of values that grows and shrinks when values are 'pushed' (added to the stack) or 
'popped' (removed from the stack)
- A register is the value that a command operates on
- There can only ever be one value in the register
- The register is not a part of the stack
- Initialize the stack with and empty array []
- Initialize the register with 0
- Print should print 0 if there isn't a value in the register 
- an n value is placed in the register. Push pushes the value onto the stack, but the value remains in 
the register (i.e. the value does not decrement to 0). 


Questions
- Could n be a floating point value?
- What is the behavior of remainder and DIV? How are they rounding their values? Are they rounding to the 
nearest int, or is there some special way that DIV and remainder handle integer values in Javascript? 

Data Structure
Input: 
Output: 
Intermediate:

Algorithm
High level explaination

Step-by-step algorithm


*/ 

/*
Notes and Reflection

This is a perfect example of a concept that can not easily be simply read about and understood. You actually
have to work with a register and a stack to understand deeply about what they are. Like someone who has only 
heard the description of a saw, vs. someone who has actually used one. Who understands it more? These are tools,
after all. 
*/
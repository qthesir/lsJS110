/*
See stack machine lesson in LS for a description. Too long to paste here. 
*/

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
  - PUSH : Push the register value onto the stack. LEAVE THE VALUE IN THE REGISTER.
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
Input: String with commands and numbers separated by a single space
Output: No explicit output, only side effect of printing the current register value to the console if the "PRINT" command
is used. 
Intermediate: I am anticipating needing to split the string into an array using the space as a delimeter. I will then
loop through that array, and operate on the string value according to the command being passed into the function. 

Algorithm
High level explaination
The function will accept a string of commands & numbers, separated by a single space, as an argument. It will then split that 
string into an array using a space as a delimeter. For each element in the array, identify the command (or number n), and 
perform operations on the register, stack, or console according to the command's function. 

Step-by-step algorithm
- Split the string into an array of commands
- Declare the variable 'register' and initialize to 0
- Declare the variable 'stack' and initialize to 0
- For each command in the string
  - Identify the command to be performed and execute the command
- When all commands have been executed, return undefined

HELPER: Identify the command to be performed and execute the command
- If the command is a number n:
  - Coherce n to a Number
  - Set the register to n
- If the command is PUSH
  - Push the current register value into the stack array 
  - Do not edit the register, leave it the same.
- If the command is ADD
  - Pop the last value from the stack
  - Set the register equal to the popped value plus the current register value
- If the command is SUB
  - Pop the last value from the stack
  - Set the register equal to the popped value substracted from the register value 
If the command is MULT
  - Pop a value from the stack
  - Set the register equal to the popped value multiplied by the register value
If the command is DIV
  - Pop a value from the stack
  - Set the register equal to the register value divided by the popped value rounded to the nearest whole integer 
  - 
If the command is REMAINDER
  - Pop a value from the stack
  - Set the register value to the register value modulo the popped value
If the command is POP
  - Pop a value from the stack
  - Set the register equal to the popped value
If the command is PRINT
  - Log the register value to the console

*/

// Code with intent

const VALID_COMMANDS = [
  "PUSH",
  "POP",
  "ADD",
  "DIV",
  "MULT",
  "PRINT",
  "REMAINDER",
  "SUB",
];

const minilang = (stringOfCommands) => {
  let arrayOfCommands = stringOfCommands.split(" ");
  let register = 0;
  let stack = [];
  arrayOfCommands.forEach((command) => {
   
    if (
      String(Number(command)) === "NaN" &&
      !VALID_COMMANDS.includes(command)
    ) {
      throw "Command is not valid.";
    }
    
    if (
      String(Number(command)) === "NaN" &&
      command !== "PUSH" &&
      command !== "PRINT" &&
      stack.length === 0
    ) {
      throw "Command cannot be executed. Nothing on the stack";
    }

    switch (command) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        register = register + stack.pop();
        break;
      case "SUB":
        register = register - stack.pop();
        break;
      case "MULT":
        register = register * stack.pop();
        break;
      case "DIV":
        register = Math.round(register / stack.pop());
        break;
      case "REMAINDER":
        register = register % stack.pop();
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(command);
        break;
    }
  });
};

// Examples
// minilang("PRINT");
// // // 0

// minilang("5 PUSH 3 MULT PRINT");
// // // 15

// minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// // // 5
// // // 3
// // // 8

// minilang("5 PUSH POP PRINT");
// // // 5

// minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// // // 5
// // // 10
// // // 4
// // // 7

// minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// // 6

// minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// // // 12

// minilang("-3 PUSH 5 SUB PRINT");
// // // 8

// minilang("6 PUSH");
// // (nothing is printed because the `program` argument has no `PRINT` commands)

minilang("5 PUSH ADD NOTACOMMAND");

/*
Notes and Reflection

This is a perfect example of a concept that can not easily be simply read about and understood. You actually
have to work with a register and a stack to understand deeply about what they are. Like someone who has only 
heard the description of a saw, vs. someone who has actually used one. Who understands it more? These are tools,
after all. 

Ok, so I'm trying to think through this program... First, there is the register, then there is a stack, which should be initialized 
to 0 and [] respectively. Then, there are the commands. Each command needs to be recognized by its keyword (either command or number) 
and then the operation needs to be performed on the stack and register according to the rules of that command. I'm thinking I could 
use a switch statement, who's default is to ue a number, and the number is put into the register. The commands could either be 
helpers or just operate on the stack / register directly, depending on their complexity. The program could split the string by spaces
and loop through the resulting array, addressing each of the commands in sequence. 

*/

/*
Building on the previous exercise, write a function that returns true or false based on whether or not an 
inventory item is available. As before, the function takes two arguments: an inventory item and a list of 
transactions. The function should return true only if the sum of the quantity values of the item's transactions 
is greater than zero. Notice that there is a movement property in each transaction object. A movement value 
of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

*/

// Examples

/*
PEDAC

Problem
Write a function that takes an inventory item id and a list of transactions, and returns 'true' if there
are available items, and false if there is not. The availability of the item is determined by the net
quantity moved 'in' and 'out'. 

Examples / Test Cases
Requirements
- Accept an inventory ID and a list of transactions as arguments
- Output true of false depending on whether an item is available
- The availability of an item is determined by the net quantity moved in and out
  - That is, total quantity moved out subtracted from total quantity moved in
- If the value of the above calculation is negative, return false. 
- If the value is positive, return true
- The 'in' or 'out' quality of a transaction is determined by the 'movement' property
- The quantity moved in or out is determiend by the 'quantity' property

Data Structures
Input: inventory ID and a list of transactions
Output: True or false depending on whether there is available quantity of the inventory item 
Intermediate: This is going to be similar to the last problem, except instead of filtering, we're 
going to be taking the net quantity. Its still going to loop through the array, and do a similar check to 
see if we're looking at the right item. 

Algorithm 
The program accepts an inventory id and a list of transactions as an argument. It then iterates through the 
list of transactions. For each transaction, the program first checks if the transaction id is equal to the 
inventory id. If it is, it then checks if the 'movement' property is in or out. If its in, it will 
add the value on the 'quantity' property to the net inventory. If it is out, then it will subtract the 
value of the 'quantity' property from net inventory. After the loop completes, the program will check 
if the net inventory value is greater than 0. If it is, the program returns true to the caller. If it is 
not, it will return false.

Step by step 
- Accept inventory item id and a list of transactions as an argument
- SET netInventory = 0
- For each transaction in transactions:
  - Check if the the transaction id equals the inventory item ID
  - If it does, check to see if the movement property is in or out
    - If its in, add the value of the 'quantity' property to netInventory
    - If its out, subtract the value of the 'quantity' property to netInventory
-Return the evaluation of (netInventory > 0) to the caller 

*/

// Code with intent

const { transactionsFor } = require("./inventory_tx.js");

const isItemAvailable = (itemId, transactions) => {
  let itemTransactions = transactionsFor(itemId, transactions);
  let netInventory = itemTransactions.reduce(
    (netInventory, { _, movement, quantity }) => {
      return netInventory + (delta = movement === "in" ? quantity : -quantity);
    },
    0
  );

  return netInventory > 0;
};

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true

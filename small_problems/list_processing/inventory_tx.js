/*
Inventory Item Transactions

Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns 
an array containing only the transactions for the specified inventory item.

*/

/*
Problem
Write a function that takes an inventory ID and a list of transactions as arguments, and returns a subset of 
the list of transactions where the inventory IDs equals the inventory ID passed in as an argument

Examples / Test Cases
Requirements
- Accept an inventory id (integer) and a list of transactions as an input
- Return the subset of the list of transactions as an output
- The list of transactions should be al ist of objects with the following properties:
  - id
  - movement
  - quantity
- The inventory ID passed in as an argument is the ID for the inventory item of interest in the
list of transactions. 

Data Structures
Input: inventory id (int), list of transactions
Output: Subset of the list of transactions where id === inventory id
Intermediate: This is a very simple filter use case, where you filter out all the objects in the 
transaction array where the input inventory id equals the id property on the object.

Algorithm 
The program accepts an inventory ID and a list of transactions as an argument. It then creates a new, empty
array to capture the output. It iterates through the list of transactions and checks to see if the id on the 
transaction equals the inventory id passed in as an argument. If it does, the program adds the transaction to 
the output array. If it does not, then the program doesn't add the transaction to the output array. When the 
program finishes looping through the list of transactions, it returns the output array to the caller. 

Step by step
- Accept inventory id and list of transactions as an argument
- SET 'output' to []
- For transaction in transactions:
  - Does id === inventory id? 
  - If it does, add the transaction to 'output'
  - If it does not, do nothing
- Return output

*/

const transactionsFor = (inventoryId, transactions) => {
  return transactions.filter((transaction) => transaction.id === inventoryId);
};

// Example

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

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

module.exports = { transactionsFor };

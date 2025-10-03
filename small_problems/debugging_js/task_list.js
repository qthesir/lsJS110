/*
We were asked to implement a task list and the following functionality:

adding a new task
completing a given number of existing tasks
displaying the task list
We decided to keep things simple and model the tasks as strings. 
Completing a task for us simply means deleting the string from the array of tasks.

Experimenting with our code reveals that it doesn't work exactly as we expected. 
Find the problem and fix it.
*/
let todos = [
  "wash car",
  "exercise",
  "buy groceries",
  "balance budget",
  "call plumber",
  "feed fido",
  "get gas",
  "organize closet",
];

function addTask(task) {
  if (todos.includes(task)) {
    console.log("That task is already on the list.");
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos.shift()} complete!`);
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log("All tasks complete!");
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log("---------------------");

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask("oil change");
addTask("dentist");
addTask("homework");

completeTasks(3);
displayTaskList();

/*

hmmm... I have never seen the delete statement used before. That feels like
cheating!

Ah, after investigating with the REPL, I see that it leaves you with an empty item,
instead of actually removing the element. This is probably related to the bug 
in the program. 

It is related to the bug in the program. 

The bug is related to the use of the delete statement in the completeTask function 
Using the delete statement does delete the element from the array, but it leaves you 
with an empty item. Empty items, when 
iterated over by JavaScript, return undefined. Therefore, when completeTasks(3) is 
invoked, it logs the first task at index 0, 'wash car', and then proceeds to use 
the delete statement to delete element at index 0 from the list. This, however,
leaves an empty item at index 0. On the next iteration of the loop, the program doesn't
log the next task. Instead, it attempts to access the element at index 0, which returns 
undefined due to the fact the element at index 0 is now an empty item.

The fix here is simple: Use the built in array method "splice" to remove the item
at index 0 instead of delete. Splice both deletes the element, and shifts the array
elements back an index to fill the empty item. 

I should mentally be reminding myself to determine whether the approach to code
I'm taking is declarative or imperative, and when it makes more sense. 

When should I take a declarative approach? When should I take an imperative approach? 
*/

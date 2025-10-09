/*

Professor Graham wrote some simple code to help him determine the average and median scores on each of his 
quarterly exams, but some of his test cases are failing. Figure out why, and write the code to fix it. 

*/

function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort(compareNums);

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

function compareNums(num1, num2) {
  return num1 - num2
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);

/*
The reason why the code was throwing an error for the median function, was because the "sort" array method on 
nums did not include the appropriate callback function. The callback function in sort is optional - if not 
provided, the array elements are converted to strings, and then sorted according to each characdters unicode code point
value. Since the unicode value of 1 is less than 6, 100 will appear before 64, for example, and this is why the 
test cases with 100s in the exam score array returned false, but the others returned true. When a callback function
IS passed, as I have done in the corrected code, the sort method expects a negative, positive, or a 0 value, where a
negative value indicates a should come before b, and a positive value indicates that a should come after b, and 0 
indicates they are equal. In order to sort in ascending order (although for the median ascending or descending do not matter), 
I pass in (a,b) => a - b. 

Here is the code: 

*/

/*
Notes & reflection

Don't forget that you can create another function and use that as a callback. 

*/
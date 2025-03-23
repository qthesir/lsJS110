let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(object) {
  let produceObj = {}
  for (let i in object) {
    if (object[i] === 'Fruit') {
      produceObj[i] = 'Fruit' 
    }
  }
  return produceObj
}

let myNumbers = [1, 4, 3, 7, 2, 6];
//console.log(doubleNumbersMutate(myNumbers)); // => [2, 8, 6, 14, 4, 12]
//console.log(myNumbers) // => [2, 8, 6, 14, 4, 12]
//console.log(doubleNumbersMutate(myNumbers) === myNumbers)
function doubleNumbersMutate(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i]*2
  }
  return numbers
}

let myNumbers2 = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers2));  // => [1, 8, 3, 14, 2, 12]
console.log(myNumbers2)

// Transform the number based on their position in the array rather than their value. Double 
// every odd position. 
function doubleOddNumbers(numbers) { 
  let doubledArray = []
  let currentNumber 
  for (let i = 0; i < numbers.length; i++) {

    currentNumber = numbers[i]

    if (i % 2 > 0 ) {
      doubledArray.push(currentNumber * 2)
    } else {
      doubledArray.push(currentNumber)
    }
  }

  return doubledArray

}

let myNumbers3 = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers3, 3)); // => [3, 12, 9, 21, 6, 18]

function multiply(array, factor) {
  let multipliedArray = []

  for(let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    multipliedArray[i] = currentValue * factor
  }

  return multipliedArray
}


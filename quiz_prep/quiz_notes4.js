let words = ["Fate", "fell", "short", "this", "time"];

function logLetters(array) {
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    for (let j = 0; j < word.length; j++) {
      console.log(word[j]);
    }
  }
}

logLetters(words);
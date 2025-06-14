let words = ["go", "ahead", "and", "jump"];

words.sort((a, b) => {
  console.log({ a, b });
  console.log(a.length, b.length);
  if (a.length > b.length) {
    return -1;
  } else if (a.length < b.length) {
    return 1;
  } else {
    return 0;
  }
});

// words.sort((a,b) => b.length - a.length)

console.log(words);

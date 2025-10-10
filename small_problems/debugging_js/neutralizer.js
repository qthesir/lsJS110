/*
We wrote a neutralize function that removes negative words from sentences. However, 
it fails to remove all of them. What does happen? How would you fix this problem?
*/

function neutralize(sentence) {
  let words = sentence.split(" ");

  return words.filter((word) => !isNegative(word)).join(" ");
}

function neutralize2(sentence) {
  let words = sentence.split(" ");

  [...words].forEach((word) => {
    let index = words.indexOf(word);
    if (isNegative(word)) {
      words.splice(index, 1);
    }
  });

  return words.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize2("These dull boring cards are part of a chaotic board game.")
);

/*
The expected output would be "These cards are part of a board game". The current output of the program is "These boring cards are
part of a board game." The word "boring" is still in the output. The reason for this is the following: When neutralize is called,
it first splits the sentence into an array of words, delimited by spaces. It then iterates through each word in the array using 
the .forEach array method. If the word returns true for isNegative, it mutates the array and removes the word at the current index 
using the .splice array method. When .splice mutates the words array, which is the array being iterated on, the 
.forEach method call does not adjust the index backward one to account for the now shorter array. Therefore, when a word is removed using 
.splice in a .forEach iteration, it will skip evaluating the subsequent element, since that element is now at the same index that 
was just evaluated. 

Thus, the reason why "boring" remained in the output sentence is because the word "dull" evaluated to true, was removed, and the 
word "boring" ascertained an index - 1 position in the array, which causes it to be skipped. The most straightforward way would be 
to either create a new array, and invert the conditional to be isPositive (or ! isNegative), and then add all the words 
that do not contain a negative word into the new array, and then return the new array. The second way would be to use
the .filter method with the same condition (!isNegative). I do wonder, however, if these methods are somehow less efficient
than a "removal" approach, since there are less words to remove than there are to keep, and this might make the function more efficient.
I cannot think of a way to do this without creating a second array, however. Any ideas?

Here is the fix:


*/

/*
I did attempt with neutralize 2 to use the removal tactic, but I still had to use an entirely new array. Bother.
*/

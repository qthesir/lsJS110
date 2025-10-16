
// ['fool','roost','coost',] ['o', 'o']


/*
Write a function that takes an array of strings made up
of only lowercase letters, and return an array of the letters
that appear in every array.

Requirements 
- Accept an array of lowercase strings as an argument
- Return an array of the letters that appear in the input
array in every single string 
- If there are no letters, return an empty array
- If the letter occurs twice in all strings, then that 
letter should be listed twice in the output array 

Data Structures 
Intermediate: 

Algorithm 
The function should accept an array of strings as an argument.
For each of the characters in the first string in the array, 
check to see if that character is included in all of the 
remaining strings. If it is, then add the character to 
the output array. If it is not, then move to the next 
character. When the loop terminates, return the output array.

STep by step 
- Accept a strArray as an argument
- SET output = []
- For each character in strArray[0]:
    - Check to see if the character is included in 
    every string from strArray(1, strArray.length)
    - If it is, then add the character to the output 
    array.
- Return the output array


STep by step 
- Accept a strArray as an argument
- SET output = []
- Sort the strArray elements from a => z
- For each character, index in sortedArr[0]:
    - check to see if the character at that index in 
    every other string are equal
        - If they are, add that character to the output array
- Return the output array

Step by step 
- Accept a strArray as an argument
- Set output = []
- Create the count map of all letters in each string
- For each letter in the first string:
    - If the letter does not exist on other strings, remove it
    - If the letter exists on other strings, take the lowest value of that letter



*/

[{c: 1, o: 2, l: 1}, {l: 1, o: 1, c: 1, k: 1}, {c: 1, o: 2, k: 1}]

const commonChars = (strArray) => {
    let output = []
    let restOfStrArray = strArray.slice(1,strArray.length)
    for (const char of strArray[0]) {
        if (restOfStrArray.every(string => string.includes(char))) {
            output.push(char)
            restOfStrArray = restOfStrArray.map(string => {
                let newString = string.split("")
                newString.splice(string.indexOf(char), 1)
                return newString.join("")
            })
            console.log(restOfStrArray)
        }
    }

    return output
}


console.log(commonChars(['bella', 'label', 'roller']))
console.log(commonChars(['cool', 'lock', 'cook']))

/*
That was rough. If I got that question, I would have failed. That is brutal. Removing things
kind of scares me, but it was simple after I got the hang of it. There's got to be a simpler 
way to do this though...

*/ 
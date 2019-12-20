# Tutorials for WATS 3020 Node 2

Fork this repository.
In order to successfully complete this assignment, you must find and complete the **TODOs** in the code:

**1-fizzbuzz (required)** 
  - TODO fill in the comment template.  This program will look for an integer argument. If it doesn't find one it will display a message showing the format of the command.  The input is an an integer.  The output is a list of all values from 1 to the value of the integer. If the number is divisible by 3 it is marked "fizz", if it's divisible by 5 it is marked "buzz" and if it is divisible for 15 (3 and 5) it is marked "buzz".
  - TODO check for integer argument and if no integer entered provide a usage statement and quit
  ```JavaScript
  if (isNaN(input) || !Number.isInteger(input)) {
    console.log("usage: node 1-fizzbuzz/index.js <integer>")
    process.exit(1)
  }
  ```
  - TODO provide info to for loop to iterate from 1 to value of input
  ```JavaScript
  let i = 1; i <= input; i++
  ```
  - TODO provide test for divisible for 3,5, and 15 to create desired output
  ```JavaScript
    i % 15 === 0 //divisible by 3 and 5
    i % 5 === 0 //divisible by 5
    i % 3 === 0 //divisible by 3
  ```
  
**1-fizzbuzz-fun (required)** 
In this tutorial, we move our logic into a function.  Pulling logic into a function makes it easier to share and test.
  - TODO once you get fizzbuzz working above copy it to the 1-fizzubzz-fun directory
  - TODO replace the loop that was testing each value with a loop that calls a function 
  ```JavaScript
  for (let i = 1; i <= input; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`)
  }
  ```
  - TODO put the logic for determining fizzbuzz into a function named `fizzbuzz` that receives the value to be tested and returns fizz, buzz, fizzbuzz or an empty string
  ```JavaScript
  function fizzbuzz(n){
    if (n % 15 === 0) {
      return "fizzbuzz"
    } else if (n % 3 === 0) {
      return "fizz"
    } else if (n % 5 === 0) {
      return "buzz"
    } else {
      return ""
    }
  }
  ```
**2-reverse-string (required)**
 - TODO fill in the comment template.  This program will look for a string argument. If it doesn't find one it will display a message showing the format of the command.  The input is an an string.  The output is the input string reversed. The user can enter multiple words in a string argument by using quotes.
  - TODO check for string argument and if no string is entered provide a usage statement and quit
  ```JavaScript
 if (!input || input.length === 0) {
  console.log("usage: node 2-reverse-string <string>")
  process.exit(1)
}
  ```
  - TODO use array functions to reverse the string by splitting string into array elements, using the array reverse method, and then using the array join method to turn the array back into a string. Log the reversed string.
  ```JavaScript
  console.log(input.split('').reverse().join(''))
  ```
**2-reverse-string-iterate (required)**
In this tutorial you look at optimizing an algorithm.  We write code in a function and try to minimize iteration.  It's faster if you only have to iterate through half a string than to iterate through the whole string.
- TODO once you get the reverse string working above, copy the `index.js` file into the iterate directory.  You can remove the reverse string code but keep the input code.
- TODO write a function that iterates through all of the characters in the string to create a string that is reversed and call the function using the input
```JavaScript
function reverseWithFullIteration(str) {
  let result = ''
  //work from the back forward to build a string
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
console.log("result with full iteration", reverseWithFullIteration(input))
```
- TODO write a function that reverses the string but only iterates over half of the input string
```JavaScript
function reverseWithHalfIteration(str){
  let result = []
  //swap characters from back and front
  for (let i = 0; i < str.length / 2; i++) {
    result[i] = str[(str.length - i)]
    result[str.length - i] = str[i]
  }
  return result.join('')
}
console.log("result with half iteration", reverseWithHalfIteration(input))
```
**3-data-collection (required)**
In this tutorial you'll use a local module to prompt the user to enter data.  Then you'll store the data in an object that you define.  You'll use a counter to access the questions from and array.  In the end you'll loop through the keys in an object and report the data you've collected.

- TODO require the io module and name it `io`
```JavaScript
const io = require("../modules/io")
```
- TODO init a userData object
```JavaScript
let userData = {} //initialize an object to capture the data
```
- TODO init a counter to keep track of questions
```JavaScript
let counter = 0 //initial counter 
```
- TODO set the question prompt based on the counter and the questionKeys array
```
`${questionKeys[counter]["question"]}? `
```
- TODO load the answer using the question key in the userData Object
```JavaScript
 let currentQuestion = questionKeys[counter]
    let key = currentQuestion.key
    userData[key] = response
```
- TODO increment the counter
```JavaScript
counter++
```
- TODO logical expression to test if we are through with questions
```JavaScript
counter >= questionKeys.length
```
- TODO get the next question
```JavaScript
      let nextQuestion = questionKeys[counter]
```
- TODO loop through keys in object and using io.print to report
```JavaScript
for (let d in userData) {
      io.print(`${d}: ${userData[d]}`)
}
```
- TODO fill in comments template


**4-character-count (required)**
Counting words in a sentence and sentences in a document is a common problem.  In this exercise we count characters in an picked up in from a user prompt.  It's handy to use an object to count the characters, but then for reporting we often want the counts in order and an array is useful for that.  
- TODO init charcount object to count characters
```JavaScript
let charcount = {}
```
- TODO set the prompt the enter a string
```JavaScript
io.terminal.setPrompt("Enter a string to analyze: ")
```
- TODO turn the response into an array of characters
```JavaScript
  let characters = response.split('')
```
- TODO iterate through array to create object that has character for key and count for value
```JavaScript
for (let character of characters){
  if (charcount[character]){
    charcount[character] ++
  } else {
    charcount[character] = 1
  }
}
```
- TODO convert object to array of objects by looping through characters in object
```JavaScript
for (let character in charcount ){
  charArr.push({char:character,count:charcount[character]})
}
```
- TODO sort the array based on count
```JavaScript
charArr.sort(function(a,b){
  if (a.count<b.count) return -1  //return -1 to indicate less than
  else if (a.count>b.count) return 1  //return +1 to indicate greater than
  else return 0  //return 0 to indicate equal tod
})
```
- TODO iterate through array and report the character and its count in ascending order  
```JavaScript
for (let row of charArr){
  io.print (`${row.char} ${row.count}`)
}
```
- TODO fill in comments template

**NOTE: be sure to test all your apps**

## Turn in assignment
Push your code to the forked repository in your account.  

Turn in 1 URL on Canvas which should be of the format: https://github.com/{account name}/{repo name}
# WATS 3020 Node 2

This exercise has been developed to give you an opportunity to work with JavaScript Objects, Arrays, Functions, Loops, and Events. There are separate sections for the various parts of the assignment, broken up into separate folders:
* `1-fizzbuzz`: a program that counts from 1 to a given integer, printing out _fizz_ if the number is divisble by 3, _buzz_ if it is divisible by 5, and _fizzbuzz_ if it is divisible by both 3 and 5.
* `2-fizzbuzz-fun`: an adaptation of the FizzBuzz algorithm but with a function.
* `3-reverse-string`: a program that takes a string as input and reverses it using JavaScript string methods.
* `4-reverse-string-iterate`: a program that takes a string as input and reverses it by iterating through the string, character by character.
* `5-character-count`: a program that takes a string as input and counts how many of each character are in that string.

This assignment uses the local module **getargs** to pull a single argument out of the command line for input and `console.log(<string>)` for all output.

## Topics covered by this Assignment:
* [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
* [Array functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods)
* [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* [Looping and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

Read more about these topics in the local file [reference.md](reference.md).

## Basic Requirements
In order to complete this project successfully, you will need to fulfill these requirements:
* Complete the code for all of the associated TODOs in `index.js` in the `1-fizzbuzz` folder such that the program accepts numeric input and correctly outputs _fizz_, _buzz_, or _fizzbuzz_ for each number.
* Complete the code for all of the associated TODOs in `index.js` in the `2-fizzbuzz-fun` folder such that the program works similarly to the `1-fizzbuzz` program.
* Complete the code for the conditional logic in `index.js` in the `3-reverse-string` folder such that the program properly identifies that a string has been inputted and returns the reversed string as output.
* Complete all of the associated TODOs in `index.js` in the `4-reverse-string-iterate` folder such that the program properly identifies that a string has been inputted and returns the reversed string by iterating through the full length of the string.
* Complete all of the associated TODOs in `index.js` in the `5-character-count` folder in order to correctly recognize a string, count the characters in the string, and output the number of each character (sorted in order of frequency).

## Guide & Tutorial
For assistance on how to proceed with specific components of the assignment, consult this [text tutorial](./tutorials.md) for guidance. In the alternative, a video walkthrough of the assignment can be found [here](https://youtu.be/0scwXA47Eh8). Timestamps for specific parts of the assignment (with associated links) are as follows:
* [2:32 - Part 1 of 5, 1-fizzbuzz](https://youtu.be/0scwXA47Eh8?t=152)
* [10:44 - Part 2 of 5, 2-fizzbuzz-fun](https://youtu.be/0scwXA47Eh8?t=644)
* [15:27 - Part 3 of 5, 3-reverse-string](https://youtu.be/0scwXA47Eh8?t=927)
* [18:58 - Part 4 of 5, 4-reverse-string-iterate](https://youtu.be/0scwXA47Eh8?t=1138)
* [27:01 - Part 5 of 5, 5-character-count](https://youtu.be/0scwXA47Eh8?t=1621)

## Stretch Goals
1. Write a variant of `1-fizzbuzz` or `2-fizzbuzz-fun` that uses two separate `if` statements and string addition instead of the four part `if-else` statement.
2. In the exercise `4-reverse-string-iterate`, complete the STRECH TODOs in order to reverse the string by only iterating through half of its length.
3. Write an alternative version of `4-reverse-string-iterate` that uses a `for of` loop. Learn more about the `for of` loop on the MDN JavaScript web docs [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).
4. For `3-reverse-string` and `4-reverse-string-iterate`, use the console [`commands console.time(<label>)`](https://developer.mozilla.org/en-US/docs/Web/API/Console/time) and [`console.timeEnd(<label>)`](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd) to see how long each method takes.
5. In the exercise `5-character-count`, also display the character counts in alphabetical order.

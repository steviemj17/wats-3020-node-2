//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it by iterating through the string, character by character
Input: a string
Output: the reverse string
Usage: node 4-reverse-string-iterate <string>
*/

const getargs = require("../modules/getargs")
let input = getargs.getStringArg()

function reverseWithFullIteration(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function reverseWithHalfIteration(str) {
    // STRETCH TODO write a function that reverses the string but only iterates over half of the input string.
}

//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input) {
    console.log("usage: node 4-reverse-string-interate <string>");
}
else {
    // use functions to reverse string
    console.log("result with full iteration", reverseWithFullIteration(input));

    // STRETCH TODO output the result of your reverseWithHalfIteration function

}





//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it using JavaScript string methods.
Input: a string
Output: the string, but reversed
Usage: node 3-reverse-string <string>
*/


const getargs = require("../modules/getargs");
let input = getargs.getStringArg();

if (!input) {
    console.log("usage: node 3-reverse-string <string>");
}
else {
    console.log(input.split('').reverse().join(''));
}





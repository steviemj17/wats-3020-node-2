/*
Description:
Input:
Output:
Usage: 
*/
const getargs = require("../modules/getargs")
// test that input is a number and exit with error
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 2-reverse-string <string>")
  process.exit(1)
}

// get the value to be evaluated
let input = getargs.getStringArg()

console.log(input.split('').reverse().join(''))


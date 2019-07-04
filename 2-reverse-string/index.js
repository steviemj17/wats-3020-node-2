//TODO fill in comment template
/*
Description:
Input:
Output:
Usage: 
*/
const getargs = require("../modules/getargs")
// test that input is a number and exit with error
// get the value to be evaluated
let input = getargs.getStringArg()
//test that it is a string

//TODO check for string argument and if no string is entered provide a usage statement and quit



console.log(input.split('').reverse().join(''))


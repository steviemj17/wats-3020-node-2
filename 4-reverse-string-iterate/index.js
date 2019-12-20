//TODO fill in comment template
/*
Description:
Input:
Output:
Usage: 
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()

function reverseWithFullIteration(str) {
    let result = '';
    // TODO loop from end of str (str.length-1) to beginning
    for ( ) {
        // TODO add the letter in the current position to the result string.
    }
    return result;
}

function reverseWithHalfIteration(str) {
    // STRETCH TODO write a function that reverses the string but only iterates over half of the input string.
}

//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if ( ) {
    // TODO provide a usage statement
}
else {
    // use functions to reverse string
    console.log("result with full iteration", reverseWithFullIteration(input));

    // STRETCH TODO output the result of your reverseWithHalfIteration function

}





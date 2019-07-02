/*
Description:
Input:
Output:
Usage: 
*/
const getargs = require("../modules/getargs")
// get the value to be evaluated
let input = getargs.getStringArg()
// test that input is a number and exit with error
if (!input || input.length === 0) {
  console.log("usage: node 2-reverse-string-iterate <string>")
  process.exit(1)
}

function reverseWithFullIteration(str) {
  let result = ''
  //work from the back forward to build a string
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

function reverseWithHalfIteration(str){
  let result = []
  for (let i = 0; i < str.length / 2; i++) {
    result[i] = str[(str.length - i)]
    result[str.length - i] = str[i]
  }
  return result.join('')
}


console.log("result1", reverseWithFullIteration(input))

console.log("result2", reverseWithHalfIteration(input))
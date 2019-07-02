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

let result1 = ''
//work from the back forward to build a string
for (let i = input.length-1; i >= 0; i--){
  result1 += input[i]
}
console.log("result1",result1)

let result2 = new Array(input.length)
//work from both sides and swap
for (let i = 0; i < input.length/2; i++){
  result2[i] = input[(input.length - i)]
  result2[input.length - i] = input[i]
}
console.log("result2",result2)

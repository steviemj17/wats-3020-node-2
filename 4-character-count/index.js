/*
Description:
Input:
Output:
Usage: 
*/
const io = require("../modules/io/index")

//TODO init charcount object to count characters

//TODO set the prompt the enter a string

// call the prompt
io.terminal.prompt()

io.terminal.on("line", function (response) {
  //split the string to create an array
  //TODO turn the response into an array of characters

  //TODO iterate through array to create object that has character for key and count for value
  
  io.terminal.close()
})
.on("close",function(){
  let charArr = []
  //TODO convert object to array of objects by looping through characters in object
 
  //TODO sort the array based on count
  

  io.print("Character count in ascending order:")
  //TODO iterate through array and report the character and its count in ascending order 
  
})
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


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input || input.length == 0) {
  // TODO provide a usage statement
  console.log("usage statement");
}
else {
  // TODO initialize charCount object to count characters
  let charCount = {};
  // TODO turn the input into an array called characters using the split method
  let characters = input.split('');
  
  // TODO iterate through array to create object that has character for key and count for value
  for (let character of characters){
    if (charCount[character]){
      charCount[character]++;
    } else {
      charCount[character] = 1;
    }
  }
  
  // TODO initialize a new array called charArr
  let charArr = [];

  // TODO loop through every character in charCount 
  for (let character in charCount) {
    let newElem = {char:character, count:charCount[character]};
    // TODO add newElem to charArr using the push method
    charArr.push(newElem);
  }

  // TODO use the sort method of charArr with a custom compare function to sort the array by the count values (least to greatest)
  charArr.sort(function(a,b){
    if (a.count<b.count) return -1;
    else if (a.count>b.count) return 1;
    else return 0;
  });

  // TODO print the content of the array, showing each character and the count
  for (let row of charArr){
    console.log(`${row.char} ${row.count}`);
  }
  
}


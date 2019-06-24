let n = Math.floor(Math.random() * 10) + 1 //get this randomly
n = 3
let guessCount = 0
const io = require("../modules/io/index")

function getOrdinal(n){
  if (n === 1){
    return "first"
  } else if (n===2){
    return "second"
  } else {
    return "third"
  }
}

//set the prompt message
io.terminal.setPrompt('3 Guesses: Guess the number! (0-10): ');

//run the prompt mesage in the terminal
io.terminal.prompt();

//on a line feed capture response and process
io.terminal.on('line', function (response) {
  //do something with the response
  guessCount++;

  // need to turn the response string into a number to compare
  let responseInt = parseInt(response)
  if (responseInt !== NaN) {
    if (responseInt === n) {
      console.log(`You win!! - ${responseInt} is the number`);
      process.exit(0);
    } else {
      io.print(`Your ${getOrdinal(guessCount)} guess ${responseInt} is incorrect`)
    }
  }
  // say something if number is too big

  // say something if number is too small

  // if done guessing exit
  if (guessCount > 2) {
    console.log('You lose - game over');
    process.exit(0);
  }
  //if not guesses run the prompt again
  io.terminal.prompt()
})

//if you control c you get the 
//detect the termnial is closing and do something
io.terminal.on('close', function () {
  console.log(`not happenin'`)
  process.exit(1);
});
/**
 * Prompt user for data (name,favorite color, favorite number)
 * Put data into an Object (key value)
 * Report back using print 
 * 
 * Look at the io module that provides a "terminal" interface
 * by creating a "wrapper" around stdin and stdout.  Notice
 * that the "print" function implemented console.log which
 * is just writing a message with a "newline" character.
 * 
 * Prompting a user has three phases: 1)output a statements asking
 * for something  2)waiting for user to enter some data
 * 3) processing the data that the user enters as a string
 * We can tell the that phase 2 is complete by waiting for the 'line' event
 * We use a "callback" function that will receieve the user respons as a string
 * to process the data
 */
const io = require("../modules/io")
const questionKeys = [{
    "key": "name",
    "question": "What is your name"
  },
  {
    "key": "color",
    "question": "What is your favorite color"
  },
  {
    "key": "number",
    "question": "What is is your favorite number"
  }
]
let userData = {} //initialize an object to capture the data
let counter = 0 //initial counter 

// ask first question
io.terminal.setPrompt(`${questionKeys[counter]["question"]}? `);
io.terminal.prompt();

//gather answers
io.terminal.on('line', function (response) {
    let currentQuestion = questionKeys[counter]
    let key = currentQuestion.key
    userData[key] = response

    counter++
    if (counter >= questionKeys.length) {
      io.terminal.close()
    } else {
      let nextQuestion = questionKeys[counter]
      io.terminal.setPrompt(`${nextQuestion["question"]}? `);
      io.terminal.prompt();
    }

  })
  .on('close', function () {
    io.print("Questions complete")
    for (let d in userData) {
      io.print(`${d}: ${userData[d]}`)
    }
  });


// exit with no error
// process.exit()
/*
Description:
Input:
Output:
Usage: 
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
    //not iterable value in array
    for (let d in userData) {
      io.print(`${d}: ${userData[d]}`)
    }
  });

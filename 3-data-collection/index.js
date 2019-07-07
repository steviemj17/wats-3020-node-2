/*
Description:
Input: prompted input based on question array
Output:
Usage: 
*/
//TODO require the io module

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
//TODO init a userData object

//TODO init a counter to keep track of questions
let counter = 0 //initial counter 

// ask first question

//TODO set the question prompt based on the counter and the questionKeys array
io.terminal.setPrompt();

//show the prompt and wait for response
io.terminal.prompt();

//gather answers
// get response when use click enter key 
io.terminal.on('line', function (response) {
    //get the current question and use the key to store the answer in the userData object

    //TODO load the answer using the question key in the userData Object

    //TODO increment the counter

    //TODO logical expression to test if we are through with questions
    if () {
      io.terminal.close()
    } else {
      //TODO get the next question

      io.terminal.setPrompt(`${nextQuestion["question"]}? `);
      io.terminal.prompt();
    }

  })
  .on('close', function () {
    io.print("Questions complete")
    //TODO loop through keys in object and using io.print to report
    
  });

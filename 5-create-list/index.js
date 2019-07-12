/*
Description: Create a list based on input from user. 
When user enters "quit", exit the prompt loop and report
back the user data
Input: string value for each prompt where "quit" means stop entering
Output: log the items in the list one row at a time
Usage: 5-create-list
*/

const io = require("../modules/io")

//define a list const
const list = []

//set up and run a prompt to enter "First item: "
io.terminal.setPrompt(`First item: `)
io.terminal.prompt()

//gather answers
io.terminal.on("line", function (response) {

    if (response.toLowerCase() === "quit") {
      io.terminal.close()
    } else {
      list.push(response)
      io.terminal.setPrompt(`Next item: `)
      io.terminal.prompt();
    }

  })
  .on("close", function () {
    io.print("List complete")
    for (let item of list){
      io.print(`${item}`)
    }
  })

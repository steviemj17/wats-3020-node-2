# WATS 3020 Node 2
* Objects
* Arrays
* Functions
* Algorithms
* Events


## I/O for this code  
* Use the local module **getargs** to pull a single argument out of the command line for input. 
* Use the local module **io** to prompt the user for input 
* Use console.log(<string>) for output.

## Using the **io** module
The local **io** module provides a "wrapper" around the node readline module.  Two functions are exported from the **io** module: `print` and `terminal`.  We often create functions wrappers around other functions when we want to supply specific options.  

The `print` function behaves exactly the same way as the `console.log` function and was created just to show you could write your own `console.log` function.

The `terminal` function allows us to use `readline` with our terminal output.  The `readline` function is asynchronous.  Asynchronous code **"listens"** for **"events"** to be fired and responds by executing code within a **"callback"** function.  JavaScript is ann event drive functional language.  

Many times i/o (input/output) commands are implemented as events because the computer must wait for a user or device to tell it the the input or output is ready to be processed.

The **terminal** function listens for the `readline` events which include `line` and `close`.  The `line` event is fired when the user hits the enter key to produce a `newline` character.  The `close` function is fired when the `terminal.close()` function is executed or the code exits the process with `process.exit()`.

The `terminal.setPrompt("{ask for data}")` command can be used to provide string output when asking the user for something.  Then when `terminal.prompt()` is called the string provided is shown to the user and the computer waits for a response.  When the user presses the enter key, the callback for the `line` event is executed. 

The pattern you'll see in the code for exercises 2-4 is as follows:
```JavaScript
// ask first question
io.terminal.setPrompt(`Ask a question? `);
io.terminal.prompt();

//gather answers
io.terminal.on('line', function (response) {
    //process the repsonse

    //if you need more info
    io.terminal.setPrompt(`Ask another question? `);
    io.terminal.prompt();

    //else close the terminal
    io.terminal.close()

  })
  .on('close', function () {
    io.print("Summarize the data")
  });

```


## Project Resources

It might be helpful to review some additional resources as you work through
this project:

* 

## Basic Requirements

In order to successfully complete this exercise, you must find and complete the **TODOs** in the code:

1. 
2. 
3. 
4. 


**be sure to test all your apps**

## Turn in assignment
Push your code to the forked repository in your account and [**create a pull request**](https://help.github.com/en/articles/creating-a-pull-request).  This will make it available for instructor code review.  

Turn in 2 URL's on Canvas which should be of the format:
* https://github.com/{account name}/{repo name}



## Stretch Goals

1.


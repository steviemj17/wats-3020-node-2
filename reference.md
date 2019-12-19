# Reference for WATS 3020 Node 2

## Using the **io** module
The local **io** module provides a "wrapper" around the node `readline` module.  Two functions are exported from the **io** module: `print` and `terminal`.  We often create functions wrappers around other functions when we want to supply specific options.  

The `print` function behaves exactly the same way as the `console.log` function and was created just to show you could write your own `console.log` function.

The `terminal` function allows us to use `readline` with our terminal output.  The `readline` function is asynchronous.  Asynchronous code **"listens"** for **"events"** to be fired and responds by executing code within a **"callback"** function.  JavaScript is an event driven, functional language.  

Many times i/o (input/output) commands are implemented as events because the computer must wait for a user or device to tell it the the input or output is ready to be processed.  Rather than have the processing unit of the computer actually wait, in an async system, the next in the instruction set is processed.  Setting up a listener allows code dependent on input to be called only when the input is available without tying up processing.

The **terminal** function listens for the `readline` events which include `line` and `close`.  The `line` event is fired when the user hits the enter key to produce a `newline` character.  The `close` function is fired when the `terminal.close()` function is executed or the code exits the process with `process.exit()`.

The `terminal.setPrompt("{ask for data}")` command can be used to provide string output when asking the user for something.  Then when `terminal.prompt()` is called the string provided is shown to the user and the computer waits for a response.  When the user presses the enter key, the callback for the `line` event is executed. 

The pattern you'll see in the code for exercises 3-4 is as follows:
```JavaScript
// ask first question
io.terminal.setPrompt(`Ask a question? `);
io.terminal.prompt();

//gather answers
io.terminal.on('line', function (response) {
    //process the response

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
## JavaScript Objects
We've learned that variable reference "containers" that have types and contain data. For example in the statement`let s = "red"`, the variable `s` references a string variable with the data value "red".  
JavaScript Objects contain data in the form of key/value pairs where the key is the reference and the value is the data.  Objects can also reference functions.  Below, you'll read about functions as "containers" for code.  

Objects can be created using the curly brace syntax.
```JavaScript
let obj = {}
obj.color = "red"
obj.number = 1
obj.color = "blue"
console.log(obj.color, obj.number) // blue 1
```
Keys are unique in Objects.  As in the example above when assign color a second time, I don't get 2 colors in the Object because there can only be one "color" key.  We'll see that this can be useful when we're trying to identify unique data or count instances of non-unique data.

## JavaScript Object Processing
If we have an Object and we want to access or output all the Key/Value pairs, we can do this using the `for/in` syntax. In the example below we initialize an object and print out all the key, value pairs.  
```JavaScript
let obj = {color: "red", number:1}
for (key in obj){
  console.log(key, obj[key])
}
```
The output would look like this:
```JavaScript
color red
number 1
```
Note that the keys are not quoted in the initialization, but that values representing strings must be quotes. It's as if each Key is a variable and the Value is the data.  We'll learn about JSON (JavaScript Object Notation), which is a data interchange format.  In JSON all Keys are quoted.

Also notice the way the `for/in` syntax works. The name `key` following `for` is just a variable name and can be whatever you want.  The name `obj` following `in` is the name of the Object you're going to process.  The `for` will loop through all the Keys in the Object (order not fixed or guaranteed to be the same each time) and assign each Key's value to the variable `key`.  

To pull the data out of the object we need to use the square braces syntax `[]` because we are using a variable containing the value of the key to access the value in the object.

It's important to recognize that Objects hold data by associating it with unique Keys and that there is no order associated with the Keys.

If we run `typeof` on an Object variable, we'll see that it is an "object"
```JavaScript
let obj = {}
console.log(typeof obj) // prints object
```

## JavaScript Array Processing
Arrays are also Objects. The syntax for defining an Array is to use **square braces []**. There are no Key/Value pairs in Arrays.  Instead Arrays uses integer indexes to access data in what resembles a list.  Arrays can use negative values for indexes, but by convention array indexes start at 0.
```JavaScript
let arr = []
arr[0] = "red"
arr[1] = 1

```
Unlike the Objects described above, and owning to the use of integer indexes, the data in Arrays can be ordered.  You can think of the index as a Key because, in fact they are.

The Array object is defined with many methods (functions) that serve a variety of purposes.  Arrays unlike Objects described above are iterable which means we can loop over them and the order will be the same every time.  In fact it will be the order of the indexes.

We can add data to arrays in several ways.  If we want to add it to the end of the array, use the `push` function.
```JavaScript
let arr = []
arr.push("a")
console.log(arr) // displays "a"
```
We can also just assign a value by using an index.
```JavaScript 
let arr = []
arr[0] = "a"
console.log(arr) // displays "a"
```

Two, of many techniques for iterating over arrays are shown below.
```JavaScript
// for loop
let arr = ["a","b","c"]
for (let i=0;i<arr.length;i++){
  console.log(i, arr[i])
}
```
The above prints out
```JavaScript
0 a
1 b
2 c
```
Note the loop above walks through the Array by initializing a counter variable `i`. With each run through the loop it tests to see if it is done processing by comparing the counter `i` to the `length` of the array.  Because `i` start counting at 0, the test for done is `i < arr.length` instead of `i < arr.length`.  The `length` property reports the maximum number of items in the array.  Because we have a counter, we can output the index and the value.

```JavaScript
// for/of loop
let arr = ["a","b","c"]
for (let item of arr){
  console.log(item)
}
```
The above prints out
```JavaScript
a
b
c
```
The `for/of` loop shown above is similar to the `for/in` loop used for traversing Objects.  We declare the variable `item` to take on the value of each item in the array.  The name `item` is arbitrary as we can name this variable anything (that is a reasonable variable name).  

The important thing to know about using Arrays is that they can be used to maintain order.  In fact there is a sort function that can be used to create an ordered array based on programatically defining the order.  If I have a need for an ordered list of items, I'm probably going to use an Array to hold such data. 

If we run `typeof` on an Array variable, we'll see that it is an "object"
```JavaScript
let arr = []
console.log(typeof arr) // prints object
``` 

## JavaScript Functions
Functions allow us to encapsulate code so that we can run it by calling from anyplace in our code.  This is especially helpful when we want to call some code over and over as in a loop and we don't want to clutter up the code with a lot of commands right inside the loop.    
Using functions is part of **structure programming**.  This refers to taking a large problem and breaking it down into "functional" pieces.  You'll also see functions added to objects to provide the methods which define what the object can do.  Functions together with data are what make up an object.  

We have two different syntaxes available for defining functions.  The arrow syntax is new (ES6) and it provides for a scoped `this` value.  In standard functions, `this` can refer to an object outside of the curly braces that make up the function, but with arrow functions, `this` is only relevant within the curly braces.  
Example of syntax for standard functions:
```JavaScript
  function displayThis(){
    console.log(this) //displays all data in global namespace
  }
```
Example of syntax for arrow functions:
```JavaScript
  let displayThis = ()=>{
    console.log(this) //displays undefined
  }
```
You can test out the difference in running with these 2 ways by running `node functions` in this project,  and looking at the code in `.functions.js`

## Indexing, Looping and Algorithms

## Project Resources

It might be helpful to review some additional resources as you work through
this project:

* [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
* [Array functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods)
* [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* [Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [Looping and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [Algorithms](https://developer.mozilla.org/en-US/docs/Glossary/Algorithm)
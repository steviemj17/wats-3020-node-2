# WATS 3020 Node 2
* Objects
* Arrays
* Functions
* Indexing, Looping and Algorithms
* Events
* Comments


## I/O for this code  
* Use the local module **getargs** to pull a single argument out of the command line for input. 
* Use the local module **io** to prompt the user for input 
* Use console.log(<string>) or io.print(<string>) for output.

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

The Array object is defined with many methods (functions) that serve a variety of purposes.  Arrays unlike Objects described above are iterable which means we can loop over them and the order will be the same everytime.  In fact it will be the order of the indexes.

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
function(<params>) <function name>{}
<function name>(<args>)

(<params> =>{}

## Indexing, Looping and Algorithms

## Project Resources

It might be helpful to review some additional resources as you work through
this project:

* Object
* Array
* Array functions
* Function
* Events
* Iteration
* Algorithms
* Looping
* Indexing


## Tutorials
Fork this repository.
In order to successfully complete this assignment, you must find and complete the **TODOs** in the code:

1. **1-fizzbuzz (required)** 
2. **1-fizzbuzz-fun (required)** 
3. **2-reverse-string (required)**
4. **2-reverse-string-iterate (required)**
5. **3-data-collection (required)**
6. **4-character-count (optional)**
7. **5-guessing-game (optional)**


**be sure to test all your apps**

## Turn in assignment
Push your code to the forked repository in your account and [**create a pull request**](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork).  This will make it available for instructor code review.  

Turn in 2 URL's on Canvas which should be of the format:
* https://github.com/{account name}/{repo name}



## Stretch Goals

Complete the optional tutorials.




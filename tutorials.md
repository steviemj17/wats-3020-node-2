# Tutorials for WATS 3020 Node 2

## 1-fizzbuzz

Fizz buzz is a game for children that helps teach them about division. Players take turns counting, beginning at 1. Any time they would say a number that is divisible by 3, they instead say Fizz. Any time they would say a number that is divisible by 5, they instead say Buzz.

FizzBuzz (as it's usually written in programming communities) is a popular question or challenge in basic programming interviews. We are using it here to demonstrate basic loops in JavaScript.

1. TODO fill in the comment template.
   * This program will look for an integer argument. If it doesn't find one it will display a message showing the format of the command.
   * The input is an an integer. 
   * The output is a list of all values from 1 to the value of the integer. If the number is divisible by 3 it is marked "fizz", if it's divisible by 5 it is marked "buzz" and if it is divisible for 15 (3 and 5) it is marked "buzz".
   * This program requires node and is run using the command `node 1-fizzbuzz <integer>`.
2. TODO check if input is not an integer
    ```JavaScript
    if (isNaN(input) || !Number.isInteger(input))
    ```
3. TODO provide usage statement
    ```JavaScript
    console.log("usage: node 1-fizzbuzz <integer>");
    ```
4. TODO provide info to for loop to iterate from 1 to value of input
    ```JavaScript
    for (let i = 1; i <= input; i++)
    ```
5. TODO provide test for divisible for 3,5, and 15 to create desired output
    ```JavaScript
    if (i % 15 == 0) {
        console.log(`${i} fizzbuzz`);
    } else if (i % 5 == 0) {
        console.log(`${i} fizz`);
    } else if (i % 3 == 0) {
        console.log(`${i} buzz`);
    } else {
        console.log(`${i}`)
    }
    ```

## 2-fizzbuzz-fun

This challenge takes the FizzBuzz program that you created in the previous challenge and implements the conditional test as a separate function. You will see that a significant portion of this challenge is a repeat of **1-fizzbuzz**. You should re-use your code as appropriate.

1. TODO fill in the comment template. As this program achieves the same result as **1-fizzbuzz**, your comment describing its function should be the same (except for the usage statement).
2. TODO provide for tests for divisible for 3,5, and 15 to return desired output
    ```JavaScript
    function fizzbuzz(n){
        if (n % 15 === 0) {
          return "fizzbuzz"
        } else if (n % 3 === 0) {
          return "fizz"
        } else if (n % 5 === 0) {
          return "buzz"
        } else {
          return ""
        }
    }
    ```
3. The remaining TODOs are the same as those from [**1-fizzbuzz**](./tutorials.md#1-fizzbuzz). Be sure to change the usage statement based on the name **2-fizzbuzz-fun** instead of **1-fizzbuzz**.

# 3-reverse-string

Reversing a string variable is another common interview question. For this first version, we will rely on the following JavaScript string and array methods: [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse), and [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join).

1. TODO fill in the comment template.
    *  This program will look for a string argument. If it doesn't find one it will display a message showing the format of the command.
    *  The input is an an string.
    *  The output is the input string reversed. The user can enter multiple words in a string argument by using quotes.
    *  This program requires node and is run using the command `node 3-reverse-string <string>`.
2. TODO check for string argument and if no string is entered provide a usage statement and quit
    ```JavaScript
    if (!input || input.length === 0);
    ```
3. TODO provide a usage statement
    ```JavaScript
    console.log("usage: node 3-reverse-string <string>");
    ```
4. The actual code to reverse the string is already in the `index.js` file but is re-created here.
   ```JavaScript
   console.log(input.split('').reverse().join(''));
   ```

## 4-reverse-string-iterate

This challenge accomplishes the same goal as **3-reverse-string** but uses a loop to assemble a new string that is the reverse of the input string.

1. TODO fill in the comment template. As this program achieves the same result as **3-reverse-string**, your comment describing its function should be the same (except for the usage statement).
2. TODO loop from end of str (str.length-1) to beginning
   ```JavaScript
    for (let i = str.length - 1; i >= 0; i--)
   ```
3. TODO add the letter in the current position to the result string.
    ```JavaScript
    result += str[i];
    ```
4. The remaining TODOs are the same as those from [**3-reverse-string**](./tutorials.md#3-reverse-string). Be sure to change the usage statement based on the name **4-reverse-string-iterate** instead of **3-reverse-string**.

This challenge includes a stretch goal: reverse the string by only iterating through half of the length of the string instead of the whole length.
1. STRETCH TODO output the result of your reverseWithHalfIteration function
    ```JavaScript
    console.log("result with half iteration", reverseWithHalfIteration(input));
    ```
2. STRETCH TODO write a function that reverses the string but only iterates over half of the input string.
    ```JavaScript
    function reverseWithHalfIteration(str){
        let result = []
        //swap characters from back and front
        for (let i = 0; i < str.length / 2; i++) {
            result[i] = str[(str.length - i)]
            result[str.length - i] = str[i]
        }
        return result.join('')
    }
    ```
## 5-character-count

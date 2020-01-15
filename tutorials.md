# Tutorials for WATS 3020 Node 2

## 1-fizzbuzz

Fizz buzz is a game for children that helps teach them about division. Players take turns counting, beginning at 1. Any time they would say a number that is divisible by 3, they instead say Fizz. Any time they would say a number that is divisible by 5, they instead say Buzz.

FizzBuzz (as it's usually written in programming communities) is a popular question or challenge in basic programming interviews. We are using it here to demonstrate basic loops in JavaScript.

1. TODO fill in the comment template.
   * This program will look for an integer argument. If it doesn't find one it will display a message showing the format of the command.
   * The input is an an integer. 
   * The output is a list of all values from 1 to the value of the integer. If the number is divisible by 3 it is marked "fizz", if it's divisible by 5 it is marked "buzz" and if it is divisible for 15 (3 and 5) it is marked "buzz".
   * This program requires node and is run using the command `node 1-fizzbuzz <integer>`.

The next two steps are similar to what was done in the previous assignment, [wats-3020-node-1](github.com/suwebdev/wats-3020-node-1).

2. TODO check if input is not an integer
    ```JavaScript
    if (isNaN(input) || !Number.isInteger(input))
    ```
3. TODO provide usage statement
    ```JavaScript
    console.log("usage: node 1-fizzbuzz <integer>");
    ```

For the main part of this program, we want to use a standard `for` loop in order to iterate from 1 to the provided number. The syntax for the `for` loop can be [found in the MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).

4. TODO provide info to for loop to iterate from 1 to value of input
    ```JavaScript
    for (let i = 1; i <= input; i++)
    ```

Testing for divisibility requires a multi-part if ... else statement. The syntax for the `if ... else` statement can be [found in the MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

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
It is important to realize that in the if..else statement, it stops processing if one of the conditions is met. That means that if `(i % 15 == 0)` is true, it does not check to see if any of the later conditionals are true.

## 2-fizzbuzz-fun

This exercise takes the FizzBuzz program that you created in the previous exercise and implements the conditional test as a separate function. You will see that a significant portion of this exercise is a repeat of **1-fizzbuzz**. You should re-use your code as appropriate.

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

As with the parts 1 and 2, the next two steps are similar to what was done in the previous assignment, [wats-3020-node-1](github.com/suwebdev/wats-3020-node-1).

1. TODO check for string argument and if no string is entered provide a usage statement and quit
    ```JavaScript
    if (!input || input.length === 0);
    ```
2. TODO provide a usage statement
    ```JavaScript
    console.log("usage: node 3-reverse-string <string>");
    ```

The actual code to reverse the string is already in the `index.js` file but is re-created here. As described above, it uses array and string methods to accomplish the string reversal.
   ```JavaScript
   console.log(input.split('').reverse().join(''));
   ```

## 4-reverse-string-iterate

This exercise accomplishes the same goal as **3-reverse-string** but uses a loop to assemble a new string that is the reverse of the input string.

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

This exercise includes a stretch goal: reverse the string by only iterating through half of the length of the string instead of the whole length.
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

Counting the number of words in a sentence is a common problem. In this exercise, we will count how many time each character appears in a string. Then we will output the results of that count in order from least to most frequent.

1. TODO fill in comment template
    * This program will look for a string argument. If it doesn't find one it will display a message showing the format of the command.
   * The input is an a string. 
   * The output is a list of all of the characters that appear in the string with a count for each. The output list is sorted in order of frequency (least to greatest).
   * This program requires node and is run using the command `node 5-character-count <string>`.
2. TODO check for string argument and if no string is entered provide a usage statement and quit
    ```JavaScript
    if (!input || input.length == 0)
    ```
3. TODO provide a usage statement
    ```JavaScript
    console.log(`usage: node 5-character-count <string>`);
    ```
4. TODO initialize charCount object to count characters
    ```JavaScript
    let charCount = {};
    ```
5. TODO turn the input into an array called characters using the split method
    ```JavaScript
    let characters = input.split('');
    ```
6. TODO iterate through array to create object that has character for key and count for value
    ```JavaScript
    for (let character of characters){
        if (charCount[character]){
          charCount[character]++;
        } else {
          charCount[character] = 1;
        }
    }
    ```

At this point, you could output the contents of charCount and see the count of each character by using the following loop:
```JavaScript
for (let character in charCount) {
    console.log(`${character} ${charCount}`);
}
```
This would list the characters in the order that they appeared in the string. For example, if you ran the program `node 5-character-count hello`, you would get this output:
```
h 1
e 1
l 2
o 1
```
As stated in the description of the program, we want to list the letters by frequency (from least to greatest). Therefore, we will need to do some additional work in order to sort the data. In order to sort the data, we will have to create an array.

7. TODO initialize a new array called charArr
    ```JavaScript
    let charArr = [];
    ```
8. TODO loop through every character in charCount
    ```JavaScript
    for (let character in charCount)
    ```
9. TODO add newElem to charArr using the push method
    ``` JavaScript
    charArr.push(newElem);
    ```
10. TODO use the sort method of charArr with a custom compare function to sort the array by the count values (least to greatest)
    ```JavaScript
    charArr.sort(function(a,b){
        if (a.count<b.count) return -1;
        else if (a.count>b.count) return 1;
        else return 0;
    });
    ```
    In the alternative, the following code will also work:
    ```JavaScript
    charArr.sort(function(a,b){
        return a.count-b.count;
    });
11. TODO output the content of the array to the console, showing each character and the count
    ```JavaScript
    for (let row of charArr){
    console.log(`${row.char} ${row.count}`);
    }
    ```

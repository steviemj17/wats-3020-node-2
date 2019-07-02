# WATS 3020 Skills 2

## Iteration, Object, Arrays, Functions, Intro to Aysnchrounous behavior

### Debugging node
https://itnext.io/the-absolute-easiest-way-to-debug-node-js-with-vscode-2e02ef5b1bad

node --inspect-brk <FILE NAME>

https://www.w3schools.com/js/js_strings.asp

strings are immutable!

### io Module

**Set the prompt text:** 
`io.terminal.setPrompt(<prompt text>)`

**Display the prompt:**
`io.terminal.prompt()` returns a string

**Set up call back to read user input**
```io.terminal.on('line', function(response) {
  //do something with response string
})```

**Set up call back to do something when terminal closes
  - exit 0 is default
  - exit 1 indicates error
io.terminal.on('close', function()
{
  console.log(`closing'`)
  process.exit();  
});


adding comments at the top

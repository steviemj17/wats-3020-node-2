
  // print as implemented below is the same as console.log
  exports.print = function(msg){
    process.stdout.write(`${msg}\n`);
  }
  
  exports.terminal = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
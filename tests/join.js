var blooket = require("../index.js");
var inst = new blooket();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter id', name => {
    inst.join(9077595,"baby");
        readline.close();
  });

const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(value) {
  for (let c = 0; c <= value; c++) {
    if (value % c === 0) {
      console.log(c);
    }
  }
}

scanner.question('', (input) => {
  run(parseFloat(input));
  scanner.close();
});
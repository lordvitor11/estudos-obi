const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(value) {
  let total = value;
  for (let c = 1; c < value; c++) {
    total *= value - c;
  }
  console.log(total);
}

scanner.question('', (input) => {
  run(parseFloat(input));
  scanner.close();
});
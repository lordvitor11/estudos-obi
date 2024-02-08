const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(value) {
  console.log(`${value * 2} minutos`);
}

scanner.question('', (input) => {
  run(parseInt(input));
  scanner.close();
});
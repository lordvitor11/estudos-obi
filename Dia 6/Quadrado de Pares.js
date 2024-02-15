const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(num) {
  for (let c = 1; c <= num; c++) {
    if (c % 2 === 0) {
      console.log(`${c}^2 = ${c ** 2}`)
    }
  }
}

scanner.question('', (input) => {
  run(parseFloat(input));
  scanner.close();
});
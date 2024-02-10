const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(num) {
  for (let c = 1; c <= num; c++) {
    if (c % 2 == 1) {
      console.log(c);
    }
  }
}

scanner.question('', (input) => {
  run(parseFloat(input));
  scanner.close();
});

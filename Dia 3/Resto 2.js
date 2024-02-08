const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(num) {
  for (let c = 1; c <= 10000; c++) {
    if (c % num == 2) {
      console.log(c);
    }
  }
}

scanner.question('', (input) => {
  run(Number(input));
  scanner.close();
})
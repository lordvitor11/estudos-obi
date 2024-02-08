const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(num) {
  for (let c = 1; c <= 10; c++) {
    console.log(`${c} x ${num} = ${c * num}`);
  }
}

scanner.question('', (input) => {
  run(Number(input));
  scanner.close();
})
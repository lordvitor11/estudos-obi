const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(num) {
  let limit = num % 2 === 0 ? 11 : 10;

  for (let c = num; c <= num + limit; c++) {
    if (c % 2 !== 0) {
      console.log(c);
    }
  } 
}

scanner.question('', (input) => {
  let num = parseFloat(input);
  run(num);
  scanner.close();
});
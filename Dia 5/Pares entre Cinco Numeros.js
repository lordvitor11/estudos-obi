const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  let pares = 0;
  for (let item of values) {
    if (item % 2 === 0) {
      pares++;
    }
  }

  console.log(`${pares} valores pares`);
}

let values = [];
let count = 0;

scanner.on('line', (line) => {
  if (count > 4) {
    run(values);
    scanner.close();
  } else {
    values.push(parseFloat(line));
  }
  count++;
});


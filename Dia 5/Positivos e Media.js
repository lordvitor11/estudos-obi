const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  console.log(`${values.length} valores positivos`);
  let soma = 0;
  for (let item of values) { soma += item }
  console.log((soma / values.length).toFixed(1));
}

let values = [];
let count = 0;

scanner.on('line', (line) => {
  if (count > 5) {
    run(values);
    scanner.close();
  } else {
    if (parseFloat(line) > 0) {
      values.push(parseFloat(line));
    }
  }
  count++;
});


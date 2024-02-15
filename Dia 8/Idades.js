const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  let sum = 0;
  for (let item of values) {
    sum += item;
  }

  console.log((sum / values.length).toFixed(2));
}

let values = [];

scanner.on('line', (input) => {
  if (parseFloat(input) < 0) {
    run(values);
    scanner.close();
  } else {
    values.push(parseFloat(input));
  }
});
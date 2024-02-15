const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  let pesos = [2, 3, 5];
  for (let array of values) {
    let media = (((array[0] * pesos[0]) + (array[1] * pesos[1]) + (array[2] * pesos[2])) / (pesos[0] + pesos[1] + pesos[2]));
    console.log(media.toFixed(1));
  }
}

let values = [];
let count = -1;

scanner.on('line', (input) => {
  values.push(input.split(' ').map(parseFloat));
  count++;

  if (count == values[0]) {
    values.shift();
    run(values);
    scanner.close();
  }
});
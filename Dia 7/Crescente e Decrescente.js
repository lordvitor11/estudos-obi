const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  for (let array of values) {
    if (array[0] > array[1]) {
      console.log('Decrescente');
    } else if (array[0] < array[1]) {
      console.log('Crescente');
    }
  }
}

let values = [];

scanner.on('line', (input) => {
  if (Number(input) === 0) {
    run(values);
    scanner.close();
  }

  values.push(input.split(' ').map(parseFloat));
});
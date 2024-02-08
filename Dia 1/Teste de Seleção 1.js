const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  if (values[1] > values[2] && values[3] > values[0] && (values[2] + values[3]) > (values[0] + values[1]) && values[2] > 0 && values[3] > 0 && values[0] % 2 === 0) {
    console.log('Valores aceitos');
  } else {
    console.log('Valores nao aceitos');
  }
}

scanner.question('', (input) => {
  let values = input.split(' ').map((value) => parseInt(value));
  run(values);
  scanner.close();
});
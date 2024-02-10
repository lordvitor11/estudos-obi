const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(x, y) {
  if (x > 0 && y > 0) {
    console.log('Q1');
  } else if (x > 0 && y < 0) {
    console.log('Q4');
  } else if (x < 0 && y > 0) {
    console.log('Q2');
  } else if (x < 0 && y < 0) {
    console.log('Q3');
  } else if (x !== 0 && y === 0) {
    console.log('Eixo X');
  } else if (x === 0 && y !== 0) {
    console.log('Eixo Y');
  } else {
    console.log('Origem');
  }
}

scanner.question('', (input) => {
  const [ x, y ] = input.split(' ').map(parseFloat);
  run(x, y);
  scanner.close();
});
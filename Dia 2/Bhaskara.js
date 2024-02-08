const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(a, b, c) {
  if (a === 0) {
    console.log('Impossivel calcular');
  } else {
    let delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        console.log('Impossivel calcular');
    } else {
        let x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(5);
        let x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(5);
        console.log(`R1 = ${x1}`);
        console.log(`R2 = ${x2}`);
    }
  }
} 

scanner.question('', (input) => {
  let values = input.split(' ').map(parseFloat);
  run(values[0], values[1], values[2]);
  scanner.close()
});
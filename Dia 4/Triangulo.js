const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    let perimetro = a + b + c;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
  } else {
    let area = ((a + b) * c) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
  }
}

scanner.question('', (input) => {
  const [ a, b, c ] = input.split(' ').map(parseFloat);
  run(a, b, c);
  scanner.close();
})
const readline = require('readline');

const scanner = readline.createInterface(
  process.stdin,
  process.stdout
);

function run(numeros) {
  let count = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) { count++; }
  }

  console.log(`${count} valores positivos`);
}

let array = [];

scanner.on('line', (linha) => {
  array.push(parseFloat(linha));

  if (array.length === 6) {
    scanner.close()
  }
});

scanner.on('close', () => {
  run(array);
});
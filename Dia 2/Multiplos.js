const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(multiplo, resultado) {
  if (resultado % multiplo === 0 || multiplo % resultado === 0) {
    console.log('Sao Multiplos');
  } else {
    console.log('Nao sao Multiplos');
  }
}

scanner.question('', (input) => { 
  const [ multiplo, resultado ] = input.split(' ').map(parseFloat);
  run(multiplo, resultado);
  scanner.close()
});
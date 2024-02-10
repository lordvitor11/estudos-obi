const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  let positivos = 0
  let pares = 0;
  let zero = 0;

  for (let item of values) {
    if (item > 0) {
      positivos++
    } else if (item === 0) {
      zero++
    }
    
    if (item % 2 === 0) {
      pares++
    }
  }

  let negativos = values.length - positivos - zero;
  let impares = values.length - pares;

  console.log(`${pares} valor(es) par(es)`);
  console.log(`${impares} valor(es) impar(es)`);
  console.log(`${positivos} valor(es) positivo(s)`);
  console.log(`${negativos} valor(es) negativo(s)`);
}

let values = [];
let count = 0;

scanner.on('line', (line) => {
  if (count > 4) {
    run(values);
    scanner.close();
  } else {
    values.push(parseFloat(line));
  }
  count++;
});


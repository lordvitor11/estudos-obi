const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(salario) {
  let percentual = [
    [0, 400.00, 15],
    [400.01, 800.00, 12],
    [800.01, 1200.00, 10],
    [1200.01, 2000.00, 7]
  ]

  if (salario > 2000) {
    let aumento = salario * 4 / 100;
    let novoSalario = salario + aumento;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
    console.log(`Em percentual: 4%`);
  } else {
    for (let item of percentual) {
      if (salario >= item[0] && salario <= item[1]) {
        let aumento = (salario * item[2] / 100);
        let novoSalario = (salario + aumento);
        console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
        console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
        console.log(`Em percentual: ${item[2]}%`);
      }
    }
  }
}

scanner.question('', (input) => { 
  const salario = parseFloat(input);
  run(salario);
  scanner.close()
});
const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(inicio, fim) {
  let horas = 0;
  if (inicio == fim) {
    console.log('O JOGO DUROU 24 HORA(S)');
  } else {
    if (inicio > fim) { fim += 24};

    for (let i = inicio; i < fim; i++) {
      horas += 1;
    }
    console.log(`O JOGO DUROU ${horas} HORA(S)`);
  }
}

scanner.question('', (input) => { 
  const [ inicio, fim ] = input.split(' ').map(Number);
  run(inicio, fim);
  scanner.close()
});
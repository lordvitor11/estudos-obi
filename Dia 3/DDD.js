const readline = require('readline');

const scanner = readline.createInterface(
  process.stdin,
  process.stdout
);

function run(ddd) {
  const ddds = {
    '61': 'Brasilia',
    '71': 'Salvador',
    '11': 'Sao Paulo',
    '21': 'Rio de Janeiro',
    '32': 'Juiz de Fora',
    '19': 'Campinas',
    '27': 'Vitoria',
    '31': 'Belo Horizonte',
    '17': 'Manaus'
  }

  if (ddd in ddds) {
    console.log(ddds[ddd]);
  } else {
    console.log('DDD nao cadastrado');
  }
}

scanner.question('', (input) => {
  run(input);
  scanner.close();
})
const readline = require('readline');

const scanner = readline.createInterface(
  input = process.stdin,
  outout = process.stdout
);

function run(renda) {
  let tempValor = renda;
  let total = 0;

  if (tempValor >= 2000) {
    tempValor -= 2000;
    if (tempValor >= 1000) {
      tempValor -= 1000;
      total += 1000 * 8 / 100;
  
      if (tempValor >= 1500) {
        tempValor -= 1500;
        total += 1500 * 18 / 100;
  
        if (tempValor > 0) {
          total += tempValor * 28 / 100;
        }
      } else {
        total += tempValor * 18 / 100;
      }
    } else {
      total = tempValor * 8 / 100;
    }
  
    console.log(`R$ ${total.toFixed(2)}`);
  } else {
    console.log('Isento');
  }
}

scanner.question('', (input) => {
  const renda = parseFloat(input);
  run(renda);
  scanner.close();
});
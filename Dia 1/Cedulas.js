const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function count(dinheiro) {
  let cedulas = {};
  let tempDinheiro = dinheiro;
  let values = ['100', '50', '20', '10', '5', '2', '1'];

  values.forEach(function(item) {
    if (tempDinheiro >= parseFloat(item)) {
      cedulas[item] = parseInt(tempDinheiro / parseFloat(item));
      tempDinheiro -= cedulas[item] * parseFloat(item);
    } else {
      cedulas[item] = 0;
    }

    console.log(`${cedulas[item]} nota(s) de R$ ${item},00`)
  });
}

scanner.question('', (input) => {
  console.log(input)
  count(parseFloat(input));
  scanner.close();
});
const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cash(dinheiro) {
  let tempDinheiro = dinheiro;
  let result = {};
  let values = ['100', '50', '20', '10', '5', '2', '1',  '0.50', '0.25', '0.10', '0.05', '0.01'];
  console.log('NOTAS:');

  values.forEach((element, index)=> {
    if (parseFloat(tempDinheiro).toFixed(2) >= parseFloat(element)) {
      let quantidade = parseInt(tempDinheiro / parseFloat(element));
      result[element] = quantidade;
      tempDinheiro = (tempDinheiro - quantidade * parseFloat(element)).toFixed(2);
    } else {
      result[element] = 0;
    }

    if (index == 6) { console.log('MOEDAS:'); }

    if (index >= 6) { 
      console.log(`${result[element]} moeda(s) de R$ ${element}${parseFloat(element) == 1.0 ? '.00' : ''}`);
    } else {
      console.log(`${result[element]} nota(s) de R$ ${element}.00`);
    }
  });
}

scanner.question('', (input) => {
  cash(parseFloat(input))
  scanner.close();
});
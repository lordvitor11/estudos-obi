const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(codigo, quantidade) {
  const itens = {
    '1': [ 'Cachorro Quente', 4.00 ],
    '2': [ 'X-Salada', 4.50 ],
    '3': [ 'X-Bacon', 5.00 ],
    '4': [ 'Torrada simples', 2.00 ],
    '5': [ 'Refrigerante', 1.50 ]
  }
  const result = itens[codigo][1] * parseInt(quantidade);
  console.log(`Total: R$ ${result}${Number.isInteger(result) ? '.00' : '0'}`);
}

scanner.question('', (input) => {
  const [ codigo, quantidade ] = input.split(' ').map((valor) => valor);
  run(codigo, quantidade);
  scanner.close()
});
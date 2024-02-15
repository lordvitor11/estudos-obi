const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  for (let array of values) {
    if (array[0] > 0 && array[1] > 0) { console.log('primeiro'); } 
    else {
      if (array[0] < 0 && array[1] > 0) { console.log('segundo'); }
      else { 
        if (array[0] < 0 && array[1] < 0) { console.log('terceiro'); }
        else {
          if (array[0] > 0 && array[1] < 0) { console.log('quarto'); }
        }
      }
    }
  }
}

let values = [];

scanner.on('line', (input) => {
  if (input.includes('0')) {
    run(values);
    scanner.close();
  } else {
    values.push(input.split(' ').map(parseFloat));
  }
});
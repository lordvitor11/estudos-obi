const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  for (let item of values) {
    if (item === 0) {
      console.log('NULL');
    } else if (item > 0) {
      if (item % 2 === 0) {
        console.log('EVEN POSITIVE')
      } else {
        console.log('ODD POSITIVE')
      }
    } else {
      if (item % 2 === 0) {
        console.log('EVEN NEGATIVE')
      } else {
        console.log('ODD NEGATIVE')
      }
    }
  }
}

let values = [];
let count = -1;

scanner.on('line', (input) => {
  values.push(parseFloat(input));
  count++;

  if (count == values[0]) {
    values.shift()
    run(values);
    scanner.close();
  }
});

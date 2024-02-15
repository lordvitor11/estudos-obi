const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(value) {
  let string = '';
  for (let c = 0; c < value; c++) {
    if (c == value - 1) {
      string += 'Ho!';
    } else {
      string += 'Ho ';
    }
  }

  console.log(string);
}

scanner.question('', (input) => {
  run(parseFloat(input));
  scanner.close();
});
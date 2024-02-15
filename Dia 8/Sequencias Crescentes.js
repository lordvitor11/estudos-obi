const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  let temp = [];
  for (let value of values) {
    for (let c = 1; c < value + 1; c++) {
      temp.push(c);
    }

    let string = "";
    for (let c = 0; c < temp.length; c++) {
      if (c === 0) {
        string += temp[c];
      } else if (c > 0 && c < temp.length) {
        string += " " + temp[c];
      } else {
        string += temp[c]
      }
    }

    console.log(string);
    temp = [];
  }
}

let values = [];

scanner.on('line', (input) => {
  if (parseFloat(input) === 0) {
    run(values);
    scanner.close();
  } else {
    values.push(parseFloat(input));
  }
});
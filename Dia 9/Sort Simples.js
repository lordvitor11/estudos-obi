const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(values) {
  let a = values[0];
  let b = values[1];
  let c = values[2];

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;

    if (b > c) {
      let temp = b;
      b = c;
      c = temp;
    }
  } else {
    if (a > c) {
      let temp = a;
      a = c;
      c = b;
      b = temp;
    } else if (b > c) {
      let temp = b;
      b = c;
      c = temp;
    }
  }
  
  console.log(a);
  console.log(b);
  console.log(c);
  console.log('');
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
}

scanner.question('', (input) => {
  run(input.split(' ').map(parseFloat));
  scanner.close();
});
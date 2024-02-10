const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(a, b, c) {
  let temp;
  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }

  if (b < c) {
    temp = b;
    b = c;
    c = temp;
  }

  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }
  
  if(a >= (b + c)) {
    console.log("NAO FORMA TRIANGULO");
  } else if (a * a == (b * b + c * c)) {
    console.log("TRIANGULO RETANGULO");
  } else if (a * a > (b * b + c * c)) {
    console.log("TRIANGULO OBTUSANGULO");
  } else if(a * a < (b * b + c * c)) {
    console.log("TRIANGULO ACUTANGULO");
  }
  
  if (a == b && b == c) {
    console.log("TRIANGULO EQUILATERO");
  } else if (a == b || b == c) {
    console.log("TRIANGULO ISOSCELES");
  }
}

scanner.question('', (input) => {
  const [ value0, value1, value2 ] = input.split(' ').map(parseFloat);
 
  run(value0, value1, value2);
  scanner.close();
});
const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(a, b, c) {
  const animais = {
    'vertebrado': {
      'ave': {
        'carnivoro': 'aguia',
        'onivoro': 'pomba'
      },
      'mamifero': {
        'onivoro': 'homem',
        'herbivoro': 'vaca'
      }
    },
    'invertebrado': {
      'inseto': {
        'hematofago': 'pulga',
        'herbivoro': 'lagarta'
      },
      'anelideo': {
        'hematofago':'sanguessuga',
        'onivoro':'minhoca'
      }
    }
  }

  console.log(animais[a][b][c]);
}

let values = [];

scanner.on('line', (line) => {
  if (values.length > 2) {
    run(values[0], values[1], values[2]);
    scanner.close();
  } else {
    values.push(line);
  }
});


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function run(x1, y1, x2, y2) {
  let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  console.log(distancia.toFixed(4));
}

rl.question('Digite os valores de x1, y1: ', (xy1) => {
  rl.question('Digite os valores de x2, y2: ', (xy2) => {
    let [x1, y1] = xy1.split(' ').map(parseFloat);
    let [x2, y2] = xy2.split(' ').map(parseFloat);

    run(x1, y1, x2, y2);
    rl.close();
  });
});
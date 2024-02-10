const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function run(inicioH,  inicioM, fimH, fimM) {
  dif = ((fimH * 60) + fimM) - ((inicioH * 60) + inicioM);
  if (dif <= 0) {
    dif += 24 * 60;
  }
    
  time = Math.floor(dif / 60);
  minute = dif % 60;
  console.log(`O JOGO DUROU ${time} HORA(S) E ${minute} MINUTO(S)`);
}

scanner.question('', (input) => {
  const [ iH, iM, fH, fM ] = input.split(' ').map(Number);
  run(iH, iM, fH, fM);
  scanner.close();
});
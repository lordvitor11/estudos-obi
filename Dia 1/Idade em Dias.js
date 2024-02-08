const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const string = (dias, chave) => {
  if (chave == 365) {
    return `${parseInt(dias / chave)} ano(s)`;
  } else if (chave == 30) {
    return `${parseInt(dias / chave)} mes(es)`;
  } else {
    return `${dias} dia(s)`;
  }
}

function days(dias) {
  let tmpDias = dias;
  if (tmpDias >= 365) { console.log(string(tmpDias, 365, true)); tmpDias -= parseInt(tmpDias / 365) * 365 } else { console.log(string(0, 365, false)); }
  if (tmpDias >= 30) { console.log(string(tmpDias, 30, true)); tmpDias -= parseInt(tmpDias / 30) * 30 } else { console.log(string(0, 30, false)); }
  if (tmpDias >= 1) { console.log(string(tmpDias, 1, true)); } else { console.log(string(0, 1, false)); }
}

scanner.question('', (input) => {
  days(parseInt(input));
  scanner.close();
});
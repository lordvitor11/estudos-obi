let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

function calc(tempo, vel) {
  return (vel / 12 * tempo).toFixed(3);
}

console.log(`${calc(parseFloat(lines[0]), parseFloat(lines[1]))}`);
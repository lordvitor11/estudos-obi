var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const consumo = (x, y) => (x / y).toFixed(3);

console.log(`${consumo(lines[0], lines[1])} km/l`);
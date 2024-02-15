const readline = require('readline');

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

scanner.on('line', (input) => { 
  if (input == 'EOF') {
    scanner.close();
  } else {
    if (parseFloat(input) === 0) {
      console.log('vai ter copa!');
    } else {
      console.log('vai ter duas!');
    }
  }
});
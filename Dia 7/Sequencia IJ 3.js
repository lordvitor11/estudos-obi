let i = 1;
let j = 7;
let count = 0;
console.log(`I=${i} J=${j}`);

while (i != 9 || j != 13) {
  count++;
  j--;
  if (count == 3) {
    i += 2;
    j += 5;
    count = 0;
  }

  console.log(`I=${i} J=${j}`);
}
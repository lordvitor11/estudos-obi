let i = 0;
let j = 1;
let count = 0;

while (i <= 2) {
  if (i > 0 && i < 1 || i > 1 && i < 1.9) {
    console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`);
  } else if (i >= 1.9){
    console.log(`I=${Math.round(i)} J=${j.toFixed(0)}`);
  } else {
    console.log(`I=${i} J=${j.toFixed(0)}`);
  }

  count++;
  j++;
  if (count == 3) {
    i += 0.2;
    j -= 2.8;
    count = 0;
  }
}
function forLoop(list) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      list.push(`I am 1 strange loop.`);
    } else {
      list.push(`I am ${i} strange loop.`);
    }
  }
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }

  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(list) {
  do {
    list.pop();
  } while (array.length > 0 && maybeTrue());
  return list;
}

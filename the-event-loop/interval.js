let currentCount = 3;

const intervalValue = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalValue);
  } else {
    console.log(currentCount);
  }
  currentCount--;
  // clearInterval(intervalValue);
}, 1000);

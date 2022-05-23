let coins = [5, 7, 1, 1, 2, 3, 22]
console.log(coins)

const nonConstructibleChange = (coins) => {
    coins.sort((a, b) => a - b);
    let sum = 0;
    let minSum = 0;
    let penultimate = 0;
    let last = 0;
  
    for (let i = 0; i < coins.length; i++) {
      sum += coins[i];
      if (i === coins.length - 2) {
        penultimate = sum;
      }
      if (i === coins.length - 1) {
        last = sum;
      }
    }
  
    if (penultimate + 1 < last) {
      minSum = penultimate + 1;
    } else {
      minSum = last + 1;
    }
  
    return minSum;
  }
  
  const test1 = [5, 7, 1, 1, 2, 3, 22];
  console.log(nonConstructibleChange(test1));
  
  const test2 = [1, 1, 1, 1, 1];
  console.log(nonConstructibleChange(test2));
  
  const test3 = [1, 5, 1, 1, 1, 10, 15, 20, 100];
  console.log(nonConstructibleChange(test3));
  
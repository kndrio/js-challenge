const sortedSquaredArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
  array.sort((a, b) => a - b);
  return array;
}

//teste 1
let testArray1 = [1, 2, 3, 5, 6, 8, 9]
console.log(sortedSquaredArray(testArray1))
//[1, 4, 9, 25, 36, 64, 81]

//teste2
testArray2 = [-2, -1]
console.log(sortedSquaredArray(testArray2))
// [1, 4]

//teste3
testArray3 = [-10, -5, 0, 5, 10]
console.log(sortedSquaredArray(testArray3))
// [0, 25, 25, 100, 100]
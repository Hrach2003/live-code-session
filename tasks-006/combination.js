function subset(array, arraySize) {
  let resultSet = [];

  for (let x = 0; x < Math.pow(2, array.length); x++) {
    let result = [];
    let i = array.length - 1;
    while (i--) {
      if ((x & (1 << i)) !== 0) {
        result.push(array[i]);
      }
    }
    if (result.length === arraySize) {
      resultSet.push(result);
    }
  }

  return resultSet;
}

let arr = [5, 9, 23, 0, -2, -1];
const res = subset(arr, 3);
console.log(res.length, res);

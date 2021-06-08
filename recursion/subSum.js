let arr = [2, 3];
function subSum(numArray, index = 0, sum = 0) {
  if (index > numArray.length - 1) {
    console.log(sum);
    return;
  }
  subSum(numArray, index + 1, sum);
  subSum(numArray, index + 1, sum + numArray[index]);
}

subSum(arr);

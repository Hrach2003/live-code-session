// // 13456233333
// let accumulator = arr.reduce(function (acc, el, index, arr) {
//   acc += el;
//   console.log(acc);
//   return acc;
// }, "");

// let arr = [1, 3, 4, 5, 62, 33, 33]; // [[0, 1], [1, 3], [2, 4] ...]
// function cb(el, index, arr) {
//   return [index, el];
// }
// // const mappedArray = arr.map(cb);

function myMap(arr, callBack) {
  let mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const result = callBack(element, i, arr);
    mapped.push(result);
  }
  return mapped;
}

// const mappedArray = myMap(arr, cb);

// console.log(mappedArray);
("use strict");

function varCheck() {
  r = 8;
}
varCheck();
console.log(r);

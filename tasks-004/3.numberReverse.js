let num = -1223423;
let sign = num > 0 ? 1 : -1;
num = Math.abs(num);

let lastDigit = num % 10;
let len = num.toString().length - 1;
let firstToAdd = lastDigit * 10 ** len;
let result = sign * (firstToAdd + (num - lastDigit) / 10);
console.log(result);

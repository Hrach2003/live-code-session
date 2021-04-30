let num = 2456;
let numToFind = 5;

let isThere = false;
while (num) {
  let lastDigit = num % 10;
  if (lastDigit === numToFind) {
    isThere = true;
    break;
  }
  num = (num - lastDigit) / 10;
}

console.log(isThere);

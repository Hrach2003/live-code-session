let distanses = [21, -9, 15, 2116, -70, 33];
let num = -71;

let closestDistanseInfo = [Infinity, 0]; // [0] - distanse [1] - index
for (let i = 0; i < distanses.length; i++) {
  const element = distanses[i];
  if (element === num) {
    console.log(element, i);
    break;
  }
  let distanse = Math.abs(num - element);
  if (distanse < closestDistanseInfo[0]) {
    closestDistanseInfo[1] = i;
    closestDistanseInfo[0] = distanse;
  }
}

console.log(closestDistanseInfo);

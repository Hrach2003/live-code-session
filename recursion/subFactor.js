function subFactor(number, first = 2, eachProd = 1, dividers = []) {
  if (first > number || eachProd > number) return;
  if (eachProd === number) return console.log(...dividers);

  for (let f = first; f < number; f++) {
    if (number % f === 0) {
      dividers.push(f);
      subFactor(number, f, eachProd * f, dividers);
      dividers.pop();
    }
  }
}
let number = 16;

subFactor(number);

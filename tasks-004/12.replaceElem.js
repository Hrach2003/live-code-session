let inputStr = "_, we have a _.";
let index = 0;
let inputArr = ["Houston", "problem"];
let newStr = "";
for (let i of inputStr) {
  if (i === "_") {
    i = inputArr[index];
    index += 1;
  }
  newStr += i;
}
console.log(newStr);

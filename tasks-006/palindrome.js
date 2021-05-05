let word = "listen";
let wordList = ["enlists", "google", "lnlets", "banana"];

/*function constructWord(word, wordList) {
  /*let constructList = [];
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length !== word.length) continue;
    let canConstruct = true;
    for (let j = 0; j < wordList[i].length; j++) {
      const str = wordList[i][j];
      if (!word.includes(str)) {
        canConstruct = false;
        break;
      }
    }
    if (canConstruct) {
      constructList.push(wordList[i]);
    }
  }
  return constructList;
}
console.log(constructWord(word, wordList)); */
function select(str, arr) {
  let array = [];
  let charArr = str.split("");
  for (let item of arr) {
    let counter = 0;
    if (item.length === charArr.lenght) {
      for (let i = 0; i < item.length; i++) {
        if (item.incudes(charArr[i])) {
          counter++;

          if (counter === item.length) {
            array.push(item);
          }
        }
      }
    }
  }
  return array;
}

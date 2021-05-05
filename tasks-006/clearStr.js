let sentence = "This is some text.";
let wordToReplace = "is";

sentence = sentence.split(" ");
let result = "";
for (let i = 0; i < sentence.length; i++) {
  let word = sentence[i];
  if (word.includes(wordToReplace)) {
    let startPoint = word.indexOf(wordToReplace);
    let endPoint = startPoint + wordToReplace.length;
    word = word.slice(0, startPoint) + word.slice(endPoint);
  }
  result += word + " ";
}

console.log(result);

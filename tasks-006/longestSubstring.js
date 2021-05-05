// @ts-check
let string =
  "there are no two words in the english language more harmful than 'good job'.";

/**
 * @param {string} str
 * @returns {string}
 */
function subString(str) {
  let seenChar = {};
  let startIndex = 0;
  let endIndex = 0;
  let length = endIndex - startIndex;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char in seenChar && char !== " ") {
      let newLength = endIndex - startIndex;
      if (length < newLength) {
        endIndex = i;
        length = newLength;
        startIndex = seenChar[char] + 1;
        seenChar = {};
      }
    }
    if (char !== " ") seenChar[char] = i;
    endIndex++;
  }
  return str.substring(startIndex, endIndex);
}

console.log(subString(string));

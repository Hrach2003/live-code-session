// @ts-check
/**
 * @param {string} str
 * @returns {string}
 */
function subString(str) {
  let seenChar = {};

  // tracking current substring indexes
  let startIndex = 0;
  let endIndex = 0;

  // keeping largest range
  let max = [startIndex, endIndex];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if char is space passing it
    if (char === " ") {
      endIndex++;
      continue;
    }

    if (!(char in seenChar)) {
      endIndex++;
      seenChar[char] = i;
      continue;
    }

    // if we find larger range update max
    if (endIndex - startIndex > max[1] - max[0]) {
      max[0] = startIndex;
      max[1] = endIndex;
    }
    // set the loop to continue from seenChar[char] + 1
    startIndex = seenChar[char] + 1;
    endIndex = i = startIndex;
    seenChar = {};
  }
  // cutting from start index to end index
  return str.substring(max[0], max[1]);
}

let string = "ABDEFGABEF";

console.log(subString(string));

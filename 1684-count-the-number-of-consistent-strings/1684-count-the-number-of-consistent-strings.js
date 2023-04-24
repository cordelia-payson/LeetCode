/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let count = 0;
  
  let letters = {};
  
  for (let i = 0; i < allowed.length; i++) {
    letters[allowed[i]] = allowed[i];
  }
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let consistent = true;
    for (let j = 0; j < word.length; j++) {
      if (!letters[word[j]]) {
        consistent = false;
        j = word.length;
      }
    }
    if (consistent === true) count++;
  }
  return count;
};
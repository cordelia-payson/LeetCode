/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  let words = s.split(" ");
  
  if (words.length === k) return s;
  
  words.splice(k);
  
  return words.join(" ");
};
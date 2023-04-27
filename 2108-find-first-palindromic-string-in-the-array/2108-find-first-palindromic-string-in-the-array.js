/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) { 
  for (let i = 0; i < words.length; i++) {
    let start = 0;
    let end = words[i].length - 1;
    let palindrome = true;
    while (start <= end && end >= start && palindrome) {
      if (words[i][start] === words[i][end]) {
        start++;
        end--;
      } else {
        palindrome = false;
      }
    }
    if (palindrome) return words[i];
  }
  
  return "";
};
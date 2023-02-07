/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  
  var letters = {};
  
  for (var i = 0; i < s.length; i++) {
    let currLetter = s[i];
    if (!letters[currLetter]) {
      letters[currLetter] = 1;
    } else {
      letters[currLetter]++;
    }
  }
  
  let evenNums = 0;
  let oddNums = 0;
  
  for (var letter in letters) {
    let num = letters[letter];
    if (num % 2 === 0) {
      evenNums += num;
    }
    if (num % 2 === 1) {
      oddNums++;
      evenNums += (num - 1);
    }
  }
  
  if (oddNums > 0) {
    return evenNums + 1;
  }
   
  return evenNums;
};
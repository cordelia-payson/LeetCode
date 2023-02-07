/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  
  if (ransomNote.length > magazine.length) {
    return false;
  }
  
  var letters = {};
  
  for (var i = 0; i < magazine.length; i++) {
    let letter = magazine[i];
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter]++;
    }
  }
  
  for (var i = 0; i < ransomNote.length; i++) {
    let ransomLetter = ransomNote[i];
    if (!letters[ransomLetter] || letters[ransomLetter] === 0) {
      return false;
    } else {
      letters[ransomLetter] = letters[ransomLetter] - 1;
    }
  }
  
  return true;
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
  if (s.length === 0 || s.length === 1) return s.length;
  
  let longest = 0;
  
  for (var i = 0; i < s.length; i++) {
    let word = s[i];
    let index = i + 1;
    while (index < s.length) {
      if (word.indexOf(s[index]) === -1) {
        word+= s[index];
        index++;
      } else {
        index = s.length;
      }
    }
    longest = Math.max(word.length, longest);
  }
  return longest;
};
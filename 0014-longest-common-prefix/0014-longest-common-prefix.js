/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  if (strs.length === 1) return strs[0];
  
  let prefix = '';
  let letter = '';
  let index = 0;
  let max = strs[0].length;
  
  while (index < max) {
    for (var i = 0; i < strs.length; i++) {
      if (i === 0) {
        letter = strs[0][index]
      } else if (strs[i][index] !== letter) {
        return prefix;
      }
    }
    prefix += letter;
    index++;
  }
  return prefix;
};
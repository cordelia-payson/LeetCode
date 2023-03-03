/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1;
  
  let nLength = needle.length;
  let hLength = haystack.length;
  
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let hIndex = i + 1;
      let nIndex = 1;
      let count = 1;
    
      while (hIndex < hLength && nIndex < nLength && haystack[hIndex] === needle[nIndex]) {
        count++;
        nIndex++;
        hIndex++;
      }
      if (count === nLength) {
        return i;
      }
    }
  }
  
  return -1;
};
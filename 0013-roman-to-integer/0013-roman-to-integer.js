/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  let result = 0;
  
  let i = 0;
  while (i < s.length) {
    let curr = nums[s[i]];
    let next = nums[s[i + 1]];
    if (curr < next) {
      result += next - curr;
      i += 2;
    } else {
      result += curr;
      i++;
    }
  }
  return result;
};
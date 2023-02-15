/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  
  let string = n.toString(2);
  
  let count = 0;
  
  for (var i = 0; i < string.length; i++) {
    let num = Number(string[i]);
    if (num === 1) {
      count++;
    }
  }
  return count;
};
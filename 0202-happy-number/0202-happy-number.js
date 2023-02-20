/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  
  if (n === 1 || n === 7) return true;
  
  if (n < 10) return false;
  
  let num = n;
  let total = 0;
  
  while (num > 0) {
    let remainder = num % 10;
    total += remainder*remainder;
    num = num - remainder;
    num = num / 10;
  }
  return isHappy(total);
};
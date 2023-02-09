/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let currNum = num;
  let count = 0;
  
  while (currNum > 0) {
    if (currNum % 2 === 0) {
      currNum = currNum / 2;
      count++;
    }
    if (currNum % 2 === 1) {
      currNum = currNum - 1;
      count++;
    }
  }
  return count;
};
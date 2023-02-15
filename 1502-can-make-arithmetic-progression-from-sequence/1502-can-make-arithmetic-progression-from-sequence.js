/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  
  let nums = arr.sort((a,b) => a - b);
  
  let diff = nums[1] - nums[0];
  
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== diff) return false;
  }
  return true;
};
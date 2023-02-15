/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let total = 1;
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    if (nums[i] < 0) total *= -1;
  }
  
  return total;
};
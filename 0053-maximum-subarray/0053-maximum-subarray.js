/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  if (nums.length === 1) {
    return nums[0];
  }
  
  let highest = -Infinity;
  
  let currentSum = 0;
  
  for (var i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > highest) highest = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return highest;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (nums.length === 1) {
    return 0;
  }
  
  var left = 0;
  var right = 0;
  
  for (var i = 0; i < nums.length; i++) {
    right += nums[i];
  }
  
  for (var i = 0; i < nums.length; i++) {
    var currentIndex = nums[i];
    if (i > 0) {
      left += nums[i - 1];
    }
    right -= nums[i];
    if (right === left) {
      return i;
    }
  }
  
  return -1;
};
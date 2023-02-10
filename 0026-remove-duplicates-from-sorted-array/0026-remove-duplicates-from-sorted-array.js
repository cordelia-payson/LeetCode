/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 1) {
    return nums;
  }
  
  for (var i = 0; i < nums.length; i++) {
    let index = i + 1;
    while (nums[index] === nums[i]) {
      nums.splice(index, 1);
    }
  }
  
  return nums.length;
};
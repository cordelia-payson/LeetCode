/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let sorted = [...new Set(nums)];
  
  if (sorted.length === nums.length) {
    return false;
  } else {
    return true;
  }
};
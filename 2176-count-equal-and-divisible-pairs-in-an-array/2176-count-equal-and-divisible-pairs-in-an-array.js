/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  let count = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let remainder = (i * j) % k;
      if (nums[i] === nums[j] && remainder === 0) {
        count++;
      }
    }
  }
  
  return count;
};
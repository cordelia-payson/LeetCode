/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  if (nums.length === 1) return 0;
  
  let result = 0;
  
  nums.sort((a,b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[nums.length - 1]) return result;
    
    let j = nums[i] + k;
    
    let index = nums.indexOf(j);
    while (nums[index] === j) {
      result++;
      index++;
    }
  }
  
  return result;
};
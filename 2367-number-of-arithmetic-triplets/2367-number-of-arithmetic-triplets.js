/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  let count = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
    let j = nums[i] + diff;
    let k = j + diff;
    if (nums.includes(j) && nums.includes(k)) count++;
  }
  return count;
};
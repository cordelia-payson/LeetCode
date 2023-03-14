/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let results = [];
  
  for (let i = 0; i < nums.length; i++) {
    results.push(nums[i] ** 2);
  }
  
  results.sort((a,b) => a - b);
  
  return results;
};
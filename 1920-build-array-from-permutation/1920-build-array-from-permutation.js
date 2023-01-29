/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  var result = [];
  
  for (var i = 0; i < nums.length; i++) {
   result.push(nums[nums[i]]);
  }
  
  return result;
};
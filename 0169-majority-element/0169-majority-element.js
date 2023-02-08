/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  
  nums.sort((a,b) => a - b);
  
  var n = nums.length;
  var majority = n / 2;
  var num = nums[0];
  var count = 0;
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === num) {
      count++;
    } else if (count > majority) {
      return num;
    } else {
      num = nums[i];
      count = 1;
    }
  }
  return num;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var results = [];
    var previousIndex = -1;
    for (var i = 0; i < nums.length; i++) {
      if (previousIndex === -1) {
        results.push(nums[i]);
        previousIndex++;
      } else {
        results.push(nums[i] + results[previousIndex]);
        previousIndex++;
      }
    }
    return results;
};
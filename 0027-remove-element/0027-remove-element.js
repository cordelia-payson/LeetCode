/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  
  if (nums.length === 0) {
    return 0;
  }
  
  for (var i = -1; i < nums.length; i++) {
    let index = i + 1;
    while (nums[index] === val) {
      nums.splice(index, 1);
    }
   }
  return nums.length;
};


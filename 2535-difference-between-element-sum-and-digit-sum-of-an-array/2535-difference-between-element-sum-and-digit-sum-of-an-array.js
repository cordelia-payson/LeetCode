/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let element = 0;
  let digit = 0;
  
  for (let i = 0; i < nums.length; i++) {
    element += nums[i];
    if (nums[i] < 10) {
      digit += nums[i];
    } else {
      let current = nums[i];
      while (current > 9) {
        let remainder = current % 10;
        digit += remainder;
        current -= remainder;
        current /= 10;
      }
      digit += current;
    }
  }
  
  return Math.abs(element - digit);
};
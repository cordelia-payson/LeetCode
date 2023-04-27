/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  let answer = [];
  
  for (let i = 0; i < nums.length; i++) {
    let current = [];
    while (nums[i] > 9) {
      let remainder = nums[i] % 10;
      current.unshift(remainder);
      nums[i] -= remainder;
      nums[i] /= 10;
    }
    current.unshift(nums[i]);
    answer = answer.concat(current);
  }
  
  return answer;
};
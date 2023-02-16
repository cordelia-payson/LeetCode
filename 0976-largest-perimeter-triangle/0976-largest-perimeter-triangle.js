/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  var getTriangle = function(a, b, c) {
    if (a + b > c & a + c > b & b + c > a) return true;
  };
  
  nums = nums.sort((a,b) => b - a);
  
  let index = 0;
  
  while (index < nums.length - 2) {
    let a = nums[index];
    let b = nums[index + 1];
    let c = nums[index + 2];
    if (getTriangle(a, b, c)) {
      return a + b + c;
    } else {
      index++;
    }
  }
  return 0;
};
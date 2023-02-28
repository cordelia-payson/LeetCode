/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let copy = [...nums];
  
  copy.sort((a,b) => a - b);
  
  let results = [];
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let result = copy.indexOf(num);
    results.push(result);
  }
  return results;
};
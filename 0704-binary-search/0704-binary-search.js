/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  
  if (target < nums[0] || target > nums[nums.length - 1]) {
    return -1;
  }
  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0;
    } else {
      return -1;
    }
  }

  let low = 0;
  let high = nums.length - 1;
  

 while (low <= high) {
   let middle = low + Math.floor((high - low) / 2)
   if (target === nums[middle]) {
     return middle;
   }
   if (target < nums[middle]) {
     high = middle - 1;
   } else {
     low = middle + 1;
   }
 }
  
  return -1;
 
};
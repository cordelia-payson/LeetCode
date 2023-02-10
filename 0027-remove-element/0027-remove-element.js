/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
 // two methods to compare speed and memory usage 
  
  if (nums.length === 0) {
    return 0;
  }
  
//   for (var i = -1; i < nums.length; i++) {
//     let index = i + 1;
//     while (nums[index] === val) {
//       nums.splice(index, 1);
//     }
//    }
//   return nums.length;
  
  
  nums.sort((a,b) => a - b);
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      let index = i + 1;
      let count = 1;
      while (nums[index] === val) {
        count++;
        index++;
      }
      nums.splice(i, count);
      return nums.length;
    }
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // var array for result
    
    // start looping through nums
      // i is current num
        // loop through nums starting at num + 1
          // add num at i and num at j
            // if target return [i,j]
    
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
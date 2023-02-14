/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  
  let nums = n.toString();
  
  let product = 1;
  let sum = 0;
  
  for (var i = 0; i < nums.length; i++) {
    let num = Number(nums[i]);
    product = product * num;
    sum+= num;
  }
  
  let result = product - sum;
  return result;
};
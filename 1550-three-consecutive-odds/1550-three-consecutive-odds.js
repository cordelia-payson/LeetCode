/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  if (arr.length < 3)  return false;
  
  let odds = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) odds++;
    if (arr[i] % 2 === 0) odds = 0;
    if (odds === 3) return true;
  }
  
  return false;
};
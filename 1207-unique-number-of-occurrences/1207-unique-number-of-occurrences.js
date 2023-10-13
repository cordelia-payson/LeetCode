/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) { 
  let occurr = [];
  
  arr.sort((a,b) => a - b);
  
  let currNum = arr[0];
  let count = 0;
  
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === currNum) {
      count++;
    } else {
      if (occurr.includes(count)) {
        return false;
      } else {
      currNum = arr[i];
      occurr.push(count);
      count = 1;
    } 
    } 
  }
  if(occurr.includes(count)) {
    return false;
  } else {
    return true;
  }
};
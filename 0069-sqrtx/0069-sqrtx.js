/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  
  if (x < 2) {
    return x;
  } 
  
  var midpoint = x / 2;
  var low = 0;
  
  if (midpoint * midpoint === x) {
    return midpoint;
  }
  
  for (var i = 1; i <= midpoint; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i > x) {
      return low;
    }
    if (i * i < x) {
      low = i;
    }
  }
  return low;
};
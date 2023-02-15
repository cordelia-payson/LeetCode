/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let index = -1;
  let dist = Number.MAX_VALUE;
  
  var distance = function(a, b) {
    return Math.abs(x - a) + Math.abs(y - b);
    return result;
  };
  
  for (var i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      let currDist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      if (currDist < dist) {
        index = i;
        dist = currDist;
      }
    }
  }
  return index;
};
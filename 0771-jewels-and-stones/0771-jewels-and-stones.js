/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let types = {};
  
  for (var i = 0; i < jewels.length; i++) {
    let jewel = jewels[i];
    types[jewels[i]] = 1;
  }
  
  let count = 0;
  
  for (var i = 0; i < stones.length; i++) {
    if (types[stones[i]]) {
      count++;
    }
  }
  return count;
};
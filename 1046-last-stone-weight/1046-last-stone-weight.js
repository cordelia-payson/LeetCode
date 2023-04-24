/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 1) return stones[0];
  
  while (stones.length > 1) {
    stones.sort((a,b) => b - a);
    let diff = stones[0] - stones[1];
    if (diff === 0) {
      stones.splice(0, 2);
    } else {
      stones.splice(0, 2, diff);
    }
  }
  
    return stones[0] || 0;
    
};
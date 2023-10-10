/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxWater = 0;
  let high = height.length - 1;
  let low = 0;
  
  while (high > low) {
    let width = high - low;
    let h = Math.min(height[low], height[high]);
    let volume = width * h;
    maxWater = Math.max(volume, maxWater);
    
    if (height[high] > height[low]) {
      low++;
    } else {
      high--;
    }
  }
  
  return maxWater;
};
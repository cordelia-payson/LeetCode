/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  if (groupSizes.length === 1) return [[0]];
  
  let result = [];
  
  for (let i = 0; i < groupSizes.length; i++) {
    let size = groupSizes[i];
    if (size > 0) {
      let currentGroup = [];
      currentGroup.push(i);
      groupSizes[i] = 0;
      while (currentGroup.length < size) {
        let next = groupSizes.indexOf(size);
        currentGroup.push(next);
        groupSizes[next] = 0;
      }
      result.push(currentGroup);
    }
  }
  
  return result;
};
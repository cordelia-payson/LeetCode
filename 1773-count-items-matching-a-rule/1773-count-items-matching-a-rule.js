/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let keys = {
    type: 0,
    color: 1,
    name: 2,
  };
  
  let count = 0;
  let key = keys[ruleKey];
  
  for (let i = 0; i < items.length; i++) {
    if (items[i][key] === ruleValue) count++;
  }
  return count;
};
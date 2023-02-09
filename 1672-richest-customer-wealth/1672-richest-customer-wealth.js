/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let wealth = 0;
  
  for (var i = 0; i < accounts.length; i++) {
    let currWealth = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      currWealth+= accounts[i][j];
    }
    if (currWealth > wealth) {
      wealth = currWealth;
    }
  }
  return wealth;
};
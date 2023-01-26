/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  if (prices.length === 0 || prices.length === 1) {
    return 0;
  }
    
  var lowest = prices[0];
  var profit = 0;
  
  for (var i = 1; i < prices.length; i++) {
    var currentPrice = prices[i];
    var currentProfit = currentPrice - lowest;
    if (currentProfit > profit) profit = currentProfit;
    if (currentPrice < lowest) lowest = currentPrice;
  }
  

  return profit;
};
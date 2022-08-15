// eslint-disable-next-line no-unused-vars
var maxProfit = function (prices) {
  var max = 0;
  var current = prices[0];
  for (var i = 1; i < prices.length; i++) {
    var profit = prices[i] - current;
    if (profit > max) max = profit;
    if (current > prices[i]) current = prices[i];
  }
  return max;
};

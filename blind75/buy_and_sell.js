/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {

  //Set the highest sell price (so far) to the last index in array
  let salePrice = prices[prices.length - 1];
  let profit = 0;

  //Loop from the end of array
  for (let i = prices.length - 1; i >= 0; i--) {
    
    //if the current index has a higher price than previously stored, set the new sale price
    if (prices[i] > salePrice) {
      salePrice = prices[i];
    }

    //if the profit is less than the highest sale price minus the current index, set it to the current margin to make it higher.
    if (profit < (salePrice - prices[i])) {
      profit = (salePrice - prices[i]);
    }
  }

  //returns 0 if there are no profitable stocks
  return profit;
};

console.log(maxProfit([7,8,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
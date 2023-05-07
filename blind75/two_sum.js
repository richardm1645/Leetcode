/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

Examples:
  
  Input: nums = [3,3], target = 6
  Output: [0,1]

  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

  //Saves values that are not the needed values in an object
  const previousValues = {};

  for (let i = 0; i < nums.length; i++) {

    console.log(previousValues)
    const currentNum = nums[i];
    const neededValue = target - currentNum;
    const index2 = previousValues[neededValue]
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentNum] = i
    }
  }
};

console.log(twoSum([2,7,11,15], 9))
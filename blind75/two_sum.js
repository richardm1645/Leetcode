/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  There may be duplicates of numbers. Return only the indexes of the first instance that each number appears. 

  Do not trim or make any changes to the original array.

Examples:

  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Input: nums = [15,2,7,11], target = 9
  Output: [1,2]

  Input: nums = [3,2,2,2,7,11,15], target = 9
  Output: [1,4]

  Input: nums = [3,3,4,2,2,4,4,4], target = 6
  Output: [2,3]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


const twoSum = function(nums, target) {

  //Saves values that are not the needed values in an object
  const previousValues = {};
  const uniqueNums = [];

  for (let i = 0; i < nums.length; i++) {

    //Checks if the current number already has had occurences. Add it if it hasn't
    if (uniqueNums.includes(nums[i])) {
      continue;
    } else {
      uniqueNums.push(nums[i]);
    }

    //Stores the current number and the needed number in constants.
    const currentNum = nums[i];
    const neededValue = target - currentNum;

    //Attempts to find the key-value pair of the needed num in the object
    const index2 = previousValues[neededValue];

    //If index2 is not null and is not of the same type as null, return the current number and index2 as the answer.
    if (index2 != null) {
      return [index2, i];
    
    } else {
      //If a solution is not found, stores the index of the current number in the array in the object
      previousValues[currentNum] = i;
    }
  }
};

console.log(twoSum([15,2,7,11], 9)); //1,2
console.log(twoSum([3,2,4], 6)); //1,2
console.log(twoSum([3,2,2,2,7,11,15], 9)); //1,4
console.log(twoSum([4,3,4,3,2,2,4,4,4], 6)); //0,4

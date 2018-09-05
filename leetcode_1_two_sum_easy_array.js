/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let indices;
  nums.map((n, i) => {
    nums.map((m, j) => {
      if (j === i) return;
      if (n + m === target) {
        indices = i < j ? [i, j] : [j, i];
      }
    });
  });
  return indices;
};


console.log(twoSum([2, 7, 11, 15], 9));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  let indices;
  const map = new Map;
  nums.map((n, i) => {
    const complement = target - n;
    if (map.has(complement)) indices = [map.get(complement), i];
    map.set(n, i);
  });
  return indices;
};

console.log(twoSum1([2, 7, 11, 15], 13));
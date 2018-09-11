/*
41. First Missing Positive


Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3


Example 2:

Input: [3,4,-1,1]
Output: 2


Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let max = 1;
  if (!nums.length) return max;
  const map = {};
  nums.map((n, i) => {
    map[n] = i + 1;
    if (n > max) max = n;
  });

  for (let i = 1; i <= max; ++i) {
    if (!map[i]) return i;
  }
  return max + 1;
};

console.log(firstMissingPositive([]));
console.log(firstMissingPositive([0]));
console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));
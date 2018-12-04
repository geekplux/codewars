/*
16. 3Sum Closest

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let res;
  let minSub = +Infinity;

  if (nums.length <= 3) return nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === target) return target;
        else {
          const sub = Math.abs(sum - target);
          if (minSub > sub) {
            minSub = sub;
            res = sum;
          }
        }
      }
    }
  }

  return res;
};

console.log(threeSumClosest([0, 1, 2], 0));
console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([1, 1, 1, 1], 0));
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));

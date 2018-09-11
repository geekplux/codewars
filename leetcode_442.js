/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const map = {};
  let p = 0;
  nums.map((n, i) => {
    if (map[n]) {
      nums[p] = n;
      p += 1;
    } else {
      map[n] = i + 1;
    }
  });

  return nums.slice(0, p);
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
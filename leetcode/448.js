/*
448. Find All Numbers Disappeared in an Array


Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const map = {};
  const result = [];
  nums.map((n, i) => {
    map[n] = i + 1;
    result.push(i + 1);
  });

  let p = 0;
  result.map(r => {
    if (!map[r]) {
      result[p] = r;
      p += 1;
    }
  });

  return result.slice(0, p);
};


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
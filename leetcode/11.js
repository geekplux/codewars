/*
11. Container With Most Water

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  function computeArea (left, right, range) {
    return Math.min(left, right) * range;
  }

  const len = height.length;
  let leftPointer = 0, rightPointer = len - 1;
  let area = 0, newArea = 0;
  let flag;

  while (leftPointer < rightPointer) {
    newArea = computeArea(height[leftPointer], height[rightPointer], rightPointer - leftPointer);
    if (area < newArea) area = newArea;

    flag = (height[rightPointer] - height[leftPointer]) > 0;
    if (flag) leftPointer++;
    else rightPointer--;
  }

  return area;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,2,4,3]));
console.log(maxArea([2,3,4,5,18,17,6]));
console.log(maxArea([2,3,10,5,7,8,9]));
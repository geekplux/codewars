/*
4. Median of Two Sorted Arrays


There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0


Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len = nums1.length + nums2.length;

  let i = 0; j = 0;
  let current, last;

  while (i + j <= len / 2) {
    last = current;

    if (nums1[i] === undefined) {
      current = nums2[j++];
      continue;
    }

    if (nums2[j] === undefined) {
      current = nums1[i++];
      continue;
    }

    if (nums1[i] <= nums2[j]) {
      current = nums1[i++];
    } else {
      current = nums2[j++];
    }
  }

  return len % 2 == 0 ? (last + current) / 2 : current;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
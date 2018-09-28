/*
5. Longest Palindromic Substring


Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.


Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  function expand(str, left, right) {
    let _left = left;
    let _right = right;
    while (_left >= 0 && _right < str.length && _left <= _right && str[_left] === str[_right]) {
      _left -= 1;
      _right += 1;
    }
    return _right - _left - 1;
  }

  let len1, len2, len;
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    len1 = expand(s, i, i);
    len2 = expand(s, i, i + 1);
    len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - len / 2 + 1;
      end = i + len / 2 + 1;
    }
  }

  return s.substring(start, end);
};
/*
3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let len = 1;
  let substr = '';
  let lastChar = '';

  for (let i = 0; i < s.length; ++i) {
    for (let j = i + 1; j < s.length; ++j) {
      substr = s.substring(i, j);
      lastChar = s[j];

      if (substr.indexOf(lastChar) === -1) {
        len = Math.max(len, j - i + 1);
      } else {
        break;
      }
    }
  }

  return len;
};

console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));




var lengthOfLongestSubstring1 = function (s) {
  let len = 0;
  let map = {};
  let i = 0;

  for (let j = 0; j < s.length; ++j) {
    if (map[s[j]]) {
      i = Math.max(map[s[j]], i);
    }
    map[s[j]] = j + 1;
    len = Math.max(len, j - i + 1);
  }

  return len;
};

console.log(lengthOfLongestSubstring1('au'));
console.log(lengthOfLongestSubstring1('abcabcbb'));
console.log(lengthOfLongestSubstring1('bbbbb'));
console.log(lengthOfLongestSubstring1('pwwkew'));



// two methods below are better and by same way

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  var sLen = s.length,
    maxLen = 0,
    maxStr = '',
    tmpStr,
    posIndex,
    i;

  for (i = 0; i < sLen; i++) {

    tmpStr = s[i];
    posIndex = maxStr.indexOf(tmpStr);

    if (posIndex > -1) {
      maxStr = maxStr.substring(posIndex + 1);
    }

    maxStr += tmpStr;
    maxLen = Math.max(maxLen, maxStr.length);
  }

  return maxLen;
};



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring3 = function (s) {
  let stack = [], m = s.split(''), ticker = 0, maxCount = 0, i = 0

  for (i; i < m.length; i++) {
    let cur = m[i], q = stack.indexOf(cur)
    if (q == -1) {
      stack.push(cur)
      ticker = stack.length
      if (ticker > maxCount) {
        maxCount = ticker
      }
    } else {
      stack.splice(0, q + 1)
      stack.push(cur)
      ticker = stack.length
    }
  }
  return maxCount
};
/*
14. Longest Common Prefix


Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const map = {};

  const len = strs.length;
  let result = '';
  let s;
  strs.map(str => {
    for (let i = 0; i < str.length; ++i) {
      s = str.slice(0, i + 1);
      if (map[s]) {
        map[s] += 1;
      } else map[s] = 1;

      if (map[s] === len && s.length > result.length) result = s;
    }
  });

  return result;
};

console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["abca", "abc"]));
// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));
// console.log(longestCommonPrefix(["dog","dacecar","dar"]));
// console.log(longestCommonPrefix(["dog","docecar","dor"]));
// console.log(longestCommonPrefix(["dog","dogecar","dog"]));
/*
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const letterMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const nums = digits.split('');
  let res = [];

  const len = nums.length;
  if (!len) return res;
  if (len <= 1) {
    return letterMap[nums[0]].split('');
  }

  let arr1 = letterCombinations(digits.substring(0, 1));
  let arr2 = letterCombinations(digits.substring(1));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res.push(arr1[i] + arr2[j]);
    }
  }

  return res;
};
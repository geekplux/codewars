/*
6. ZigZag Conversion


The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"


Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  let solution = new Array(numRows).fill("");
  let index = 0;
  let turnFlag = 1;

  for (let i = 0; i < s.length; i++) {
    solution[index] += s[i];
    console.log(solution);
    index += turnFlag;
    if (!index || index === numRows - 1) turnFlag *= -1;
  }
  return solution.join("");
};

console.log(convert("AB", 1));
console.log(convert("ABC", 2));
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));

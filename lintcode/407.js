/*
407. Plus One
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.

Example
Given [1,2,3] which represents 123, return [1,2,4].

Given [9,9,9] which represents 999, return [1,0,0,0].
*/

/**
 * @param digits: a number represented as an array of digits
 * @return: the result
 */
const plusOne = function (digits) {
    return (+digits.join('') + 1).toString().split('').map(n => +n);
}
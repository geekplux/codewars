/**
 * @param digits: a number represented as an array of digits
 * @return: the result
 */
const plusOne = function (digits) {
    return (+digits.join('') + 1).toString().split('').map(n => +n);
}
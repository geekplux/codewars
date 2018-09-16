const utils = require('../utils');

/*
2. Add Two Numbers


You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let link1 = l1;
  let link2 = l2;
  let dummy = new utils.ListNode(-1);
  let sum = 0;
  let carry = 0;
  let num = 0;
  let pointer = dummy;
  let value = 0;

  while(link1 || link2) {
    sum = (link1 ? link1.val : 0) + (link2 ? link2.val : 0);
    num = sum % 10;
    value = num + carry;
    pointer.next = new utils.ListNode(value % 10);
    carry = Math.floor(sum / 10) + Math.floor(value / 10);
    if (link1) link1 = link1.next;
    if (link2) link2 = link2.next;
    pointer = pointer.next;
  }

  if (carry) pointer.next = new utils.ListNode(carry);
  return dummy.next;
};


const result1 = addTwoNumbers(utils.generateLinkedList([2, 4, 3]), utils.generateLinkedList([5, 6, 4]));
const result2 = addTwoNumbers(utils.generateLinkedList([5]), utils.generateLinkedList([5]));
const result3 = addTwoNumbers(utils.generateLinkedList([1]), utils.generateLinkedList([9, 9]));
console.log(result1);
console.log(result2);
console.log(result3);
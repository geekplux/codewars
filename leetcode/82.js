/*
82. Remove Duplicates from Sorted List II


Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5

Example 2:

Input: 1->1->1->2->3
Output: 2->3
*/


const utils = require('../utils');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  var root = { next: null };

  root.next = head;
  var pre = head = root;

  while (pre) {
    var cur = pre.next;
    var isDup = false;

    while (cur && cur.next && cur.val === cur.next.val) {
      isDup = true;
      var next = cur.next;
      cur.next = next.next;
      next.next = null;
    }

    if (isDup) {
      pre.next = cur.next;
      cur.next = null;
      continue;
    }

    pre = cur;
  }

  return root.next;
};

const result1 = deleteDuplicates(utils.generateLinkedList([1, 2, 3, 3, 4, 4, 5]));
const result2 = deleteDuplicates(utils.generateLinkedList([1, 1, 1, 2, 3]));
console.log(result1);
console.log(result2);
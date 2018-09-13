/*
92. Reverse Linked List II


Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  var dummy = { next: null };
  dummy.next = head;
  head = dummy;

  for (var i = 0; i < m - 1; i++) {
    head = head.next;
  }

  var pre = head.next;
  var cur = pre.next;

  for (i = 0; i < n - m; i++) {
    var tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  head.next.next = cur;
  head.next = pre;

  return dummy.next;
};
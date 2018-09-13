/*
206. Reverse Linked List


Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

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
 * @return {ListNode}
 */
var reverseList = function (head) {
  return reverseIteratively(head);
  // return reverseRecursively(head, null);
};

function reverseIteratively(head) {
  let prev = null,
    next = head;

  while (next) {
    let tmp = next.next;

    next.next = prev;
    prev = next;
    next = tmp;
  }

  return prev;
}

function reverseRecursively(node, prev) {
  if (!node) {
    return null;
  }

  let head = reverseRecursively(node.next, node) || node;

  node.next = prev;

  return head;
}
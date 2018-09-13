function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateLinkedList(arr) {
  const linkedListArray = [];
  arr.map(a => {
    linkedListArray.push(new ListNode(a));
  });

  const linkedList = linkedListArray[0];

  linkedListArray.map((l, i) => {
    l.next = linkedListArray[i + 1] ? linkedListArray[i + 1] : null;
  });

  return linkedList;
}



module.exports = {
  ListNode,
  generateLinkedList,
};
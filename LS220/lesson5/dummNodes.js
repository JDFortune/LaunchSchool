class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteFromLinkedList(head, target) {
  let dummy = new Node(null, head);
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (curr.next === target) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return dummy.next;
}
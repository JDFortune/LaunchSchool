import { Node, printList } from './nodeClass.mjs';

function reverseList(head) {
  let prev = null;
  let curr = head;
  let newHead;

  while (curr) {
    let temp = curr.next;
    curr.next = prev
    prev = curr;
    curr = temp;
    if (curr) newHead = curr;
  }

  return newHead;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

printList(head);
let newHead = reverseList(head);
printList(newHead);
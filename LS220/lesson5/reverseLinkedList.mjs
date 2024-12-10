import { Node, printList } from './nodeClass.mjs';

function reverseList(head) {
  if (!head) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev
    prev = curr;
    curr = next;
  }

  return prev;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

printList(head);
let newHead = reverseList(head);
printList(newHead);
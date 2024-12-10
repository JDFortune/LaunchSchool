class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteFromLinkedList(head, target) {
  let prev = null;
  let curr = head;
  
  if (!head) return head;
  
  while (curr) {
    if (curr.val === target) {
      if (!prev) {
        head = curr.next;
      } else {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return head;
}

function printList(head) {
  let curr = head;
  let message = []
  let index = 0;
  while (curr) {
    message.push(curr.val);
    curr = curr.next;
  }
  console.log('Node List: ' + message.join(' -> '));
}

const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(2);
head1.next.next.next.next = new Node(4);


const newHead1 = deleteFromLinkedList(head1, 2);
printList(newHead1);

const head2 = new Node(1);
head2.next = new Node(3);
head2.next.next = new Node(1);


const newHead2 = deleteFromLinkedList(head2, 1);
printList(newHead2);

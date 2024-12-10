export class Node {
  constructor(data, next) {
    this.data = data === undefined ? 0: data;
    this.next = next === undefined ? null : next;
  }
}

export function printList(head) {
  let curr = head;
  let message = []
  let index = 0;
  while (curr) {
    message.push(curr.val);
    curr = curr.next;
  }
  console.log('Node List: ' + message.join(' -> '));
}
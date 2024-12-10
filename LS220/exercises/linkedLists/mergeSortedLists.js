function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}
function printLinkedList(head) {
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

// function mergeSortedLists(head1, head2) {
//   let dummy = new ListNode(0);
//   let result = dummy;
//   let curr1 = head1;
//   let curr2 = head2;

//   while (curr1 || curr2) {
//     let temp;
//     if (!curr1) {
//       temp = curr2;
//       curr2 = curr2.next;
//     } else if (!curr2) {
//       temp = curr1;
//       curr1 = curr1.next;
//     } else if (curr1.val <= curr2.val) {
//       temp = curr1;
//       curr1 = curr1.next;
//     } else {
//       temp = curr2;
//       curr2 = curr2.next;
//     }
    
//     result.next = temp;
//     result = temp;
//   }

//   return dummy.next;
// }

function mergeSortedLists(list1, list2) {
  let dummy = new ListNode(0);
  let curr = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 === null ? list2 : list1;

  return dummy.next;
}

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
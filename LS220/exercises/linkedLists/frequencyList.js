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

function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function testFrequencyList(input, expected) {
  let result = linkedListToArray(createFrequencyList(createLinkedList(input)));
  if (result.length !== expected.length) return false;
  let freq1 = new Map(), freq2 = new Map();
  for (let num of result) freq1.set(num, (freq1.get(num) || 0) + 1);
  for (let num of expected) freq2.set(num, (freq2.get(num) || 0) + 1);
  if (freq1.size !== freq2.size) return false;
  for (let [key, value] of freq1) {
    if (freq2.get(key) !== value) return false;
  }
  return true;
}

// function createFrequencyList(head) {
//   if (!head) return null;
//   let curr = head;

//   let frequencies = new Map();

//   while (curr) {
//     frequencies.set(curr.val, (frequencies.get(curr.val) || 0) + 1);
//     curr = curr.next;
//   }

//   let dummy = new ListNode(0);
//   let newCurr = dummy;

//   for (let frequency of frequencies.values()) {
//     newCurr.next = new ListNode(frequency);
//     newCurr = newCurr.next;
//   }

//   return dummy.next;
// }

function createFrequencyList(head) {
  if (!head) return null;
  let curr = head;
  
  let counts = {};
  
  while (curr) {
    counts[curr.val] = counts[curr.val] + 1 || 1;
    curr = curr.next;
  }
  
  let dummy = new ListNode(0);
  let newCurr = dummy;

  Object.values(counts).forEach(val => {
    newCurr.next = new ListNode(val);
    newCurr = newCurr.next;
  });
  
  return dummy.next;
}

// Test cases
console.log(testFrequencyList([1, 1, 2, 1, 3], [3, 1, 1]));
console.log(testFrequencyList([1, 1, 2, 2, 2], [2, 3]));
console.log(testFrequencyList([6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1]));
console.log(testFrequencyList([4, 4, 4, 4], [4]));
console.log(testFrequencyList([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]));
console.log(testFrequencyList([], []));
console.log(testFrequencyList([1, 1, 1], [3]));
console.log(testFrequencyList([1, 2, 1, 2, 1, 2], [3, 3]));
// All test cases should log true.
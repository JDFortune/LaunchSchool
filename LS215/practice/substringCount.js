/*
Return substring instance count
Complete the solution so that it returns the number of times the search_text is found within the full_text.
Usage example:
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

function solution(str, test) {
  let count = 0;
  for (let i = 0; i < str.length - (test.length - 1); i++) {
    if (str.slice(i, i + test.length) === test) {
      count += 1;
    }
  }

  return count;
}

console.log(solution('abcdeb','b') == 2);
console.log(solution('abcdeb', 'a') == 1);
console.log(solution('abbc', 'bb') == 1);
function bucketize(string, size) {
  let words = string.split(/\s+/);
  let result = [];
  if (words.some(word => word.length > size)) return result;

  while (words.length > 0) {
    let bucket = 1;
    while (words.slice(0, bucket).join(' ').length <= size
            && bucket <= words.length) {
      bucket += 1;
    }
    
    result.push(words.splice(0, bucket - 1).join(' '))
  }

  return result;
}

console.log(bucketize("she sells sea shells by the sea", 10)); //["she sells", "sea shells", "by the sea"]
console.log(bucketize("the mouse jumped over the cheese", 7)); //["the", "mouse", "jumped", "over", "the", "cheese"]
console.log(bucketize("fairy dust coated the air", 20)); //["fairy dust coated", "the air"]
console.log(bucketize("a b c d e", 2)); //["a", "b", "c", "d", "e"]
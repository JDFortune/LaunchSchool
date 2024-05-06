function letterPercentages(str) {
  let count = str.length;
  let upper = (str.match(/[A-Z]/g) || []).length;
  let lower = (str.match(/[a-z]/g) || []).length;
  let neither = (str.match(/[^a-z]/ig) || []).length;

  [upper, lower, neither] = [upper, lower, neither].map(value => {
    return ((value / count) * 100).toFixed(2);
  });

  return {
    upper,
    lower,
    neither,
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
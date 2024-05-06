/*
Questions:
1. Will we always be given 3 arguments? If not, what should we do with less arguments or extras?
2. WIll the arguments always be valid numbers or could they be infinity or NaN or not number types at all? If so, how should we handle it?

Rules:
equilateral : all 3 sides are the same
isosceles : 2 sides are equal
scalend : all 3 sides are different lenght

valid triangle : all sides lengths must be greater than 0. The 2 showest sides must be greater than the longest side.

Algortihm:

test valid triangle (return 'invalid' if invalid)
  sort lengths by size
  if 2 shorter lengths sum are less than longest length
    return invalid
test lengths array, return type of triangle
  use an object to hold lengths
  iterate over the lengths
    add key as length and occurence of length gets incremented
  if length of values of object is 1 return equilateral
  if 2 return iscosceles
  else return scalene
*/

function triangle(s1, s2, s3) {
  sides = [s1, s2, s3];
  sides.sort((a, b) => a - b);
  if (sides[0] + sides[1] < sides[2] || sides[0] <= 0) {
    return 'invalid';
  }

  let lengthCounts = {};

  sides.forEach(side => {
    lengthCounts[side] = lengthCounts[side] + 1 || 1;
  });

  switch (Object.values(lengthCounts).length) {
    case 1:
      return 'equilateral';
    case 2:
      return 'isosceles';
    case 3:
      return 'scalene'
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
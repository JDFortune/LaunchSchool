/* You have a set of stairs that are x, steps in length. Return an array of all of the paths you can take for getting up the stairs.
FOr examples if your stair has 2 steps. You can either take one step twice [1, 1] or take two steps at once [2].

Rules: The maximum amount of steps you can take at any give point is 3 (you can't jump more than three steps at a time)

Write a program that takes the stairs height as number of steps and return an array of all the orders of steps you can take to get to the top of the stairs.

requirements:
  - you can only take a maximum up three steps at a time.
Implicit 
  - the max array length is equal to the stairs height, taking 1 step at a time.
  - the minumum array length is the strairs height / 3 raised to its height whole number
  - if you have zeros in your array of paths, remove them.
    - Once removed, you should have two arrays with the same values at  the same index.

example:
stairPaths(3) // should return [[3], [1, 2], [2, 1], [1, 1, 1]]
stairPaths(4) // [[1, 3], [2, 2], [3, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [1, 1, 1, 1]]
  
Notes; 

Get every possible combination of arrays from length of stairs to length of the ceiling of stairs / 3 that add up to the stairs height.
No number can be greater than 3 (but can be zero);
///////                              
get every possible combination of x length number
highest number will be 1 repeated x times;
where each digit is between 0 and 3;
every number between 0 and 10,000 / 1,111,111,111
                                    1,111,111,111
filter numbers that contain 4-9
map over remaining numbers into array of digits
  filter to arrays whose digits sums add up to x

*/

// function stairPaths(height) {
//   let max = Number('1'.repeat(height));
//   let result = [];

//   for (let i = 1; i <= max; i++) {
//     let strNum = String(i);
//     if (/[3-9]/.test(strNum)) continue;

//     let path = [...strNum].map(Number).filter(n => n !== 0);
    
//     if (sumSteps(path) === height && uniquePath(result, path)) {
//       result.push(path);
//     }
//   }

//   return result;
// }

// function sumSteps(arr) {
//   return arr.reduce((total, step) => total + step);
// }

// function uniquePath(result, path) {
//   return result.every(p => {
//     if (p.length !== path.length) {
//       return true;
//     } else {
//       let unique = false;
//       for (let i = 0; i < p.length; i++) {
//         if (p[i] !== path[i]) {
//           unique = true;
//         }
//       }
//       return unique;
//     }
//   });
// }



function stairPaths(steps) {
  let idx = 0;
  let paths = [];
  let currentPath = Array.from(Array(steps), () => 0);

  while (!currentPath.every(stepIncrement => stepIncrement === 2)) {
    if (currentPath[idx] !== 2) {
      currentPath[idx] += 1;

      if (sumSteps(currentPath) === steps) {
        let filteredSteps = currentPath.filter(num => num !== 0);
        if (uniquePath(paths, filteredSteps)) paths.push(filteredSteps);
      }
      
    } else {
      idx += 1;
      
      if (currentPath[idx] !== 2) {
        currentPath[idx] += 1;

        while (idx > 0) {
          idx -= 1;
          currentPath[idx] = 0;
        }

      }
    }
  }

  return paths
}

function sumSteps(arr) {
  return arr.reduce((total, step) => total + step);
}

function uniquePath(result, path) {
  return !result.some(nestedPath => {
   return nestedPath.length === path.length &&
          nestedPath.every((num, index) => num === path[index]);
  });
}

// function stairPaths(n) {
//   if (n <= 1) return 1;

//   return  stairPaths(n - 1) + stairPaths(n - 2);
// }

console.log(stairPaths(3)); // [ [ 2, 1 ], [ 1, 2 ], [ 1, 1, 1 ] ]
console.log(stairPaths(4));// [ [ 2, 2 ], [ 2, 1, 1 ], [ 1, 2, 1 ], [ 1, 1, 2 ], [ 1, 1, 1, 1 ] ]
console.log(stairPaths(5).length); // 8 paths
console.log(stairPaths(9).length); // 55
console.log(stairPaths(10).length); // 89
console.log(stairPaths(15).length); // 987

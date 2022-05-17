/* 
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues ([1,2,3, 4,4, 4, 7, 7, 12, 12, 131) //
countUniqueValues(I1) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

Works for sorted & un_sorted array
**/

function countUniqueValues(arr) {
  const uniqValues = {};
  for (let val of arr) {
    uniqValues[val] = ++uniqValues[val] || 1;
  }

  return Object.keys(uniqValues).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 131])); //
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

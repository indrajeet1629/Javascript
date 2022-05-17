/* 

Two Pointers

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues ([1,2,3, 4,4, 4, 7, 7, 12, 12, 131) //
countUniqueValues(I1) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
**/

function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log("arr", arr);
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 2, 2, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 131])); // 7
console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

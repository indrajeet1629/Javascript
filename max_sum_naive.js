/*
maxSubarraySum([1,2,5,2, 8, 1, 5], 2) / /
1110.com
maxSubarraySum([1,2,5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4,2,1,6],1)
6
maxSubarraySum([4,2,1, 6,2], 4) // 13
maxSubarraySum([],4) // null
**/

// Time complexity O(N^2)

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  console.log("max", max);
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([], 4); // null

/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the
length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 3001 is a subarray
of the original array, but [100, 300] is not.
maxSubarraySum([100,200,300,400],2)//700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-11, 2) // 5
maxSubarraySum([3,-2.7,-4.1,-1,4,-2.11.2) // 5
maxSubarraySum([2,31, 3) // null
Constraints:
Time Complexity - O(N)
Space Complexity - 0(1)
**/

function maxSubarraySum(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < n) return null;

  let tempSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  for (let i = n; i < arr.length; i++) {
    console.log(arr[i]);
    tempSum = tempSum - arr[i - n] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  console.log("maxSum", maxSum, tempSum);
  return maxSum;
}

maxSubarraySum([2, 31], 3); // null
maxSubarraySum([100, 800, 300, 400], 2); //700

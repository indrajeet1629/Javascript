// TIME COMPLEXITY - O(N)

function maxSubarraySum(arr, num) {
  let tempSum = 0;
  let maxSum = -Infinity;

  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 4);
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13

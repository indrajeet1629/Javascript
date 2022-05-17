/**
 * ? Sorted Array - Time Complexity is O(N)
 * ! Does't work for Unsorted Array
 * @param {number} arr
 * @returns Array[number]
 */

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;
  let sum = -Infinity;

  while (start < end) {
    sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
}

console.log(sumZero([-2, -3, -1, 1, 3, 5, 6]));

/**
 * ? Sorted Array - Time Complexity is O(N^2)
 * @param {number} arr
 * @returns Array[number]
 */

function sumZeroMethod2(arr) {
  let sum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];

      if (sum === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZeroMethod2([-2, -3, -1, 0, 3, 5, 0, 6]));

/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to
the function. If there isn't one, return O instead.
Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest suba
rray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarr
ay
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is gr
eater than 52
minSubArrayLen([1,4,16.22.5,7.8,9,107,39)
11 3
minSubArrayLen([1,4,16,22,5,7,8,9,101,55)//5
minsubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArravLen([1.4.16.22.5.7.8.9.101.95)/10
Time Complexitv - O(n)
Space Complexitv - 0(1)

**/

function minSubArrayLen(nums, sum) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minArrayLen = Infinity;

  while (end <= nums.length) {
    if (total < sum) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minArrayLen = Math.min(minArrayLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }
  return minArrayLen === Infinity ? 0 : minArrayLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 3));
/* 
[2, 3, 1, 2, 4, 3], 7)
Iteration 1 
  start - 0
  end - 1
  minLen - Infinity
  total - 2

  Iteration 2 
  start - 0
  end - 2
  minLen - Infinity
  total - 5

  Iteration 3
  start - 0
  end - 3
  minLen - Infinity
  total - 6

  Iteration 4
  start - 0
  end - 4
  minLen - Infinity
  total - 8

  Iteration 5
  start - 1
  end - 4
  minLen - 4
  total - 6
  
  Iteration 6
  start - 1
  end - 5
  minLen - 4
  total - 10

  Iteration 7
  start - 2
  end - 5
  minLen - 4
  total - 7

  Iteration 8
  start - 3
  end - 5
  minLen - 3
  total - 6

  Iteration 9
  start - 3
  end - 6
  minLen - 2
  total - 9

  Iteration 10
  start - 3
  end - 6
  minLen - 2
  total - 9
  



**/

/*

Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array
where the average of the pair equals the target average. There may be more than one pair that matches the average target
Bonus Constraints:
Time: O(N)
Space: 0(1)
Sample Input:
averagePair(1,2,31.2.5)//true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false

**/

function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!

  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    const tempAvg = (arr[first] + arr[last]) / 2;
    if (tempAvg === avg) {
      console.log("result", arr[first], arr[last]);
      return true;
    } else if (tempAvg > avg) {
      last--;
    } else {
      first++;
    }
  }
  return false;
}
// Sorted Array
console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //

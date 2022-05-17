/* 

Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequen
Your solution MUST have the following complexities:

Time: O(N)


Sample Input:
sameFrequency (182,281) // true
sameFrequency (34,14) // false
sameFrequency (3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(num1 = "", num2 = "") {
  // good luck. Add any arguments you deem necessary.

  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const strObj1 = {};

  for (let char of str1) {
    strObj1[char] = ++strObj1[char] || 1;
  }

  for (let char of str2) {
    if (!strObj1[char]) {
      return false;
    } else {
      strObj1[char] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 21)); // true
console.log(sameFrequency(34, 34));
console.log(sameFrequency());

/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence
of the characters in the second string. In other words, the function should check whether the characters in the first string appear
somewhere in the second string, without their order changing.
Examples:
isSubsequence('hello',
'hello world'); // true
isSubsequence('sing'
'sting'); // true
isSubsequence('abc'
'abracadabra'); // true
isSubsequence('abc'
'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (str1.length === i) return true;
    j++;
  }

  return false;
}

console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters),

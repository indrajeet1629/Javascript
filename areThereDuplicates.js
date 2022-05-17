/* 

Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
duplicates among the arguments passed in. You can solve this using the trequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areTherelunlicates(1 2 2) // true
areTherelunlicates(a. 'b' 'c. 'a') // true

**/

function areThereDuplicates(...args) {
  const duplicates = {};
  for (let i = 0; i < args.length; i++) {
    if (duplicates[args[i]] === 1) {
      return true;
    } else {
      duplicates[args[i]] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

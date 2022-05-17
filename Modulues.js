function isEven(n) {
  // n&1 is 1, then odd, else even
  return !(n & 1);
}

let n = 102;
console.log(isEven(n));

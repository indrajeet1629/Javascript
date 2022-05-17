/**
 * TODO: Can be done in 2 arrays.
 */

function isSquaredArray(arr1, arr2) {
  const inputCount = {};
  const squaredCount = {};

  for (let num of arr1) {
    inputCount[num] = ++inputCount[num] || 1;
  }

  for (let num of arr2) {
    squaredCount[num] = ++squaredCount[num] || 1;
  }
  console.log("squaredCount", squaredCount, inputCount);
  for (let num in inputCount) {
    if (!(num ** 2 in squaredCount)) {
      return false;
    }
    if (squaredCount[num ** 2] !== inputCount[num]) {
      return false;
    }
  }
  return true;
}

console.log(isSquaredArray([1, 2, 2, 4], [1, 4, 16, 4]));

/**
 * {
 * 1: 1,
 * 2: 2,
 * 4: 1
 * }
 */

function isSquaredArrayMethod2(arr1, arr2) {
  const inputCount = {};

  for (let num of arr2) {
    inputCount[num] = ++inputCount[num] || 1;
  }

  for (let num of arr1) {
    if (!(num ** 2 in inputCount) || !inputCount[num ** 2]) {
      return false;
    } else {
      inputCount[num] -= 1;
    }
  }
  return true;
}

console.log(isSquaredArrayMethod2([1, 2, 3, 2, 5], [9, 1, 4, 4, 16]));

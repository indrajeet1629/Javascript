/**
 * ? Method 1 - O(2N) ~= O(N) - bur Object.keys is again one extra loop
 * TODO: can be refactored with single for loop and without using Extra variable
 */

function uniqValuesCountM1(arr) {
  const uniqObj = {};

  for (let num of arr) {
    uniqObj[num] = ++uniqObj[num] || 1;
  }

  return Object.keys(uniqObj).length;
}

console.log(uniqValuesCountM1([1, 4, 1, 1, 2, 2, 2, 1, 2, 4, 4]));

/**
 * ? Method 2 - O(N)
 */

function uniqValuesCountM2(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }

  return i + 1;
}

console.log(uniqValuesCountM2([]));

/**
 * ? Single line Code
 * @param {sorted number} arr
 */

function uniqValuesCountM3(arr) {
  let uniqArray = new Set(arr);

  return uniqArray.size;
}

console.log(uniqValuesCountM3([1, 1, 1, 1, 2, 2, 2, 4, 4]));

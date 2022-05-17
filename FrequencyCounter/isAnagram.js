function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const strObj = {};

  for (let char of str1) {
    strObj[char] = ++strObj[char] || 1;
  }

  for (let char of str1) {
    if (!strObj[char]) {
      return false;
    } else {
      strObj[char] -= 1;
    }
  }
  return true;
}

console.log(isAnagram("abcd", "bcda"));

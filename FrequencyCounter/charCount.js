/**
 * ! Regex takes longer time to test.
 * TODO: Can be refactored
 */

function charCount(str) {
  const countObj = {};

  for (let item of str) {
    // console.log(charCode);
    const char = item.toLowerCase();
    if (/[a-zA-Z]/.test(item)) {
      countObj[char] = ++countObj[char] || 1;
    }
  }

  return countObj;
}

console.log(charCount("Heyy Hi hh !"));

/**
 * ? Usage of charCodeAt -- The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
 * TODO: Write re-usable function isAlphaNumeric.
 */

function charCountRefactored(str) {
  const countObj = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const charCode = str.charCodeAt(i);

    if (
      // ? 0-9
      (47 < charCode && charCode < 58) ||
      // ? a-z
      (96 < charCode && charCode < 123)
    ) {
      countObj[char] = ++countObj[char] || 1;
    }
  }

  return countObj;
}

console.log(charCountRefactored("Heyy Hi hh ! ~ 012333"));

// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  console.log(str);
  var reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);

  if (reversedStr === str) {
    return true;
  } else {
    return false;
  }
};

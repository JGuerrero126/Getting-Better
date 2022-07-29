// This function tests if a string is a palindrome, meaning if the letters are reversed, do they still make the same word? An example would be the word "racecar".

var isPalindrome = function (str) {
  // First we make a copy of the string, split it up in an array then reverse that array and join it back together into a string. This is a simple and reliable way to get the reverse of a string.
  var reversedStr = str.split("").reverse().join("");

  // We then check to see if our new reversed string matches the original.
  if (reversedStr === str) {
    // If they match, return true
    return true;
  }
  // If not, return false
  return false;
};

// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
  if (strA.split("").sort().join("") === strB.split("").sort().join("")) {
    return true;
  }
  return false;
};

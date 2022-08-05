// This function can tell you if the given strings are anagrams of each other. Meaning are they made up of the same letters, just arranged differently.

var isAnagram = function (strA, strB) {
  // We take both strings, split them up into separate arrays and then sort those arrays alphabetically. After joining them back together, we can compare them and see if they are "deeply" equal.
  if (strA.split("").sort().join("") === strB.split("").sort().join("")) {
    // If they do then they are anagrams so return true.
    return true;
  }
  // If they aren't then return false.
  return false;
};

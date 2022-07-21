// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function (str, sub) {
  var sortedStr = [...new Set(str.split("").sort())];
  var sortedSub = sub.split("").sort();
  var matchCount = 0;

  sortedSub.forEach((element) => {
    for (i = 0; i < sortedStr.length; i++) {
      if (element === sortedStr[i]) {
        matchCount++;
      }
    }
  });
  if (matchCount === sortedSub.length) {
    return true;
  }
  return false;
};

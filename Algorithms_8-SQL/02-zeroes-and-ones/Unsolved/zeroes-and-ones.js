// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
  var splitStr = str.split("");
  var zeroesCount = 0;
  var onesCount = 0;
  for (i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === "0") {
      zeroesCount++;
    }
    if (splitStr[i] === "1") {
      onesCount++;
    }
  }
  if (zeroesCount === onesCount) {
    return true;
  }
  return false;
};

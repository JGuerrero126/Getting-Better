// This rather specific function takes a string comprised entirely of 1's and 0's and lets you know if an equal amount of them appear in the string.

var zeroesAndOnes = function (str) {
  // First up, we gotta take our string and split it up so each character is an element in a new array.
  var splitStr = str.split("");
  // We set up two variables that will act as our counters, one for the zeroes and another for the ones.
  var zeroesCount = 0;
  var onesCount = 0;
  // Once we are all set up, we use a "forEach" method on our new array so we can check every element in it.
  splitStr.forEach((element) => {
    // A ternary operator greatly reduces the amount of code we need in the loop. We set a condition of the current element deeply equalling "0", if it does we increase our zeroesCount variable but if it doesn't we increase our onesCount variable. Either way after that we got to the next element and the process repeats.
    return element === "0" ? zeroesCount++ : onesCount++;
  });
  // After we check our new array we perform the check to see if the counts are equal.
  if (zeroesCount === onesCount) {
    // If they are then we return true.
    return true;
  }
  // If not return false.
  return false;
};

// The goal of this algorithm was to get the number of vowels in a given string.

var vowelCount = function (str) {
  // First we create a variable that will act as our vowel count.
  var vowels = 0;
  // Before we loop through and check the string, we make sure the string isn't empty, if it is then we simply skip the code below and return the default vowel count of zero.
  if (str !== "") {
    // Past the check, we make the entire string lowercase to make our later checks easier, we also split it in an array where each character is an element in the new array.
    var stringArr = str.toLowerCase().split("");
    // We loop through the entire array
    for (i = 0; i < stringArr.length; i++) {
      // Checking if the current element matches any vowel, it doesn't matter what vowel it is so we don't need to set up multiple ifs, just one with multiple options for the check.
      if (
        stringArr[i] === "a" ||
        stringArr[i] === "e" ||
        stringArr[i] === "i" ||
        stringArr[i] === "o" ||
        stringArr[i] === "u"
      ) {
        // If the element matches any vowel, increment the vowels variable.
        vowels++;
      }
    }
  }
  // Return the vowels variable, either after looping through the array or without looping through it if the string was empty
  return vowels;
};

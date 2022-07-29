// This bit of code takes a string and returns the string with each word being capitalized.

var titleCase = function (str) {
  // Before beginning the process of capitalizing each word in the string, we need to set up some base variables.
  // We create an array where each element is a word from the string.
  var splitStr = str.split(" ");
  // We set up an empty array that will contain our new capitalized words.
  var capArray = [];
  // Here we begin looping through each element of the array containing our split up string
  for (i = 0; i < splitStr.length; i++) {
    // First thing we do is split up our word into an array where each element is a single character from the word.
    var word = splitStr[i].split("");
    // We then grab the first element in our new array and make a copy of it that is uppercase
    var firstLetter = word[0].toUpperCase();
    // We take out the first element in the array, which would be the first letter in the word.
    word.shift();
    // We replace the element we just removed from the array with the uppercase copy we just made.
    word.unshift(firstLetter);
    // Here we join the word back together to a string, the word is now capitalized.
    var joinedWord = word.join("");
    // Push the capitalized word into our array of capitalized words
    capArray.push(joinedWord);
  }
  // Lastly, we return our capitalized as a string by joining every word in the array together with a space inbetween each word.
  return capArray.join(" ");
};

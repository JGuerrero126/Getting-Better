//This is a function that accepts a string and returns the string in camelCase meaning a phrase with no spaces where every word is capitalized besides the first word.

var camelCase = function (str) {
  // First things first, we gotta create an array made up of the words from the string we were given.
  var splitStr = str.split(" ");
  // We get a few things done at the same time here, we create a new array that we will use to contain our camelcase string and we give it the first word of the split up string in lowercase as its starting value, so now we just need to worry about capitalizing the rest of the words and adding them to our array.
  var camalArray = [splitStr[0].toLowerCase()];
  // Here's where we start looping through our array of words from the starting string, we skip the first word as we took care of that with the last line.
  for (i = 1; i < splitStr.length; i++) {
    // We take the current word we are on and split it into a new array where each element in the array consists of a single character from the word.
    var word = splitStr[i].split("");
    // We take a copy of the first element in the new array, meaning the first letter in the word, and make it uppercase.
    var firstLetter = word[0].toUpperCase();
    // Then we remove the first element from the array
    word.shift();
    // Then we replace it the letter we just made uppercase
    word.unshift(firstLetter);
    // Finally we join the now capitalized word back together and push it into the array we made to contain our camelcase words.
    camalArray.push(word.join(""));
  }
  // Lastly, we return the array of camelcase words after joining them all together into a single phrase with no spaces.
  return camalArray.join("");
};

// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  var splitStr = str.split(" ");
  var camalArray = [];
  for (i = 0; i < splitStr.length; i++) {
    if (i !== 0) {
      var word = splitStr[i].split("");
      var firstLetter = word[0].toUpperCase();
      word.shift();
      word.unshift(firstLetter);
      console.log(word);
      var joinedWord = word.join("");
      console.log(joinedWord);
      camalArray.push(joinedWord);
      console.log(camalArray);
    } else {
      var firstWord = splitStr[i].toLowerCase();
      camalArray.push(firstWord);
    }
  }
  return camalArray.join("");
};

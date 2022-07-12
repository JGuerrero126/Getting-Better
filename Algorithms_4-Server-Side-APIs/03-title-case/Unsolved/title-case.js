// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  var splitStr = str.split(" ");
  var capArray = [];
  for (i = 0; i < splitStr.length; i++) {
    var word = splitStr[i].split("");
    var firstLetter = word[0].toUpperCase();
    word.shift();
    word.unshift(firstLetter);
    console.log(word);
    var joinedWord = word.join("");
    console.log(joinedWord);
    capArray.push(joinedWord);
    console.log(capArray);
  }
  return capArray.join(" ");
};

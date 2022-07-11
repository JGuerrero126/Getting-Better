// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  var vowels = 0;
  if (str !== "") {
    console.log(str);
    var stringArr = str.toLowerCase().split("");
    console.log(stringArr);
    for (i = 0; i < stringArr.length; i++) {
      if (
        stringArr[i] === "a" ||
        stringArr[i] === "e" ||
        stringArr[i] === "i" ||
        stringArr[i] === "o" ||
        stringArr[i] === "u"
      ) {
        vowels++;
        console.log(stringArr[i]);
      }
    }
  }
  return vowels;
};

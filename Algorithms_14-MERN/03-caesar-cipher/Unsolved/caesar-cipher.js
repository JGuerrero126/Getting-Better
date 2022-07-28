// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function (str, offset) {
  if (offset === 0) {
    return str;
  }
  var changedArr = [];
  var lowerAlph = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var splitStr = str.split("");
  if (offset > 26) {
    offset = offset % 26;
  } else if (offset < -26) {
    offset = offset % -26;
  }
  splitStr.forEach((element) => {
    if (element === " ") {
      changedArr.push(element);
      return;
    }
    if (element === element.toUpperCase()) {
      var alph = upperAlph;
    } else {
      var alph = lowerAlph;
    }
    for (i = 0; i < alph.length; i++) {
      if (element === alph[i]) {
        var seekingIndex = i + offset;
        if (offset > 1) {
          if (seekingIndex >= alph.length) {
            changedArr.push(alph[seekingIndex - alph.length]);
            return;
          } else {
            changedArr.push(alph[seekingIndex]);
            return;
          }
        }
        if (offset < 1) {
          if (seekingIndex < 0) {
            changedArr.push(alph[seekingIndex + alph.length]);
            return;
          } else {
            changedArr.push(alph[seekingIndex]);
            return;
          }
        }
      }
    }
  });
  return changedArr.join("");
};

const oneEditAway = function (str1, str2) {
  // TODO: Write function that takes in two strings and returns true if one character away, otherwise false
  var strArr1 = str1.split("");
  var strArr2 = str2.split("");
  var editCount = 0;
  for (i = 0; i < str1.length; i++) {
    if (strArr1[i] !== strArr2[i]) {
      editCount++;
    }
  }
  return editCount === 1 ? true : false;
};

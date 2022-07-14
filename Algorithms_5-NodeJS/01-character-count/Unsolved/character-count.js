// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  // var obj = {};
  // var splitStr = str.split("");
  // for (i = 0; i < splitStr.length; i++) {
  //   var letter = splitStr[i];
  //   var keys = Object.keys(obj);
  //   if (keys.length < 1) {
  //     obj[letter] = 1;
  //   }
  //   for (j = 0; j < keys.length; j++) {
  //     if (letter === keys[j]) {
  //       console.log("DUPLICATE CAUGHT");
  //       var values = Object.values(obj);
  //       obj[letter] = values[j] + 1;
  //       console.log(obj[letter]);
  //       break;
  //     }
  //     obj[letter] = 1;
  //     console.log(obj);
  //   }
  // }
  // return obj;

  // This solution isn't mine, but it works and I don't know why. Gonna leave it like this for now and come back to try to make sense of it later.
  // Credit: https://www.codegrepper.com/code-examples/javascript/count+number+of+chars+in+string+javascript
  return str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};

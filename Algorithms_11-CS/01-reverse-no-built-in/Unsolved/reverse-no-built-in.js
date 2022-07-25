// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
  var splitStr = str.split("");
  var revStr = [];
  splitStr.forEach((element) => {
    revStr.unshift(element);
  });

  return revStr.join("");
};

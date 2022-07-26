// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function (str) {
  var strArr = str.split(" ");
  console.log(strArr);
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i] === ")" || strArr[i] === "}" || strArr[i] === "]") {
      if (strArr[i] === ")") {
        if (strArr[i - 1] === "{" || strArr[i - 1] === "[") {
          return false;
        }
      }
      if (strArr[i] === "}") {
        if (strArr[i - 1] === "(" || strArr[i - 1] === "[") {
          return false;
        }
      }
      if (strArr[i] === "]") {
        if (strArr[i - 1] === "{" || strArr[i - 1] === "(") {
          return false;
        }
      }
    }
  }
  return true;
};

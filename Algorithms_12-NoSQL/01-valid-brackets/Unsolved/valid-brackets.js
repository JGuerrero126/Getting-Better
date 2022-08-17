// This function takes in a string containing sets of Brackets and lets you know if all the Brackets are valid, meaning they all open and close correctly.

const validBrackets = function (str) {
  // First we take our string and split it up into an array, we specify to seperate anytime there is a space so we that way we don't get anything in our array besides Brackets. This will allow us to use simple logic to make things a lot easier.
  var strArr = str.split(" ");
  // We then use a for loop to go through our new array.
  for (i = 0; i < strArr.length; i++) {
    // Using a bit of problem-solving and thinking, we can figure out a way to catch any types of errors with ease and minimal programming. I was able to figure out the pattern of every time an incorrect pairing was found, an opening Bracket was followed by an incorrect closing Bracket. Using that logic we can simply check for all possible closing bracket.
    if (strArr[i] === ")" || strArr[i] === "}" || strArr[i] === "]") {
      // If we find a closing Bracket, then we check to see which type of Bracket it is. Given that all these checks are the same just for different types of Brackets, I'll just explain everything once.
      if (strArr[i] === ")") {
        // When the particular type of Bracket is found, we run a check to see if any of the ways an opening Bracket from a different type is in the previous position of our array. We also check if the previous position is undefined, we do this incase we are in the first position of the array which would mean that the very first Bracket is a closing Bracket so by defintion it would be mismatched.
        if (
          strArr[i - 1] === "{" ||
          strArr[i - 1] === "[" ||
          strArr[i - 1] === undefined
        ) {
          // If any of these checks are passed then we return False as the Brackets must be mismatched.
          return false;
        }
      }
      if (strArr[i] === "}") {
        if (
          strArr[i - 1] === "(" ||
          strArr[i - 1] === "[" ||
          strArr[i - 1] === undefined
        ) {
          return false;
        }
      }
      if (strArr[i] === "]") {
        if (
          strArr[i - 1] === "{" ||
          strArr[i - 1] === "(" ||
          strArr[i - 1] === undefined
        ) {
          return false;
        }
      }
    }
  }
  // If the for loop finishes and False hasn't been returned then we return True.
  return true;
};

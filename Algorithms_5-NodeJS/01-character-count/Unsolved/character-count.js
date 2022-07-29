// This function returns an object of every unique character in a string with values indicating how many times that character appeared in the string.

var characterCount = function (str) {
  // First we set up an empty object that will contain the characters from the given string with values indicating how many times they appear in the string.
  var obj = {};
  // We split the given string into an array where each character in the string is an element in the new array.
  var splitStr = str.split("");
  // This checks every element in the array we just made
  splitStr.forEach((element) => {
    // Here we are checking if the obj we created at the start of the function contains any properties that match the current element being checked.
    if (Object.hasOwn(obj, element)) {
      // If a match is found, increment the value pair of that property by one.
      obj[element]++;
    } else {
      // If no match is found, add that element to the object as a property with a default value of one.
      obj[element] = 1;
    }
  });
  // Return the object with all the unique characters from the string with values indicating how many times they appear in the string.
  return obj;
};

// This function can be used in place of the "reverse" method.

const reverse = (str) => {
  // First up, variables! We take our string and split it up into an array where each character becomes a single element in our new array. We then set up an empty array which will contain our reversed string.
  var splitStr = str.split("");
  var revStr = [];
  // Then we go through our array containing the given String.
  splitStr.forEach((element) => {
    // We take each element from that array and use the "unshift" method to move it the first position of our new "revStr" array, effectively reversing it one step at a time.
    revStr.unshift(element);
  });
  // Lastly, we use the "join" method to make our array a string and then return that new reversed string!
  return revStr.join("");
};

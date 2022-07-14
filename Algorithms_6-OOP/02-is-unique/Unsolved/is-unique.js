// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  if (arr.length < 1) {
    return true;
  }
  if (arr.length === new Set(arr).size) {
    return true;
  }
  return false;
};

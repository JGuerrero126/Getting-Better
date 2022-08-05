// This function takes an array and lets you know if every number in the array is unique, meaning that no number appears more than once.

var isUnique = function (arr) {
  // If the arrays length is less than or equal to 1 then return true since if theres only one or no numbers then it is unique as there are no possible repeats.
  if (arr.length <= 1) {
    return true;
  }
  // We get the length of the array and check it against a new Set that we make from a copy of that array. A set can't contain duplicates so if there are any in the array then they will be removed from the copy of the array, decreasing its length. So if a new Set is made from the array but the length or size remains the same then the array contains no duplicates.
  if (arr.length === new Set(arr).size) {
    return true;
  }
  // If both checks above fail then return false as the array contains duplicates.
  return false;
};

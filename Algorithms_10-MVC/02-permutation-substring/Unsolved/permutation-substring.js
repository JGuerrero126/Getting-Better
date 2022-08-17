// This function takes two strings, one acting as the main String and the other as a Sub String. It checks if the Sub String can be found in any permutation of the main string.

var permutationSubstring = function (str, sub) {
  // As per the usual, we gotta set up some base variables before we begin proper. First up, we take our main String and sort it after splitting it. The sort isn't necessary but it helps to speed things along, we do the same to our sub String which creates two arrays containing our String and Substring respectively. Lastly, we create a integer variable with a default of zero so we can keep track of how many matches we have.
  var sortedStr = str.split("").sort();
  var sortedSub = sub.split("").sort();
  var matchCount = 0;

  // Now we begin the real work, we use a "forEach" method to go through each of the elements in our Substring array
  sortedSub.forEach((element) => {
    // Within our "forEach" method, we next set up a for loop to go through the array containing our main String. This allows us to check our current element in the Substring against the entire main String
    for (i = 0; i < sortedStr.length; i++) {
      // We set up a check to see if our current element in the Substring matches the current element in our main String. If it doesn't, we skip to the next element in the for loop.
      if (element === sortedStr[i]) {
        // If a match is found, we remove that element from the array containing our main String. This is to remove the ability for false positives or negatives to occur should either string contain excessive duplicate letters.
        sortedStr.splice(i, 1);
        // After that, we increment our match Counter variable.
        matchCount++;
        // We then return out of the for loop early, so as to not permit any unnecessary counting and checking would could lead to incorrect information and statistics.
        return;
      }
    }
  });
  // Once our "forEach" is done, we apply a final check to see which boolean to return. We can do this in a relatively simple way, just measure our match Counter against our array containing our Substring. If they match in size and length then we can know that a match for every letter in the Substring was found, which means our Substring can be made up letters found within our main String. So we return true! If our check fails then that means that every letter in our Substring couldn't find a match, we must return false.
  return matchCount === sortedSub.length ? true : false;
};

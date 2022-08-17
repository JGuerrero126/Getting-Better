// This function is very similar to the previous function, we take a string and sub string and see if the sub string can be made up of any permutation of the main string given. The difference is that for this function we are dealing exclusively with whole words that must be unchanged in terms of captialization and spelling. The thinking for this function was seeing if the words from a concert flyer (the Substring) could be cut out from a magazine (main String).

var concertFlyer = function (magazine, flyer) {
  // First things first, we make some variables. We take both our main String and Substring, split them up into arrays where every word is its own element in the new array and create a variable that will hold that array. We also create a match Counter variable so we can easily determine how many matches we have.
  var sortedMag = magazine.split(" ");
  var sortedFly = flyer.split(" ");
  var matchCount = 0;

  // Then we begin the main work of the function, lets start by using a "forEach" function to go through each element in our Substring array.
  sortedFly.forEach((element) => {
    // We then use a for loop to loop through the array containing our main String, this allows to check each element of that array.
    for (i = 0; i < sortedMag.length; i++) {
      // Here we check each element of the main String array against our current element from the Substring array. If the check fails, we just go to the next element in the main String array.
      if (element === sortedMag[i]) {
        // If a match is found, we remove that word from the "magazine" meaning we take it out of the array to prevent any duplicates.
        sortedMag.splice(i, 1);
        // We then increment our Counter variable.
        matchCount++;
        // Lastly, we return out of the for loop, perhaps ending the loop early which saves on processing time and resources.
        return;
      }
    }
  });
  // After all the loops are done, we let a ternary operator handle the last bit of our function. If our match Counter matches the length of our Substring array, we return true as that means every single word we were looking for was found in the main String. If it doesn't match we return false as not all of the words we were searching for could be found.
  return matchCount === sortedFly.length ? true : false;
};

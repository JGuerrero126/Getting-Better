// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
  console.log(magazine.split(" ").sort());
  console.log(flyer.split(" ").sort());

  var sortedMag = magazine.split(" ");
  var sortedFly = flyer.split(" ");
  var matchCount = 0;

  sortedFly.forEach((element) => {
    for (i = 0; i < sortedMag.length; i++) {
      if (element === sortedMag[i]) {
        console.log("MATCH FOUND");
        matchCount++;
      }
    }
  });
  if (matchCount === sortedFly.length) {
    return true;
  }
  return false;
};

// This function lets you know if a given number is a perfect square

var isPerfectSquare = function (num) {
  // With specific phrasing we can eliminate a potential big complicator, negative integers. By phrasing the for loop as needing i to be less than or equal to the given number, any number below zero skips the main process of the code and returns zero while saving a ton of processing power. Giving the limit of "num" to i was just abritary. It was simply given so that way no matter how big the number was, the for loop would count high enough to check it properly.
  for (i = 0; i <= num; i++) {
    // This check is very key in saving resources and processing time. If it weren't there then the for loop would continue well past the number it was checking for needlessly. Specifically in the case of large numbers, this a major boost to saving time and resources.
    if (i * i > num) {
      return false;
    }
    // This is the main check that handles what the function is for. If this check is passed, you can be sure you have a perfect square.
    if (i * i === num) {
      return true;
    }
  }
  // If the for loop is skipped entirely then we return false by default since it isn't possible for the given number to be a perfect square as it isn't a positive integer.
  return false;
};

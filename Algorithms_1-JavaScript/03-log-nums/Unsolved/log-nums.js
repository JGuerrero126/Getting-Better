// This function logs all the numbers up to whatever number is given. For example, if you give it the number 5 then it would log "1,2,3,4,5". It also assumes the number given will be a postive integer.

var logNums = function (num) {
  // A simple for loop is used to do the counting, it starts at one and prints i, then it increases i by one and checks if it at the number yet. If it isnt then it logs i and the process repeats until the number given is reached.
  for (i = 1; i <= num; i++) {
    console.log(i);
  }
};

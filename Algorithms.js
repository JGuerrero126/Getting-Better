// ARITHMETIC
var add = function (num1, num2) {
  return num1 + num2;
};

var subtract = function (num1, num2) {
  return num1 - num2;
};

var multiply = function (num1, num2) {
  return num1 * num2;
};

var divide = function (num1, num2) {
  return num1 / num2;
};

// ODDorEVEN
var oddOrEven = function (num) {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
};

// LOG NUMS
var logNums = function (num) {
  for (i = 1; i <= num; i++) {
    console.log(i);
  }
};

// LOG EVEN NUMS
var logEvenNums = function (num) {
  for (i = 0; i <= num; i += 2) {
    console.log(i);
  }
};

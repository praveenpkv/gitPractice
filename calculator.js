const add = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divison = function (dividend, divisor) {
  return dividend / divisor;
}

const modulus = function (dividend, divisor) {
  return dividend % divisor;
}

const square = function (number) {
  return number * number;
}

const cube = function (number) {
  return number * number * number;
}

const simpleInterest = function (principal, rate, time) {
  return (principal * rate * time) / 100;
}

const compoundInterest = function (principal, rate, time) {
  return principal(Math.pow((100 + rate) / 100, time));
}
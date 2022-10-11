// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

var f = [];
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  if (f[n] > 0) return f[n];
  return (f[n] = factorial(n - 1) * n);
}
factorial(6);

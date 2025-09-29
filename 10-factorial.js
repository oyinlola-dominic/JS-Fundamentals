// Recursive factorial function
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Get the first argument
const num = parseInt(process.argv[2]);

// Check if argument is NaN
if (isNaN(num)) {
  console.log(1);
} else {
  console.log(factorial(num));
}

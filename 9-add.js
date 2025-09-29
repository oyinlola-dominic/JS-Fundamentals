// Function to add two integers
function add(a, b) {
  return a + b;
}

// Get the two arguments from command line
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Check if both are valid integers
if (isNaN(a) || isNaN(b)) {
  console.log("NaN");
} else {
  console.log(add(a, b));
}

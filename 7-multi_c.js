// Get the first argument
const arg = process.argv[2];

// Convert it to integer
const x = parseInt(arg);

// Check if it is a valid positive integer
if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  // Loop x times
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}

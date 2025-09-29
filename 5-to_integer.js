// Get the first argument
const arg = process.argv[2];

// Convert to integer using parseInt
const num = parseInt(arg);

// Check if conversion is successful
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}

// Get the first argument
const arg = process.argv[2];

// Convert it to integer
const size = parseInt(arg);

// Check if it is a valid positive integer
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  // Loop to print each row
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}

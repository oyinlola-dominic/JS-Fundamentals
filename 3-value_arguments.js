const arg = process.argv[2];  // process.argv[0] is node, argv[1] is the script name

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}

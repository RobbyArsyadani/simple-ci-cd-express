try {
  require("../src/index");
  console.log("Test passed");
} catch (e) {
  console.error("Test failed");
  process.exit(1);
}

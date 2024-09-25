const fs = require("fs").promises;

// Set the thread pool size (you can change this to test)
process.env.UV_THREADPOOL_SIZE = 4; // Change this value to 8 to see the difference
let total_count = 1;
const heavyCalculation = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("heavy duty for", total_count, "Done ");

  total_count += 1;
};

// Function to continuously write files every 10 seconds
const startWritingFiles = async () => {
  while (true) {
    await heavyCalculation();
  }
};

// Start the file writing process
startWritingFiles().catch((err) => {
  console.error("Error writing files:", err);
});

test("Path Traversal in gaoxuyan", async (done) => { // Use async/await for better handling of promises
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  await new Promise((resolve, reject) => {
    exploitFunction(payload, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });

  // Assuming the server has enough time to process the request and the flag file content is logged
  expect(stdout).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString()); // Replace with actual verification logic
  done();
});

// Note: The actual verification logic would depend on how the server handles the request and logs the output.
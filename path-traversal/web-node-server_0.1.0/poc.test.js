test("Path Traversal in web-node-server", async (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  await new Promise((resolve, reject) => {
    exploitFunction(payload, resolve);
  });

  // The test is asynchronous, so we need to wait for the callback to finish
  done();
});

// Ensure to handle any errors that might occur during the execution
afterEach(async () => {
  try {
    await new Promise((resolve, reject) => {
      execSync("fuser -k 8981/tcp", (error, stdout, stderr) => {
        if (error) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  } catch (e) {
    console.error("Failed to stop the server:", e);
  }
});
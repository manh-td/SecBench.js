test("Path Traversal in server12311", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const path = require("path");
  const { sleep } = require("sleep");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const payload = getPayload();

  // Start the server
  let server = "node ./node_modules/server12311/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  // Execute the exploit function with the payload
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(fs.readFileSync(pathToFlag).toString());

  done();
});

// Ensure to close the server after the test
afterAll(() => {
  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}
});
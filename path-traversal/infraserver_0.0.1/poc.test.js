test("Path Traversal in infraserver", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let expectedOutput = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  exploitFunction(payload);

  setTimeout(() => {
    // Assuming the exploitFunction sets some global variable or callback to indicate success
    const actualOutput = /* Some way to retrieve the actual output */;
    expect(actualOutput).toBe(expectedOutput);
    done();
  }, 3000); // Wait for the server to process the request
});
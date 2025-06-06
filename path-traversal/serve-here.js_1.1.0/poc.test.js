test("Path Traversal in serve-here.js", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  exploitFunction({ payload });

  setTimeout(() => {
    expect.assertions(1);
    const fs = require("fs");
    const expectedContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
    const actualContent = fs.readFileSync(`${__dirname}/output.html`).toString();
    expect(actualContent).toBe(expectedContent);
    done();
  }, 3000); // Wait for the server to process the request
});

// Ensure necessary cleanup
afterAll(() => {
  try {
    execSync("fuser -k 8000/tcp");
  } catch (e) {}
});
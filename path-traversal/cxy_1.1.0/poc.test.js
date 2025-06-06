test("Path Traversal in cxy", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const output = exploitFunction(payload);

  expect(output).toBe(fs.readFileSync(pathToFlag).toString());
  done();
});

afterAll(() => {
  try {
    execSync("fuser -k 8081/tcp");
  } catch (e) {}
});
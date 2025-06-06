test("Path Traversal in yypsulie11", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output;

  exploitFunction(payload, (result) => {
    output = result;
    done();
  });

  fs.readFile(path.resolve(__dirname, "../flag.html"), "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    expect(output).toBe(data);
  });
});

afterAll(() => {
  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}
});
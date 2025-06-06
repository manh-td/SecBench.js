const path = require('path');

test("Path Traversal in my-sn", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output.stdout.includes(`GET /${path.basename(path.resolve(__dirname, "../flag.html"))} HTTP/1.1`)).toBe(true);
  expect(output.stdout.includes(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString())).toBe(true);
});

// Note: The above test assumes that the exploit function returns a promise or an object with stdout.
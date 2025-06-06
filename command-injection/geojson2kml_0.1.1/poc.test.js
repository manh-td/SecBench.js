test("Command Injection in geojson2kml", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(...Object.values(payload), done); // Ensure done is called here

  // The done callback is expected to be called to indicate the test is complete
});

// Note: The done callback should be called in the callback of fs.unlink to properly close the test.
test("Remote code execution in gity", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  // After the function runs, verify that the file was created and then removed
  setTimeout(() => {
    const path = "./gity";
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(false);
    done();
  }, 1000); // Wait for the file to be created and removed
});

// Note: This test assumes that the `fs` module is available and properly configured.
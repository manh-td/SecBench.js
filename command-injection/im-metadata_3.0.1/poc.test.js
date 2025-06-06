test("Command Injection in im-metadata", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./im-metadata";

  const payload = getPayload();

  // Execute the exploit function with the payload
  exploitFunction(payload, { exif: true }, function (error, metadata) {
    // Check if the file exists after the command execution
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);

    // Clean up the file
    fs.unlink(path, function (err) {
      done();
    });
  });
});
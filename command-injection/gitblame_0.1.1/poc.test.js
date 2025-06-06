test("Command Injection in gitblame", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./gitblame";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }

  const file_exist = !fs.existsSync(path);

  getPayload(); // Generate the payload
  exploitFunction(getPayload()); // Execute the payload

  const file_exist_after = fs.existsSync(path);

  expect(file_exist).toBe(true);
  expect(file_exist_after).toBe(false); // This should be true after the payload execution

  fs.unlink(path, function (err) {
    done();
  });
});
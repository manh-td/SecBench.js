test("Arbitrary code execution in node-rules", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();

    exploitFunction(payload);

    // Assuming there's some way to verify the file was created
    const fs = require("fs");
    const path = "./node-rules";
    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(false); // Ensure the file was deleted after the test
});
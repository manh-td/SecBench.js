test("Command Injection in @thi.ng/egf", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const fs = require("fs");

    const payload = getPayload();
    let output = exploitFunction(...Object.values(payload));

    // Verify the output
    const fileExist = fs.existsSync("./egf");
    expect(file_exist).toBe(true);
});
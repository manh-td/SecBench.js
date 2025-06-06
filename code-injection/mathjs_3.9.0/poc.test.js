test("Arbitrary code execution in mathjs", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const fs = require("fs");

    const payload = getPayload();
    exploitFunction(payload);

    const file_exist = fs.existsSync("./mathjs");
    expect(file_exist).toBe(true);

    fs.unlink("./mathjs", function (err) {
        if (err) throw err;
        console.log("File deleted successfully.");
    });
});
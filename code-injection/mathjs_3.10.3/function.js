function exploitFunction(payload) {
    const fs = require("fs");
    const math = require("mathjs");
    const util = require("util"); // Ensure util is imported

    const file_exist = fs.existsSync("./mathjs");
    expect(file_exist).toBe(false);

    try {
        math.eval(payload);
    } catch (error) {}

    const file_exist_after = fs.existsSync("./mathjs");
    expect(file_exist_after).toBe(true);

    fs.unlink("./mathjs", function (err) {});
}

module.exports = { exploitFunction };
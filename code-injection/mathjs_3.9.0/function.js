function exploitFunction(payload) {
    const fs = require("fs");
    const math = require("mathjs");
    const path = "./mathjs";

    const file_exist = fs.existsSync(path);
    expect(file_exist).toBe(false);

    try {
        math.eval(payload.code)();
    } catch (error) {}

    const file_exist_after = fs.existsSync(path);
    expect(file_exist_after).toBe(true);

    fs.unlink(path, function (err) {});
}

module.exports = { exploitFunction };
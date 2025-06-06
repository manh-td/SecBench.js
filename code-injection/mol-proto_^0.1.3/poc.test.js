test("Arbitrary code execution in mol-proto", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    const path = './mol-proto';
    const fileExist = fs.existsSync(path);

    expect(fileExist).toBe(true);

    fs.unlink(path, function () {});
});
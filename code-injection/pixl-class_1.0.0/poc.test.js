test("Arbitrary code execution in pixl-class", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();

    exploitFunction(payload);

    // Verify the output
    expect(fs.existsSync("./pixl-class")).toBe(true);
});

// Note: Ensure you have the necessary imports at the top of your test file.
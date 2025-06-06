function exploitFunction(payload) {
    const { trim, measureTime } = require("../utils");
    const { attack_str } = payload;

    // Ensure build_blank is defined in the payload
    if (!payload.build_blank) {
        throw new Error("build_blank is missing in the payload");
    }

    let t = measureTime(function () {
        trim(payload.build_blank(50000));
    });

    let time = t[0] + t[1] / 1000000000;

    return { time };
}

module.exports = { exploitFunction };
function exploitFunction(payload) {
    const { compiler } = require("markdown-to-jsx");
    const measureTime = require("../utils").measureTime;

    let t = measureTime(function () {
        compiler(payload.attack_str, { disableParsingRawHTML: false });
    });

    let time = t[0] + t[1] / 1000000000;
    return { time };
}

module.exports = { exploitFunction };
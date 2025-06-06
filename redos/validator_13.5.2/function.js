const validator = require("validator");
const measureTime = require("../utils").measureTime;

function exploitFunction(payload) {
    const attack_str = payload.payload;
    let t = measureTime(() => {
        validator.isSlug(attack_str);
    });
    let time = t[0] + t[1] / 1000000000;
    return { time };
}

module.exports = { exploitFunction };
function exploitFunction(payload) {
    const { attack_str } = payload;
    const { measureTime } = require("../utils"); // Ensure measureTime is imported
    const t = measureTime(() => {
        attack_str.trim().split(/ *, */);
    });
    const time = t[0] + t[1] / 1000000000;
    return time;
}

module.exports = { exploitFunction };
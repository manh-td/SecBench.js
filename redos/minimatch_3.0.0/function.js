function exploitFunction(attack_str) {
    const minimatch = require("minimatch");
    const measureTime = require("../utils").measureTime;

    let t = measureTime(() => {
        minimatch("foo", attack_str);
    });

    let time = t[0] + t[1] / 1000000000;

    return { time };
}

module.exports = { exploitFunction };
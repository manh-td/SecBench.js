function exploitFunction(pattern, regex) {
    const match = require("amqp-match");
    const measureTime = require("../utils").measureTime;

    let t = measureTime(function () {
        match(pattern, regex);
    });

    let time = t[0] + t[1] / 1000000000;
    return { time };
}

module.exports = { exploitFunction };
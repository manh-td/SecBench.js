function exploitFunction(payload) {
    const marked = require("marked");
    const measureTime = require("../utils").measureTime;

    let str = payload.str;
    let t = measureTime(function () {
        var agent = marked(str);
    });
    let time = t[0] + t[1] / 1000000000;
    return time;
}

module.exports = { exploitFunction };
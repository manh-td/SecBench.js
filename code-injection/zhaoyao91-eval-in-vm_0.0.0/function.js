function exploitFunction(code) {
    const eval1 = require("@zhaoyao91/eval-in-vm");
    try {
        ("use strict");
        eval1(code);
    } catch (error) {}
}

module.exports = { exploitFunction };
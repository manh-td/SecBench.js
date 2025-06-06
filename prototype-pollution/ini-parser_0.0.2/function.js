function exploitFunction(iniContent) {
    const a = require("ini-parser");
    a.parse(iniContent);
}

module.exports = { exploitFunction };
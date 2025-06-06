function exploitFunction(code) {
    const ve = require("veval");
    try {
        ve({}, code);
    } catch (error) {}
}

module.exports = { exploitFunction };
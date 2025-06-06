function exploitFunction(payload) {
    const { JSDOM } = require("jsdom");
    const { window } = new JSDOM("");
    const $ = require("jquery")(window);

    const obj = {};

    // Extend the object with the payload
    $.extend(true, obj, payload); // Correctly extend the obj with the payload

    return obj;
}

module.exports = { exploitFunction };
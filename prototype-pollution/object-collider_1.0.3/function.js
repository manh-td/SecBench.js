function exploitFunction(payload) {
    var { collide } = require("object-collider");
    const obj = {};
    collide(obj, payload);
}

module.exports = { exploitFunction };
function exploitFunction(instance) {
    const { validate } = require("json-schema");
    validate(instance);
}

module.exports = { exploitFunction };
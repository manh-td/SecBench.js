function exploitFunction(schema) {
    const jsen = require("jsen");
    const validate = jsen(schema);
    validate({});
}

module.exports = { exploitFunction };
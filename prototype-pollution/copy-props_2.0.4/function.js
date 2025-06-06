const copyProps = require("copy-props");

function exploitFunction(payload) {
    copyProps(payload, {});
}

module.exports = { exploitFunction };
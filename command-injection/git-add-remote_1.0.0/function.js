const root = require("git-add-remote")();

function exploitFunction(payload) {
    root(payload, "", function () {});
}

module.exports = { exploitFunction };
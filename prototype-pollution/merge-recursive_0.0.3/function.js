const merge = require("merge-recursive").recursive;

function exploitFunction(payload) {
    const obj = {};
    merge(obj, JSON.parse(payload));
}

module.exports = { exploitFunction };
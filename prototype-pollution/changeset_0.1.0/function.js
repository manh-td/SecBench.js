function exploitFunction(patch) {
    const changeset = require("changeset");
    const obj = {};
    changeset.apply(patch, obj, true);
    return obj;
}

module.exports = { exploitFunction };
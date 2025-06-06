function exploitFunction(payload) {
    const { EVIL_DATA } = payload;
    const deepMerge = require("deepmergefn");

    const result = deepMerge({}, EVIL_DATA);
    return result;
}

module.exports = { exploitFunction };
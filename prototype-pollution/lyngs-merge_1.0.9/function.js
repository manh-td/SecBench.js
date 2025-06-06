function exploitFunction(payload) {
    const { merge } = require("@lyngs/merge");
    const dummyObject = { dummy: 1 };
    const pollutedObject = merge(dummyObject, payload);
    return pollutedObject;
}

module.exports = { exploitFunction };
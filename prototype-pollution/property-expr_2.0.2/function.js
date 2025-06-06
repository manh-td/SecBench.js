function exploitFunction(payload) {
    payload.setterCall(payload.obj, "yes");
}

module.exports = { exploitFunction };
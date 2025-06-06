function exploitFunction(obj) {
    const { __proto__, polluted } = obj;
    if (__proto__) {
        Object.setPrototypeOf({}, __proto__);
    }
    return { polluted };
}

module.exports = { exploitFunction };
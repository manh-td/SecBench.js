function exploitFunction(paths, setFn) {
    const obj = {};
    setFn(obj, paths[0], "yes");
}

module.exports = { exploitFunction };
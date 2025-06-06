function exploitFunction(payload) {
    const { config } = payload;
    
    // This is the vulnerable part where the prototype pollution occurs
    config.set("__proto__.polluted", "yes");
}

module.exports = { exploitFunction };
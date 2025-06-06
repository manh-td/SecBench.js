function getPayload() {
    return {
        schema: {
            type: "object",
            properties: {
                foo: {
                    type: "string",
                    oneOf: [
                        { pattern: "if(".repeat(10000) + "x" + ")".repeat(10000) }
                    ]
                }
            }
        }
    };
}

module.exports = { getPayload };
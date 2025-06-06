function getPayload() {
    const longSpace = " ".repeat(200);
    return {
        paragraph: `\n## This is a long "${longSpace}" heading ##\n`
    };
}

module.exports = { getPayload };
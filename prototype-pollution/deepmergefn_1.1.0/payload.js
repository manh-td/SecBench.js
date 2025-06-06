function getPayload() {
    return {
        EVIL_DATA: JSON.parse('{"__proto__":{"polluted":"yes"}}')
    };
}

module.exports = { getPayload };
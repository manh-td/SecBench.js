function getPayload() {
    return JSON.parse(`{"__proto__":{"polluted":"yes"}}`);
}

module.exports = { getPayload };
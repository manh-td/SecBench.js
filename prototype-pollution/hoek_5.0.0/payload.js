function getPayload() {
    const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
    return JSON.parse(malicious_payload);
}

module.exports = { getPayload };
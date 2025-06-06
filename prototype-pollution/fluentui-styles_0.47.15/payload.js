function getPayload() {
    const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
    return { malicious_payload };
}

module.exports = { getPayload };
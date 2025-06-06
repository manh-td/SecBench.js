function getPayload() {
    const EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
    return { EVIL_JSON };
}

module.exports = { getPayload };
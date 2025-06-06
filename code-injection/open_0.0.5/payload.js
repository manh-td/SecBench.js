function getPayload() {
    return {
        command: 'echo "This is a safe command"'
    };
}

module.exports = { getPayload };
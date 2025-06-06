function getPayload() {
    return "require('fs').writeFileSync('./cd-messenger', ''); //";
}

module.exports = { getPayload };
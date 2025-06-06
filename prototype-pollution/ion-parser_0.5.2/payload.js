function getPayload() {
    const fs = require("fs");
    const path = require("path");

    return fs.readFileSync(path.resolve(__dirname, "./payload.toml"), "utf-8");
}

module.exports = { getPayload };
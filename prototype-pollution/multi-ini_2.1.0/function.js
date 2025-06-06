const ini = require("multi-ini");
const path = require("path");

function exploitFunction(payload) {
    ini.read(path.resolve(__dirname, "./payload.toml"), { encoding: "utf8" });
}

module.exports = { exploitFunction };
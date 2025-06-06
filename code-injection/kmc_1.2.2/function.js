function exploitFunction(payload) {
    const fs = require("fs");
    const path = "./exploit.js";

    fs.writeFileSync(path, payload);

    try {
        const kmc = require("kmc/lib");
        kmc.analyze(path);
    } finally {
        fs.unlinkSync(path);
    }
}

module.exports = { exploitFunction };
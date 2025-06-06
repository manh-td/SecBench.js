function exploitFunction(payload) {
    const fs = require("fs");
    const serialize = require("serialize-to-js");

    const path = "./serialize-to-js";
    let file_exist = fs.existsSync(path);

    try {
        serialize.deserialize(payload);
    } catch (error) {}

    file_exist = fs.existsSync(path);

    return file_exist;
}

module.exports = { exploitFunction };
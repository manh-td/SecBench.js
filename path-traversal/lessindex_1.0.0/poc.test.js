test("Path Traversal in lessindex", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const { sleep } = require("sleep");

    const payload = getPayload();
    const genstr = payload.genstr;

    const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    const output = exploitFunction(payload);

    output.on('close', (code) => {
        expect(code).toBe(0); // Ensure the server exited correctly
        expect(output.stdout).toBe(hostsFile);
        done();
    });

    output.stderr.pipe(process.stderr);
});
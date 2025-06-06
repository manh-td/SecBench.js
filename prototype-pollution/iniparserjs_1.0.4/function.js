function exploitFunction(config) {
    var path = require("path");
    var IniParser = require("iniparserjs");

    var parser = new IniParser(path.join(__dirname, "test.ini"), "UTF8");
    var sections = parser.sections();

    // This line is vulnerable because it allows for prototype pollution
    Object.assign({}, sections);

    console.log("After:", {});
}

module.exports = { exploitFunction };
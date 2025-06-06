const killport = require("killport");

function exploitFunction(payload) {
    try {
        killport(payload);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { exploitFunction };
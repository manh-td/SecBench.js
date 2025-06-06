function exploitFunction() {
    const ini = require("node-ini");

    try {
        ini.parse("./payload.ini", function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    } catch (e) {
        console.error(e);
    }
}

module.exports = { exploitFunction };
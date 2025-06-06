function exploitFunction(payload) {
    var fs = require("fs");
    var sharedIniFileLoader = require("@aws-sdk/shared-ini-file-loader");

    return sharedIniFileLoader.loadSharedConfigFiles(payload);
}

module.exports = { exploitFunction };
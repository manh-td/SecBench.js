const sea = require("modjs/lib/utils/sea"); // Ensure you have the correct path to sea

function exploitFunction(payload) {
  sea.findSeajsConfig(payload);
}

module.exports = { exploitFunction };
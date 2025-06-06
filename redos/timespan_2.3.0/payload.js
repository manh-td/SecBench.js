const genstr = require("../utils").genstr;

function getPayload() {
  return genstr(30000, "1");
}

module.exports = { getPayload };
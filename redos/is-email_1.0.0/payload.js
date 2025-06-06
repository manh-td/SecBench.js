function getPayload() {
  const genstr = require("../utils").genstr;
  return genstr(3000, "@") + "!";
}

module.exports = { getPayload };
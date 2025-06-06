function getPayload() {
  const genstr = require("../utils").genstr;
  return { str: genstr(81750, "5") };
}

module.exports = { getPayload };
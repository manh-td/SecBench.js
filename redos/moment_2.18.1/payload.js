function getPayload() {
  const genstr = require("../utils").genstr;
  return { str: genstr(50000, "1") };
}

module.exports = { getPayload };
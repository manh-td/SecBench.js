function getPayload() {
  const genstr = require("../utils").genstr;

  const color = "rgb(" + genstr(14, "0000,") + "000";

  return { color };
}

module.exports = { getPayload };
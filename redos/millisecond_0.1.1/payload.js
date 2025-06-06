function getPayload() {
  const genstr = require("../utils").genstr;

  let attack_str = genstr(20000, "1") + "x";

  return { attack_str };
}

module.exports = { getPayload };
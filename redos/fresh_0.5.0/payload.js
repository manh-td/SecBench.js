function getPayload() {
  const genstr = require("../utils").genstr;
  return {
    str: genstr(60000, " ") + "x"
  };
}

module.exports = { getPayload };
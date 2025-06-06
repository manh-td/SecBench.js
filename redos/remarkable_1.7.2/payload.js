function getPayload() {
  const genstr = require("../utils").genstr;
  return `# Remarkable rulezz!<a>z</a><![CDATA[` + genstr(9000000, "a") + `]] >`;
}

module.exports = { getPayload };
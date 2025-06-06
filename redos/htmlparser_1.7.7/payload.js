function getPayload() {
  const genstr = require("../utils").genstr;
  return {
    rawHtml: "<html><x" + genstr(50000, " ") + "x></html>"
  };
}

module.exports = { getPayload };
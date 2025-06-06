function exploitFunction(payload) {
  const Templ8 = require("Templ8");
  const tpl = new Templ8(payload);
  tpl.parse();
}

module.exports = { exploitFunction };
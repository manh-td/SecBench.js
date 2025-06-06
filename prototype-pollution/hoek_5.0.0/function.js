function exploitFunction(payload) {
  const Hoek = require("hoek");
  Hoek.merge({}, payload);
}

module.exports = { exploitFunction };
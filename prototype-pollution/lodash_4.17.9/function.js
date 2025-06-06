const _ = require("lodash");

function exploitFunction(payload) {
  _.merge({}, payload);
}

module.exports = { exploitFunction };
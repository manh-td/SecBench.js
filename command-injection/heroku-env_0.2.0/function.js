const root = require("heroku-env");

function exploitFunction(command, arg, callback) {
  root(command, arg, callback);
}

module.exports = { exploitFunction };
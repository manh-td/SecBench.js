const aureliaPath = require("aurelia-path");

function exploitFunction(queryString) {
  aureliaPath.parseQueryString(queryString);
}

module.exports = { exploitFunction };
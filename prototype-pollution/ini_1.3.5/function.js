function exploitFunction(payload) {
  const fs = require("fs");
  const path = require("path");
  const ini = require("ini");

  const iniContent = payload;
  ini.parse(iniContent);
}

module.exports = { exploitFunction };
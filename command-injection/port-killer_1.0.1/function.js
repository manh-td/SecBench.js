function exploitFunction(payload) {
  const port_killer = require("port-killer");
  const fs = require("fs");

  port_killer(payload);
}

module.exports = { exploitFunction };
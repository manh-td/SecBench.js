function exploitFunction(payload) {
  const fs = require("fs");
  const serialize = require("serialize-javascript");

  eval(
    "(" +
      serialize(payload) +
      ")"
  );
}

module.exports = { exploitFunction };
function exploitFunction(payload) {
  const censor = require("value-censorship");
  try {
    censor(payload);
  } catch (error) {}
}

module.exports = { exploitFunction };
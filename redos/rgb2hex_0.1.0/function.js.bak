function exploitFunction(payload) {
  const { genstr } = require("../utils");
  const rgb2hex = require("rgb2hex");

  const color = payload.color;

  try {
    rgb2hex(color);
  } catch (e) {
    console.error(e);
  }
}

module.exports = { exploitFunction };
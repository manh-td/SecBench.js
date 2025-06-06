function exploitFunction(payload) {
  const safeEval = require("safe-eval");
  try {
    safeEval(payload.code);
  } catch (error) {}
}

module.exports = { exploitFunction };
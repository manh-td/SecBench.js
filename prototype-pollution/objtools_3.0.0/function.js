function exploitFunction(payload) {
  const obj = {};
  objtools.merge(obj, payload);
  return obj;
}

module.exports = { exploitFunction };
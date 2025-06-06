function exploitFunction(payload) {
  const util = require("@uifabric/utilities");
  const source2 = {
    k3: {},
  };

  const result = util.merge(source2, JSON.parse(payload));
  return result;
}

module.exports = { exploitFunction };
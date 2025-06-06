function exploitFunction(payload) {
  const util = require("@firebase/util");
  const a = {
    nest: {
      number: 1,
      string: "1",
      object: { key: "1" },
      date: new Date(1),
      nest: {
        a: 1,
      },
    },
  };

  return util.deepExtend(a, payload);
}

module.exports = { exploitFunction };
function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const ssri = require("ssri");

  const integrity = payload.integrity;

  let t = measureTime(() => {
    const parsed = ssri.parse(integrity, {
      strict: true,
      single: true,
    });
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };
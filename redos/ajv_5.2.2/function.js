function exploitFunction(schema) {
  const measureTime = require("../utils").measureTime;
  const Ajv = require("ajv");
  const ajv = new Ajv();

  const t = measureTime(() => {
    ajv.compile(schema);
  });

  const time = t[0] + t[1] / 1000000000;
  if (time > 1) {
    return true; // or any other verification logic
  }
  return false;
}

module.exports = { exploitFunction };
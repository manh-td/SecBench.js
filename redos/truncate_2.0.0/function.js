function exploitFunction(payload) {
  const input = payload.input;
  const truncateFunction = payload.truncateFunction;
  const measureTime = require("../utils").measureTime; // Ensure measureTime is imported here as well

  let t = measureTime(() => {
    truncateFunction(input, 4);
  });

  let time = t[0] + t[1] / 1000000000;

  if (time > 1) {
    return true;
  } else {
    return false;
  }
}

module.exports = { exploitFunction };
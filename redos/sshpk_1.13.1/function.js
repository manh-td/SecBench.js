function exploitFunction(keyPub) {
  const sshpk = require("sshpk");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    try {
      sshpk.parseKey(keyPub, "ssh");
    } catch (e) {}
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };
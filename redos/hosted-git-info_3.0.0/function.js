function exploitFunction(payload) {
  const hostedGitInfo = require("hosted-git-info");
  const measureTime = require("../utils").measureTime;

  var attack_str = payload;
  let t = measureTime(function () {
    var parsedInfo = hostedGitInfo.fromUrl(attack_str);
    return { parsedInfo, time: [t[0], t[1]] }; // Return parsedInfo and timing
  });

  let time = t.time[0] + t.time[1] / 1000000000;
  return { time, parsedInfo: t.parsedInfo }; // Use t.parsedInfo instead of parsedInfo
}

module.exports = { exploitFunction };
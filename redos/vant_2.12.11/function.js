const isEmail = require("vant/lib/utils/validate/email").isEmail;
const measureTime = require("../utils").measureTime;

function exploitFunction(payload) {
  let t = measureTime(() => {
    var check = isEmail(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };
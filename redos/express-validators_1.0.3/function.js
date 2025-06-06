const expressValidators = require("express-validators");

function exploitFunction(payload) {
  const Obj = payload;
  const rules = { urlValue: "url" };
  const messages = { urlValue: { url: "https://www.google.com/" } };
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    expressValidators.validator(Obj, rules, messages, function (err, validated) {});
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };
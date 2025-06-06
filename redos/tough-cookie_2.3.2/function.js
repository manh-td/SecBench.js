function exploitFunction(payload) {
  const tough = require("tough-cookie");
  let Cookie = tough.Cookie;
  let t = require("../utils").measureTime(function () {
    var cookie = Cookie.parse(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };
function exploitFunction(payload) {
  var swiper = require("swiper");
  swiper.default.extendDefaults(JSON.parse(payload));
}

module.exports = { exploitFunction };
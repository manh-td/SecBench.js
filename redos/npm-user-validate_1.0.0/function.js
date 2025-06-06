function exploitFunction(payload) {
  const npmu = require("npm-user-validate");
  const attack_str = payload;

  const t = measureTime(() => {
    npmu.email(attack_str);
  });

  const time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };
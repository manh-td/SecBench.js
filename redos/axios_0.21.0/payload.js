function build_blank(n) {
  var ret = "1";
  for (var i = 0; i < n; i++) {
    ret += " ";
  }
  return ret + "1";
}

function getPayload() {
    return build_blank(50000);
}

module.exports = { getPayload };
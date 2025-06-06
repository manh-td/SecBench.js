function getPayload() {
  const s = "a" + "\n".repeat(45000) + "a";
  return { payload: s };
}

module.exports = { getPayload };
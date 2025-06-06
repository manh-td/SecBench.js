function getPayload() {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  return {
    pathToFlag,
    genstr: (n) => "/..".repeat(10) + pathToFlag // Reduce the number of ".." to prevent DoS
  };
}

module.exports = { getPayload };
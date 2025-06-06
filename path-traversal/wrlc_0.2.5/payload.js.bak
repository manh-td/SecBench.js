function getPayload() {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  return {
    pathToFlag,
    genstr: (n) => "/..".repeat(50) + pathToFlag
  };
}

module.exports = { getPayload };
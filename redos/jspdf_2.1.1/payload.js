function getPayload() {
  return {
    payload: "data:image/jpeg;" + "charset=x".repeat(25) + "!base64,"
  };
}

module.exports = { getPayload };
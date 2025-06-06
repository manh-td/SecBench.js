function getPayload() {
  return `ssh-rsa a${" ".repeat(30000)}x\nx`;
}

module.exports = { getPayload };
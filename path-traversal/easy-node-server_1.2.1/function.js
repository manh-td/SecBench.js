function exploitFunction(payload) {
  const pkg = require("easy-node-server");
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile;

  try {
    execSync("fuser -k 8895/tcp", () => {});
  } catch (e) {}

  pkg.start({
    port: 8895,
    assetPath: __dirname,
  });

  try {
    hostsFile = fs.readFileSync(payload).toString();
  } catch (e) {
    console.error("Failed to read file:", e);
    throw e;
  }

  return hostsFile;
}

module.exports = { exploitFunction };
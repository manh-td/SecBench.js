function exploitFunction(payload) {
  const pkg = require("proxey");
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile;

  try {
    hostsFile = fs.readFileSync(payload).toString();
  } catch (e) {
    throw new Error("Failed to read file");
  }

  pkg.run({
    rootFolder: "./",
    port: 8981,
    proxyUrl: "/proxy",
    vars: { "X-Api-Token": "12345" },
    routes: {
      "/": "home.html",
      "/users": "users.html",
      "/api/users": "users.json",
    },
    charset: "utf-8",
  });

  return hostsFile;
}

module.exports = { exploitFunction };
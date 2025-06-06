function exploitFunction({ pathToFlag }) {
  const basicStatic = require("basic-static");
  const serveStatic = basicStatic({
    rootDir: process.cwd(),
    compress: true,
  });

  const http = require("http");
  const fs = require("fs");

  let hostsFile = fs.readFileSync(pathToFlag).toString();

  const server = http.createServer(function (req, res) {
    serveStatic(req, res);
  });

  server.listen(8999);

  return { hostsFile };
}

module.exports = { exploitFunction };
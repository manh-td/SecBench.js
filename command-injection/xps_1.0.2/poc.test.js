test("Command Injection in xps", (done) => {
  const { exploitFunction } = require("./utils/function");
  const { getPayload } = require('./utils/payload');

  const payload = getPayload();
  exploitFunction(payload);

  done();
});
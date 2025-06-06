test("Command Injection in whereis", (done) => {
  const { exploitFunction } = require("./function");
  const { getPayload } = require('./payload');

  const payload = getPayload();

  exploitFunction(payload);

  done();
});
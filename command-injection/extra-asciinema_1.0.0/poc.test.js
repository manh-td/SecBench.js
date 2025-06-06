test("Command Injection in extra-asciinema", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  fs.readFile("./extra-asciinema", "utf8", function (err, data) {
    if (err) {
      throw err;
    }
    expect(data).toBe("");
    done();
  });
});
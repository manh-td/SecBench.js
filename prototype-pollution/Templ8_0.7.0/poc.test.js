test("Prototype pollution in Templ8", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  try {
    expect(global.polluted).toBe("yes"); // Adjust the expectation based on your global context
  } catch {
    expect(false).toBe(true);
  }
});
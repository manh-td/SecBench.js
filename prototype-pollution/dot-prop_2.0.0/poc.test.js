test("Prototype pollution in dot-prop", () => {
  const { exploitFunction } = require("./function"); // Correct path to the function file
  const { getPayload } = require('./payload'); // Correct path to the payload file

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(Object.keys(output)).toContain("__proto__");
  expect(output.__proto__.polluted).toBe("yes");
});
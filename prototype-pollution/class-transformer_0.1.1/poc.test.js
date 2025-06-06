test("Prototype pollution in class-transformer", () => {
  const { exploitFunction } = require("./function"); // Adjust the path as needed
  const { getPayload } = require("./payload"); // Adjust the path as needed

  expect({}.polluted).toBe(undefined);

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});
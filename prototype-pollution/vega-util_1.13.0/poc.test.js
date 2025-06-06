test("Prototype pollution in vega-util", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const config = "{style: {point: {shape: 'triangle-right'}}}";

  expect({}.polluted).toBe(undefined);

  const payload = getPayload();
  exploitFunction(config, payload);

  expect({}.polluted).toBe("yes");
});
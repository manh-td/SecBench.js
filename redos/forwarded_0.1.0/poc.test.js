const { exploitFunction, getMeasureTime } = require("./function.js");
const { getPayload } = require('./payload.js');

// Require necessary modules
const measureTime = getMeasureTime();

test("ReDos in revalidator", () => {
  const payload = getPayload();
  const result = exploitFunction({ headers: { "x-forwarded-for": payload } });

  expect(result.time).toBeGreaterThan(1);
});
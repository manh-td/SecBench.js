test("ReDos in revalidator", () => {
  const { validateBaseUrl } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;

  const payload = getPayload();
  let t = measureTime(function () {
    validateBaseUrl(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  expect(time).toBeGreaterThan(1);
});
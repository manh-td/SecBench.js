test("prototype pollution in lodash", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const _ = require('lodash'); // Import lodash

    const payload = getPayload();
    const obj = exploitFunction(payload);

    expect(Object.prototype.polluted).toBeUndefined(); // Ensure the prototype is not polluted
    expect(obj.polluted).toBe("yes"); // Verify the object's polluted property
});

test("prototype pollution in lodash with setWith", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const _ = require('lodash'); // Import lodash

    const payload = getPayload();
    const obj = exploitFunction(payload);

    expect(Object.prototype.polluted).toBeUndefined(); // Ensure the prototype is not polluted
    expect(obj.polluted).toBe("yes"); // Verify the object's polluted property
});
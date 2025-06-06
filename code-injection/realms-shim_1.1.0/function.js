function exploitFunction(payload) {
  let Realm = require("realms-shim");
  const r = Realm.makeRootRealm();

  r.evaluate(payload);

  return {};
}

module.exports = { exploitFunction };
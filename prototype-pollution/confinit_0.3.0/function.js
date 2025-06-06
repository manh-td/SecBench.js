function exploitFunction(root, payload) {
  root.setDeepProperty({}, payload, "yes");
}

module.exports = { exploitFunction };
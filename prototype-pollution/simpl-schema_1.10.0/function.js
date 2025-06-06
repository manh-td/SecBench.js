function exploitFunction(payload) {
  const SimpleSchema = require("simpl-schema").default;

  SimpleSchema.setDefaultMessages(payload);
}

module.exports = { exploitFunction };
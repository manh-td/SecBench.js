function exploitFunction(payload) {
  const publisher = require("apex-publish-static-files");
  const fs = require("fs");

  try {
    publisher.publish(payload);
  } catch (err) {
    // Handle error if needed
  }
}

module.exports = { exploitFunction };
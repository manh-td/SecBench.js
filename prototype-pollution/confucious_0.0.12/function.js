function exploitFunction(payload) {
  if (!payload || typeof payload !== 'object' || Object.keys(payload).length === 0) {
    throw new Error('Payload is invalid or empty');
  }

  const confucious = require("confucious");
  confucious.set(Object.keys(payload)[0], payload[Object.keys(payload)[0]]);
}

module.exports = { exploitFunction };